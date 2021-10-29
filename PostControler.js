const Post = require('./Post.js')

class PostControler {
    async create(req, res) {
        try {
            const { author, title, content, picture } = req.body
            const post = await Post.create({ author, title, content, picture })
            res.send(post)
        } catch (error) {
            res.status(500).json(error)

        }
    }
    async getAll(req, res) {
        try {
            const posts = await Post.find()
            return res.json(posts)
        } catch (error) {
            res.status(500).json(error)
            console.log(error)

        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params

            const post = await Post.findById(id)
            !id ? res.status(400).json({ message: 'id not a finde' }) : res.json(post)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    }
    async ubdate(req, res) {
        try {

            const post = req.body

            if (!post._id) {
                res.status(400).json({ message: 'id not a finde' })
            }
            const ubdPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
            return res.status(500).json(ubdPost)

        } catch (error) {
            console.error(error)
            res.status(500).json(error)

        }
    } async delete(req, res) {
        try {
            const { id } = req.params

            if (!id) {
                res.status(400).json({ message: 'id not a finde' })
            }
            const post = await Post.findByIdAndDelete(id)
            return res.status(500).json(post)
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
module.exports = new PostControler()