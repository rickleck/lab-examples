import $eqrMV$mongoose, {model as $eqrMV$model, Schema as $eqrMV$Schema} from "mongoose";
import $eqrMV$express from "express";
import $eqrMV$cors from "cors";
import $eqrMV$path from "path";







const $581dc04568a2d49c$export$2dea7024bcdd7731 = (0, $eqrMV$model)("Task", (0, $eqrMV$Schema)({
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
 */ const $b65fdfcccb58b7d4$export$d1f442602a91e7cc = async (req, res)=>{
    try {
        const tasks = await (0, $581dc04568a2d49c$export$2dea7024bcdd7731).find({});
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
 */ const $b65fdfcccb58b7d4$export$79bdce95949f2d95 = async (req, res)=>{
    try {
        const task = await (0, $581dc04568a2d49c$export$2dea7024bcdd7731).findById(req.params.id);
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
 */ const $b65fdfcccb58b7d4$export$f7292ab7796be73c = async (req, res)=>{
    const { title: title  } = req.body;
    if (!title) return res.status(400).json({
        message: "Failed to create new task. The task has no title."
    });
    try {
        const task = await new (0, $581dc04568a2d49c$export$2dea7024bcdd7731)({
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
 */ const $b65fdfcccb58b7d4$export$e100a47c1d31c700 = async (req, res)=>{
    try {
        const { title: title , done: done  } = req.body;
        const task = await (0, $581dc04568a2d49c$export$2dea7024bcdd7731).findByIdAndUpdate(req.params.id, {
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
 */ const $b65fdfcccb58b7d4$export$2af39d5ff2615f8b = async (req, res)=>{
    try {
        const task = await (0, $581dc04568a2d49c$export$2dea7024bcdd7731).findByIdAndDelete(req.params.id);
        res.status(200).json(task);
    } catch (err) {
        return res.status(500).json({
            message: "Could not delete task."
        });
    }
};


const $ecd7ce071060aa49$export$de3b759ab07e4403 = (0, $eqrMV$express).Router();
/**
 * GET: /api/tasks
 */ $ecd7ce071060aa49$export$de3b759ab07e4403.get("/", $b65fdfcccb58b7d4$export$d1f442602a91e7cc);
/**
 * GET: /api/tasks/:id
 */ $ecd7ce071060aa49$export$de3b759ab07e4403.get("/:id", $b65fdfcccb58b7d4$export$79bdce95949f2d95);
/**
 * POST: /api/tasks
 */ $ecd7ce071060aa49$export$de3b759ab07e4403.post("/", $b65fdfcccb58b7d4$export$f7292ab7796be73c);
/**
 * PATCH: /api/tasks/:id
 */ $ecd7ce071060aa49$export$de3b759ab07e4403.patch("/:id", $b65fdfcccb58b7d4$export$e100a47c1d31c700);
/**
 * DELETE: /api/tasks/:id
 */ $ecd7ce071060aa49$export$de3b759ab07e4403.delete("/:id", $b65fdfcccb58b7d4$export$2af39d5ff2615f8b);


const $04e9aa4939efe80d$export$729c8b7179294ba = (0, $eqrMV$express)();
$04e9aa4939efe80d$export$729c8b7179294ba.use((0, $eqrMV$express).static((0, $eqrMV$path).resolve("dist", "public")));
$04e9aa4939efe80d$export$729c8b7179294ba.use((0, $eqrMV$cors)());
$04e9aa4939efe80d$export$729c8b7179294ba.use((0, $eqrMV$express).json());
$04e9aa4939efe80d$export$729c8b7179294ba.use("/api/tasks", (0, $ecd7ce071060aa49$export$de3b759ab07e4403));


const $c7e138e80618b9dc$var$PORT = process.env.PORT || 7777;
const $c7e138e80618b9dc$var$mongoURI = process.env.MONGO_URI;
(0, $04e9aa4939efe80d$export$729c8b7179294ba).listen($c7e138e80618b9dc$var$PORT, ()=>console.log("Server is running on port: " + $c7e138e80618b9dc$var$PORT));
(0, $eqrMV$mongoose).connect($c7e138e80618b9dc$var$mongoURI, (err)=>{
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("Connected to DB");
});


//# sourceMappingURL=server.js.map
