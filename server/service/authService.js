const Post = require("../schemes/Post")



async function getAllPosts() {
    let data = Post.find({})
    return data
}


async function createPost(data) {
    let result = new Post(data);
    return result.save()
}

module.exports = {
    createPost,
    getAllPosts
}