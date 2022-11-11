import $dkj8n$mongoose, {model as $dkj8n$model, Schema as $dkj8n$Schema} from "mongoose";
import $dkj8n$express from "express";
import $dkj8n$cors from "cors";
import $dkj8n$path from "path";







const $719a1853434bf114$export$2dea7024bcdd7731 = (0, $dkj8n$model)("Task", (0, $dkj8n$Schema)({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
}));


/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - GET: /api/tasks
 * - Returns a list of all tasks.
 */ const $97005bb9e231a86b$export$d1f442602a91e7cc = async (req, res)=>{
    try {
        const tasks = await (0, $719a1853434bf114$export$2dea7024bcdd7731).find({});
        res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({
            message: "Could not get tasks."
        });
    }
};
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - GET: /api/tasks/:id
 * - Returns a task by id.
 */ const $97005bb9e231a86b$export$79bdce95949f2d95 = async (req, res)=>{
    try {
        const task = await (0, $719a1853434bf114$export$2dea7024bcdd7731).findById(req.params.id);
        if (!task) return res.status(404).json({
            message: "Task not found."
        });
        res.status(200).json(task);
    } catch (err) {
        return res.status(500).json({
            message: "Could not get task."
        });
    }
};
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @description
 * - POST: /api/tasks
 * - Creates a new task.
 */ const $97005bb9e231a86b$export$f7292ab7796be73c = async (req, res)=>{
    const { title: title  } = req.body;
    if (!title) return res.status(400).json({
        message: "Failed to create new task. The task has no title."
    });
    try {
        const task = await new (0, $719a1853434bf114$export$2dea7024bcdd7731)({
            title: title
        }).save();
        res.status(201).json(task);
    } catch (err) {
        return res.status(500).json({
            message: "Failed to create new task."
        });
    }
};
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - PATCH: /api/tasks/:id
 * - Updates a task by id.
 */ const $97005bb9e231a86b$export$e100a47c1d31c700 = async (req, res)=>{
    try {
        const { title: title , done: done  } = req.body;
        const task = await (0, $719a1853434bf114$export$2dea7024bcdd7731).findByIdAndUpdate(req.params.id, {
            title: title,
            done: done
        }, {
            new: true
        });
        res.status(200).json(task);
    } catch (err) {
        return res.status(500).json({
            message: "Could not update task."
        });
    }
};
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - DELETE: /api/tasks/:id
 * - Deletes a task by id.
 */ const $97005bb9e231a86b$export$2af39d5ff2615f8b = async (req, res)=>{
    try {
        const task = await (0, $719a1853434bf114$export$2dea7024bcdd7731).findByIdAndDelete(req.params.id);
        res.status(200).json(task);
    } catch (err) {
        return res.status(500).json({
            message: "Could not delete task."
        });
    }
};


const $7b4b2037eaa7e7a7$export$de3b759ab07e4403 = (0, $dkj8n$express).Router();
/**
 * GET: /api/tasks
 */ $7b4b2037eaa7e7a7$export$de3b759ab07e4403.get("/", $97005bb9e231a86b$export$d1f442602a91e7cc);
/**
 * GET: /api/tasks/:id
 */ $7b4b2037eaa7e7a7$export$de3b759ab07e4403.get("/:id", $97005bb9e231a86b$export$79bdce95949f2d95);
/**
 * POST: /api/tasks
 */ $7b4b2037eaa7e7a7$export$de3b759ab07e4403.post("/", $97005bb9e231a86b$export$f7292ab7796be73c);
/**
 * PATCH: /api/tasks/:id
 */ $7b4b2037eaa7e7a7$export$de3b759ab07e4403.patch("/:id", $97005bb9e231a86b$export$e100a47c1d31c700);
/**
 * DELETE: /api/tasks/:id
 */ $7b4b2037eaa7e7a7$export$de3b759ab07e4403.delete("/:id", $97005bb9e231a86b$export$2af39d5ff2615f8b);


const $19f786cca57536ea$export$729c8b7179294ba = (0, $dkj8n$express)();
$19f786cca57536ea$export$729c8b7179294ba.use((0, $dkj8n$express).static((0, $dkj8n$path).resolve("dist", "public")));
$19f786cca57536ea$export$729c8b7179294ba.use((0, $dkj8n$cors)());
$19f786cca57536ea$export$729c8b7179294ba.use((0, $dkj8n$express).json());
$19f786cca57536ea$export$729c8b7179294ba.use("/api/tasks", (0, $7b4b2037eaa7e7a7$export$de3b759ab07e4403));


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


