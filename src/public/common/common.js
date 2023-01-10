$(() => {

    $('#navbar').load('/components/navbar.html', loginIfNeeded)
    $('#footer').load('/components/footer.html')
    $('#content').load('/components/allPosts.html')
})

function loginIfNeeded() {

    let currentUser = window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if (!currentUser) {
        $.post('./api/users', {}, (user) => {
            if (user) {
                console.log('registered current user as ', user.username)
                window.localStorage.user = JSON.stringify(user)
                currentUser = user
                console.log($('#nav-username'))
                $('#nav-username').text(currentUser.username)
            }
        })
    } else {
        console.log('Resuming session as ', currentUser.username)
        console.log($('#nav-username'))
        $('#nav-username').text(currentUser.username)
    }
}

function loadPosts() {
    $.get('./api/posts', (posts) => {
        for (let p of posts) {
            $('#posts-container').append(
                $(`
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${p.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                        <p class="card-text">${p.body}</p>
                        <a href="#" class="card-link">Like</a>
                        <a href="#" class="card-link">Comment</a>
                    </div>
                </div>
                
                
                `)
            )
        }
    })
}