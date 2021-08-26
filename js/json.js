console.log("api");

//  API = Application object Notation

// JSON = JAVA SCRIPT OBJECT NOTATION


const user = {
    name: 'mizan',
    age: 14,
    job: 'actor'
};
const stringified = JSON.stringify(user);


// console.log(user);
// console.log(stringified);

const shop = {
    name: 'store hosue',
    address:'gazipur',
    product:['laptop', 'mobile', 'peopi'],
    isexprensive: false
};

const shopstring = JSON.stringify(shop);
const covarted = JSON.parse(shopstring);

// console.log(shop);
console.log(shopstring.name);
console.log(covarted.name);























