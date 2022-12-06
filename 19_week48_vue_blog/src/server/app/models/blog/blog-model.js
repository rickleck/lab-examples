import { BlogEntry } from './blog-entry-schema.js';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - GET: /api/blog
 * - Returns a list of all blog entries.
 */
const getAllEntries = async (req, res) => {
    try {
        const entries = await BlogEntry.find({}).sort({ published: -1, updatedAt: -1 });
        res.status(200).json(entries);
    } catch (error) {
        return res.status(500).json({
            message: 'Could not get blog entries.',
        });
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - GET: /api/blog/:id
 * - Returns a blog entry by id.
 */
const getEntryById = async (req, res) => {
    try {
        const entry = await BlogEntry.findById(req.params.id);
        if (!entry) {
            return res.status(404).json({
                message: 'Blog entry not found.',
            });
        }
        res.status(200).json(entry);
    } catch (err) {
        return res.status(500).json({
            message: 'Could not get blog entry.',
        });
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @description
 * - POST: /api/blog
 * - Creates a new blog entry.
 */
const createEntry = async (req, res) => {
    const props = Object.assign({}, req.body);

    if (!props.title || !props.published || !props.body || !props.author) {
        return res.status(400).json({
            message:
                'Failed to create a new blog entry. An entry requires a title, published date and body text.',
        });
    }

    try {
        const entry = await new BlogEntry(props).save();
        res.status(201).json(entry);
    } catch (err) {
        return res.status(500).json({
            message: 'Failed to create new blog entry.',
        });
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - PATCH: /api/blog/:id
 * - Updates a blog entry by id.
 */
const updateEntryById = async (req, res) => {
    try {
        const props = Object.assign({}, req.body);
        const entry = await BlogEntry.findByIdAndUpdate(req.params.id, props, { new: true });
        res.status(200).json(entry);
    } catch (err) {
        return res.status(500).json({
            message: 'Could not update blog entry.',
        });
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @escription
 * - DELETE: /api/blog/:id
 * - Deletes a blog entry by id.
 */
const deleteEntryById = async (req, res) => {
    try {
        const entry = await BlogEntry.findByIdAndDelete(req.params.id);
        res.status(200).json(entry);
    } catch (err) {
        return res.status(500).json({
            message: 'Could not delete entry.',
        });
    }
};

export { getAllEntries, getEntryById, createEntry, updateEntryById, deleteEntryById };
