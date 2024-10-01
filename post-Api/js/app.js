function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => loadPost(data))
}

function loadPost(post){
    console.log(post)
}
loadData()