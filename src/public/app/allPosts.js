

function loadPosts() {
    $.get('./api/posts', (posts) => {
        for (let p of posts) {
            $('#posts-container').append(
                $(`
                <div class="col-4" >
                    <div class="card m-2">
                        <div class="card-body">
                            <h5 class="card-title">${p.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                            <p class="card-text">
                                ${p.body.substr(0, 200)}...
                                <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Read More</a>
                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">${p.title}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    ${p.body}
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </p>
                            <a href="#" class="card-link">Like</a>
                            <a href="#" class="card-link">Comment</a>
                        </div>
                    </div>
                </div>
                    
                
                
                `)
            )
        }
    })
}