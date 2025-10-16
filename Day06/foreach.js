const users=[
    { name:"alice",active:false},
    {name:"bob",active:false},
    {name:"Charlie",active:false},
];
users.forEach((user)=>(user.active=true));
console.log(users);


const userDetails=[
    { name:"alice",email:"alice@email.com"},
    {name:"bob",email:"bob@email.com"},
    {name:"Charlie",email:"charlie@email.com"},
];
const notification=[];
userDetails.forEach((user)=>{
    notification.push(`Email sent to ${user.name} at ${user.email}`);
});
console.log(notification)