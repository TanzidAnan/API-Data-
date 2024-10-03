function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.error(err))
}

async function loadUserAsycn(){
    const res =await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data)
}   

const loadUserArrow = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data)
}

const loadUserCatch =async () =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data =await res.json();
        console.log(data)
    }
    catch(err){

    }
}