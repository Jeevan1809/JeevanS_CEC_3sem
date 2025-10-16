const words=["cat","elephant","dog","buuterfly"];
const longwords =words.filter((word)=>word.length>4);
console.log(longwords);

const people=[
    {name:"jeevan"},
    {name:"adi"},
    {name:"dhanu"},
];
const adults=people.filter((people)=>people.age<=18);
console.log(adults);