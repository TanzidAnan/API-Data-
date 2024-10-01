const user = { id: 1, name: 'Tanzid', job: 'web' };
const stringified =JSON.stringify(user)
// console.log(user)
// console.log(stringified)

const shop ={
    owner: "Tanzi",
    Address:{
        street:'kockuhet voot er goli',
        city: 'Dhaka',
        country:'bd'
    },
    products:['laptop', 'mac', 'moniter','keybord'],
    revenue: 45000,
    isOpen:true,
    isNew:false

}
console.log(shop);
const shopJson =JSON.stringify(shop);
console.log(shopJson)