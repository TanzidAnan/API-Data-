function checkAge() {
    console.log(545);
    const ageFild = document.getElementById('age');
    const ageText = ageFild.value;
    const errorTag = document.getElementById('error')
    // console.log(age)
    try {
        const age = parseInt(ageText);
        if (isNaN(age)) {
            throw "Pleace Enter a Number"
        }
        else if (age < 18) {
            throw " Not allow"
        }
        else if(age> 30){
            throw "A deak assain nah"
        }
        errorTag.innerHTML =" ";
    }
    catch (err) {
        console.log('ERROR:', err);
        errorTag.innerHTML = "ERROR :" + err
    }
    finally {
        console.log('All done')
    }
    console.log(54545)
}