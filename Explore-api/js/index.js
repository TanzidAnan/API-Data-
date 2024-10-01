function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userData2(data))
}

function userData2(data){
    data.map(item =>{
        console.log(item.name)
    })
}