const Post = require("../schemes/Post")



function firstFunc() {


    return console.log('i`m in service')

}

async function getAllPosts() {
    let data = Post.find({})
    return data
}


async function createPost(data) {
    let result = new Post(data);
    return result.save()
}

module.exports = {
    firstFunc,
    createPost,
    getAllPosts
}