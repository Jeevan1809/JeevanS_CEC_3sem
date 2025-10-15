const likeButton = document.querySelector('.btn-like');
const unlikeButton=document.querySelector('.btn-unlike');

const likeCount=document.querySelector('.like-count');

let likes=0;
likeButton.addEventListener('click',()=>{
    console.log('Like button clicked');

    likes++;
    likeCount.innerHTML= `${likes} Likes`;
});
unlikeButton.addEventListener('click',()=>{
    console.log('unlike button clicked');

    if(likes>0){
        likes--;
        likeCount.innerHTML=`${likes} unlike`;
    }
});