let sum =0;
 const clockId= setInterval( () =>{
    sum ++;
    console.log(clockId,sum);
    clearInterval(clockId)
},2000)