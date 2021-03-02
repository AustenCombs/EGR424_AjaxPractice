// var display = document.getElementById("display");
// var btn = document.getElementById("view_button");
//var numPhoto = document.getElementById("num").value;

// btn.addEventListener("click", function() {
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/photos/'+numPhoto);
//     ourRequest.onload = function() {
//         var ourData = JSON.parse(ourRequest.responseText);
//         console.log(ourData);
        
//     };
//     ourRequest.send();
// });

$("#post_button").click( () => {
    fetchPosts();
});

$("#comment_button").click( () => {
    fetchComments();
});

$("#album_button").click( () => {
    fetchAlbums();
});

$("#photo_button").click( () => {
    fetchPhotos();
});

$("#todo_button").click( () => {
    fetchTodos();
});

$("#user_button").click( () => {
    fetchUsers();
});

function fetchPosts() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
            if (!response.ok) {
                throw error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data.map(post => {
                return `
                <div class="post">
                    <p>Title: ${post.title}</p>
                    <p>Body: ${post.url}</p>
                </div>
                `
            })
            .join('');
            console.log(html);
            document
                .querySelector("#display")
                .insertAdjacentHTML('afterbegin', html);
        }).catch(error => {
            console.log(error);
        })
}

function fetchComments() {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(response => {
            if (!response.ok) {
                throw error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data.map(comment => {
                return `
                <div class="comment">
                    <p>Name: ${comment.name}</P>
                    <p>Body: ${comment.body}</p>
                </div>
                `
            })
            .join('');
            console.log(html);
            document
                .querySelector("#display")
                .insertAdjacentHTML('afterbegin', html);
        }).catch(error => {
            console.log(error);
        })
}

function fetchAlbums() {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
        .then(response => {
            if (!response.ok) {
                throw error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data.map(album => {
                return `
                <div class="album">
                    <p>Title: ${album.title}</p>
                </div>
                `
            })
            .join('');
            console.log(html);
            document
                .querySelector("#display")
                .insertAdjacentHTML('afterbegin', html);
        }).catch(error => {
            console.log(error);
        })
}

function fetchPhotos() {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(response => {
            if (!response.ok) {
                throw error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data.map(photo => {
                return `
                <div class="photo">
                    <p>Title: ${photo.title}</p>
                    <p><img src="${photo.url}" width="300" alt="photo"/>
                </div>
                `
            })
            .join('');
            console.log(html);
            document
                .querySelector("#display")
                .insertAdjacentHTML('afterbegin', html);
        }).catch(error => {
            console.log(error);
        })
}

function fetchTodos() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => {
            if (!response.ok) {
                throw error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data.map(todo => {
                return `
                <div class="todo">
                    <p>Title: ${todo.title}</p>
                    <p>Completed: ${todo.completed}</p>
                </div>
                `
            })
            .join('');
            console.log(html);
            document
                .querySelector("#display")
                .insertAdjacentHTML('afterbegin', html);
        }).catch(error => {
            console.log(error);
        })
}

function fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            if (!response.ok) {
                throw error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data.map(user => {
                return `
                <div class="user">
                    <p>Name: ${user.name}</p>
                    <p>Email: ${user.email}</p>
                </div>
                `
            })
            .join('');
            console.log(html);
            document
                .querySelector("#display")
                .insertAdjacentHTML('afterbegin', html);
        }).catch(error => {
            console.log(error);
        })
}


 