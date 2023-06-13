const Post = require('../models/posts')


exports.post_create_get = async(req, res) => {
    try {
        // const post = await Post.find()
        res.render('posts/add')
    } catch (error) {
        console.log(error.message)
    }


}

exports.post_create_post = (req, res) => {
    console.log(req.body)


    const post = new Post(req.body)
    post.save()
        .then(() => {
            console.log('Your post has been submetted')
            return res.redirect('/explore/index')
        })
        .catch((err) => {
            console.log('an error occurred', err)
        })
}

exports.post_index_get = async(req, res) => {
    try {
        const posts = await Post.find()
        console.log(posts)
        res.render('posts/index', { posts })
    } catch (error) {
        console.log(error.message)
        res.send('HMMMMM Something is not right')
    }


}

exports.post_delete = async(req, res) => {
    console.log(req.query.id)
    try {
        // Try to execute this code
        await Post.findByIdAndDelete(req.query.id)
        return res.redirect('/post/index')
    } catch (error) {
        // Execute this if there is an error
        console.log(error.message)
        res.send(error.message)
    } finally {
        // Execute this code no matter what
        console.log('We are in the finally block')
    }
}
exports.post_detail_get = async(req, res) => {
    try {
        const post = await Post.findById(req.query.id)
        res.render('post/detail', { post })
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}