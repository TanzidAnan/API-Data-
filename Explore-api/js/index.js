function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userData2(data))
}

function userData2(users){
    const ul =document.getElementById('users-list')
   for(const user of users){
    console.log(user);
    const li =document.createElement('li');
    li.innerText =user.name;
    ul.appendChild(li)
   }
}