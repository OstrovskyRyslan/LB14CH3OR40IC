const pool = require('./db')

const createPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        const newPost = await pool.query(
            "INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *",
            [title, content, userId]
        );
        res.json(newPost.rows[0]);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Помилка сервера" })
    }
}

const getPostsByUser = async (req, res) => {
    try {
        const posts = await pool.query("SELECT * FROM posts")
        res.json(posts.rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Помилка сервера" })
    }
}

module.exports = { createPost, getPostsByUser }
