function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => loadPost(data))
}

function loadPost(posts) {
    const divs = document.getElementById('div-name')
    for (const post of posts) {
        console.log(post)

        const div = document.createElement('div');
        div.classList.add('posts')
        div.innerHTML = `
        <div class="post">
        <h5 class="title">user-${post.title}</h5>
        <p>Post-${post.body}</p>
        <div/>
        `
        divs.appendChild(div)
    }
}
loadData()

function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
}