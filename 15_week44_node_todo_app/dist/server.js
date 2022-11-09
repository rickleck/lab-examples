import $eqrMV$express from "express";
import $eqrMV$fsextra from "fs-extra";
import {Storage as $eqrMV$Storage} from "@google-cloud/storage";
import $eqrMV$path from "path";






class $432ebeeee125727a$export$a002182e51710d39 {
    /** @type {string} */ static LOCAL_DATA_PATH = (0, $eqrMV$path).resolve("data", "data.json");
    /** @type {string} */ static PUBLIC_PATH = (0, $eqrMV$path).resolve("dist", "public");
    /** @type {string} */ static ENV_DEV_LOCAL = "dev-local";
    /** @type {number} */ static PORT = process.env.PORT || 7777;
}


class $f53a3e7e4a0f6ba6$export$7e4bb06c8b8658a1 {
    /**
     * @type {File}
     */ static #gcloudFile;
    /**
     * @returns {File}
     */ static get gcloudFile() {
        if (!this.#gcloudFile) this.#gcloudFile = new (0, $eqrMV$Storage)().bucket(process.env.GCLOUD_STORAGE_BUCKET).file(process.env.GCLOUD_DATA_PATH);
        return this.#gcloudFile;
    }
    /**
     * @returns {string}
     */ static get localFile() {
        return (0, $432ebeeee125727a$export$a002182e51710d39).LOCAL_DATA_PATH;
    }
    /**
     * @returns {Promise}
     */ static async readFile() {
        if (process.env.NODE_ENV === (0, $432ebeeee125727a$export$a002182e51710d39).ENV_DEV_LOCAL) return await (0, $eqrMV$fsextra).readJson(this.localFile);
        else return new Promise((resolve, reject)=>{
            this.gcloudFile.download().then((data)=>{
                resolve(JSON.parse(data[0].toString("utf8")));
            }).catch((error)=>reject(error));
        });
    }
    /**
     * @returns {Promise}
     */ static async writeFile(data) {
        if (process.env.NODE_ENV === (0, $432ebeeee125727a$export$a002182e51710d39).ENV_DEV_LOCAL) return await (0, $eqrMV$fsextra).writeJson(this.localFile, data);
        else return await this.gcloudFile.save(JSON.stringify(data), {
            contentType: "auto",
            resumable: false
        });
    }
}


class $f0ebd40517c8566a$export$ae14c375fc93363 {
    /**
     * @param {express.Request} req
     * @param {express.Response} res
     */ static async getAllItems(req, res) {
        try {
            const data = await (0, $f53a3e7e4a0f6ba6$export$7e4bb06c8b8658a1).readFile();
            this.#sendData(res, 200, data);
        } catch (error) {
            this.#sendError(res, 505, error);
        }
    }
    /**
     * @param {express.Request} req
     * @param {express.Response} res
     */ static async createItem(req, res) {
        try {
            if (req.body && Object.keys(req.body).length > 0) {
                const data = await (0, $f53a3e7e4a0f6ba6$export$7e4bb06c8b8658a1).readFile();
                const item = req.body;
                item.id = Date.now();
                data.items.push(item);
                await (0, $f53a3e7e4a0f6ba6$export$7e4bb06c8b8658a1).writeFile(data);
                this.#sendData(res, 201, item);
            } else this.#sendError(res, 400, "Could not add item because it has no properties.");
        } catch (error) {
            this.#sendError(res, 505, error);
        }
    }
    /**
     * @param {express.Request} req
     * @param {express.Response} res
     */ static async handleItemByID(req, res) {
        try {
            const id = req.params.id;
            const data = await (0, $f53a3e7e4a0f6ba6$export$7e4bb06c8b8658a1).readFile();
            const index = data.items.findIndex((item)=>item.id == id);
            if (index !== -1) {
                const item = data.items[index];
                switch(req.method){
                    case "GET":
                        this.#sendData(res, 200, item);
                        return;
                    case "DELETE":
                        data.items.splice(index, 1);
                        break;
                    case "PATCH":
                        Object.assign(item, req.body);
                        break;
                }
                await (0, $f53a3e7e4a0f6ba6$export$7e4bb06c8b8658a1).writeFile(data);
                this.#sendStatus(res, 204);
            } else this.#sendError(res, 404, `Item with id: ${id} not found.`);
        } catch (error) {
            this.#sendError(res, 505, error);
        }
    }
    /**
     * @param {express.Response} res
     * @param {number} code
     * @param {object} data
     */ static  #sendData(res, code, data) {
        res.status(code).json(data);
        res.end();
    }
    /**
     * @param {express.Response} res
     * @param {number} code
     * @param {string} msg
     */ static  #sendError(res1, code1, msg) {
        res1.status(code1).json({
            message: msg
        });
        res1.end();
    }
    /**
     * @param {express.Response} res
     * @param {number} code
     */ static  #sendStatus(res2, code2) {
        res2.sendStatus(code2);
        res2.end();
    }
}


class $bbe5ab2be9c7e901$export$6fa31d1144be64b2 {
    /**
     * @returns {express.Router}
     */ static get routes() {
        const router = (0, $eqrMV$express).Router();
        router.get("/", (req, res)=>(0, $f0ebd40517c8566a$export$ae14c375fc93363).getAllItems(req, res));
        router.post("/", (req, res)=>(0, $f0ebd40517c8566a$export$ae14c375fc93363).createItem(req, res));
        router.get("/:id", (req, res)=>(0, $f0ebd40517c8566a$export$ae14c375fc93363).handleItemByID(req, res));
        router.patch("/:id", (req, res)=>(0, $f0ebd40517c8566a$export$ae14c375fc93363).handleItemByID(req, res));
        router.delete("/:id", (req, res)=>(0, $f0ebd40517c8566a$export$ae14c375fc93363).handleItemByID(req, res));
        return router;
    }
}




class $c7e138e80618b9dc$export$d59771a2e9612de9 {
    /** @type {Server} */ static #instance;
    /**
     * @returns {Server} global instance of Server
     */ static get instance() {
        if (this.#instance === undefined) this.#instance = new $c7e138e80618b9dc$export$d59771a2e9612de9();
        return this.#instance;
    }
    /**
     * @constructor
     */ constructor(){}
    /**
     *
     */ run() {
        const app = (0, $eqrMV$express)();
        app.use((0, $eqrMV$express).json());
        app.use((0, $eqrMV$express).static((0, $432ebeeee125727a$export$a002182e51710d39).PUBLIC_PATH));
        app.use("/api", (0, $bbe5ab2be9c7e901$export$6fa31d1144be64b2).routes);
        app.listen((0, $432ebeeee125727a$export$a002182e51710d39).PORT, ()=>console.log("Server is running on port: " + (0, $432ebeeee125727a$export$a002182e51710d39).PORT));
    }
}
$c7e138e80618b9dc$export$d59771a2e9612de9.instance.run();


//# sourceMappingURL=server.js.map
