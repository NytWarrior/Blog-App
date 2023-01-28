
$('#btnCreatePost').click(() => {
    const userId = JSON.parse(window.localStorage.user).id
    const title = $('#postTitle').val()
    const body = $('#postBody').val()

    $.post('./api/posts', { userId, title, body }, (data) => {
        $('#content').load('./components/myPosts.html')
        // $('.nav-item .active').removeClass('active')
        // $("[data-component = 'myPosts']").addClass('active')
    })

})


