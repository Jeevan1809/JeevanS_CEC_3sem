const number=[1,2,3,4,5];
const doubled=number.map((num)=>num*2);
console.log(doubled);

const fruits=["apple","banana","orange"];
const upperfruits=fruits.flatMap((fruit)=>fruit.toUpperCase());
console.log(upperfruits);

const prices=[10,20,30];
const priceTags=prices.map((price)=>"$"+price);
console.log(priceTags);

const users=[
    {name:"Alice",age:25},
    {name:"Bob",age:20},
    {name:"Adithya",age:5},
];
const nameLength=users.map((user)=>`${user.firstname}${user.lastname}`);
console.log(users);


