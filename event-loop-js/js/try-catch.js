function checkAge(){
    console.log(545);
    const ageFild =document.getElementById('age');
    const ageText =ageFild.value;
    const errorTag =document.getElementById('error')
    // console.log(age)
    try{
        const age =parseInt(ageText);
        if(isNaN(age)){
            console.log("age Not found ",age, ageText)
        }
    }
    catch(err){
        console.log('ERROR:', err);
        errorTag.innerHTML ="someThing wrong"
    }
    finally{
        console.log('All done')
    }
    console.log(54545)
}