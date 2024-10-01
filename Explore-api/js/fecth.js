fetch('https://jsonplaceholder.org/users')
      .then(response => response.json())
      .then(json => console.log(json))