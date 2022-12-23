const { Posts, Users } = require('../db/models')

async function createNewPost(userId, title, body) {
    const post = await Posts.create({
        title,
        body,
        userId
    })

    return post
}


async function showAllPosts(query) {
    const posts = await Posts.findAll({
        include: [Users]
    })
    return posts
}

module.exports = {
    createNewPost,
    showAllPosts
}

// Test case

async function task() {
    // console.log(
    //     await createNewPost(
    //         1,
    //         'This is a sample post',
    //         'Body of the post'
    //     )
    // ),
    //     console.log(
    //         await createNewPost(
    //             2,
    //             'Another sample post',
    //             'Body of another post'
    //         )
    //     )
    const posts = await showAllPosts()
    for (let p of posts) {
        console.log(`${p.title}\nAuthor: ${p.user.username}\n${p.body}\n\n`)
    }
}
task()