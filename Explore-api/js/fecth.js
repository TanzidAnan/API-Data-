// fetch('')
//       .then(response =>console.log(response))
//       .then(json => console.log(json))

const url = 'https://jsonplaceholder.typicode.com/todos/1';

function loadData() {
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
}

