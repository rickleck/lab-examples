import $dkj8n$mongoose, {model as $dkj8n$model, Schema as $dkj8n$Schema} from "mongoose";
import $dkj8n$express from "express";
import $dkj8n$connecthistoryapifallback from "connect-history-api-fallback";
import $dkj8n$cors from "cors";
import $dkj8n$path from "path";








const $c105c124ee7dff4e$export$83846975c2acdd31 = (0, $dkj8n$model)("BlogEntry", (0, $dkj8n$Schema)({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    published: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    img_src: {
        type: String,
        required: false
    }
}, {
    timestamps: true
}));


/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - GET: /api/blog
 * - Returns a list of all blog entries.
 */ const $b987e8777c9bda4c$export$d49579e37cd98e9 = async (req, res)=>{
    try {
        const entries = await (0, $c105c124ee7dff4e$export$83846975c2acdd31).find({}).sort({
            published: -1,
            updatedAt: -1
        });
        res.status(200).json(entries);
    } catch (error) {
        return res.status(500).json({
            message: "Could not get blog entries."
        });
    }
};
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - GET: /api/blog/:id
 * - Returns a blog entry by id.
 */ const $b987e8777c9bda4c$export$1782208daac78faf = async (req, res)=>{
    try {
        const entry = await (0, $c105c124ee7dff4e$export$83846975c2acdd31).findById(req.params.id);
        if (!entry) return res.status(404).json({
            message: "Blog entry not found."
        });
        res.status(200).json(entry);
    } catch (err) {
        return res.status(500).json({
            message: "Could not get blog entry."
        });
    }
};
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @description
 * - POST: /api/blog
 * - Creates a new blog entry.
 */ const $b987e8777c9bda4c$export$344b9c9ab5e66c9a = async (req, res)=>{
    const props = Object.assign({}, req.body);
    if (!props.title || !props.published || !props.body || !props.author) return res.status(400).json({
        message: "Failed to create a new blog entry. An entry requires a title, published date and body text."
    });
    try {
        const entry = await new (0, $c105c124ee7dff4e$export$83846975c2acdd31)(props).save();
        res.status(201).json(entry);
    } catch (err) {
        return res.status(500).json({
            message: "Failed to create new blog entry."
        });
    }
};
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - PATCH: /api/blog/:id
 * - Updates a blog entry by id.
 */ const $b987e8777c9bda4c$export$5bc79b1258c9eef2 = async (req, res)=>{
    try {
        const props = Object.assign({}, req.body);
        const entry = await (0, $c105c124ee7dff4e$export$83846975c2acdd31).findByIdAndUpdate(req.params.id, props, {
            new: true
        });
        res.status(200).json(entry);
    } catch (err) {
        return res.status(500).json({
            message: "Could not update blog entry."
        });
    }
};
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - DELETE: /api/blog/:id
 * - Deletes a blog entry by id.
 */ const $b987e8777c9bda4c$export$1a75ebe38a4bf700 = async (req, res)=>{
    try {
        const entry = await (0, $c105c124ee7dff4e$export$83846975c2acdd31).findByIdAndDelete(req.params.id);
        res.status(200).json(entry);
    } catch (err) {
        return res.status(500).json({
            message: "Could not delete entry."
        });
    }
};


const $49a21a7ae9a87615$export$de3b759ab07e4403 = (0, $dkj8n$express).Router();
/**
 * GET: /api/tasks
 */ $49a21a7ae9a87615$export$de3b759ab07e4403.get("/", $b987e8777c9bda4c$export$d49579e37cd98e9);
/**
 * GET: /api/tasks/:id
 */ $49a21a7ae9a87615$export$de3b759ab07e4403.get("/:id", $b987e8777c9bda4c$export$1782208daac78faf);
/**
 * POST: /api/tasks
 */ $49a21a7ae9a87615$export$de3b759ab07e4403.post("/", $b987e8777c9bda4c$export$344b9c9ab5e66c9a);
/**
 * PATCH: /api/tasks/:id
 */ $49a21a7ae9a87615$export$de3b759ab07e4403.patch("/:id", $b987e8777c9bda4c$export$5bc79b1258c9eef2);
/**
 * DELETE: /api/tasks/:id
 */ $49a21a7ae9a87615$export$de3b759ab07e4403.delete("/:id", $b987e8777c9bda4c$export$1a75ebe38a4bf700);


const $19f786cca57536ea$export$729c8b7179294ba = (0, $dkj8n$express)();
$19f786cca57536ea$export$729c8b7179294ba.use((0, $dkj8n$cors)());
$19f786cca57536ea$export$729c8b7179294ba.use((0, $dkj8n$express).json());
$19f786cca57536ea$export$729c8b7179294ba.use(process.env.API_BASE_URL, (0, $49a21a7ae9a87615$export$de3b759ab07e4403));
$19f786cca57536ea$export$729c8b7179294ba.use((0, $dkj8n$connecthistoryapifallback)());
$19f786cca57536ea$export$729c8b7179294ba.use((0, $dkj8n$express).static((0, $dkj8n$path).resolve("dist", "public")));


const $c14076c5914ce2fd$var$PORT = process.env.PORT || 7777;
const $c14076c5914ce2fd$var$mongoURI = process.env.MONGO_URI;
(0, $19f786cca57536ea$export$729c8b7179294ba).listen($c14076c5914ce2fd$var$PORT, ()=>console.log("Server is running on port: " + $c14076c5914ce2fd$var$PORT));
(0, $dkj8n$mongoose).connect($c14076c5914ce2fd$var$mongoURI, (err)=>{
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("Connected to DB");
});


