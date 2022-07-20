const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

function imgB(){
    myImages[currentImg].classList.add('show');
    myImgSide[currentImg].classList.add('active');
};
function imgNoB(){
    myImages[currentImg].classList.remove('show');
    myImgSide[currentImg].classList.remove('active');
};
function scrollLeft(){
    imgNoB();
    if(currentImg == 0){
        currentImg = images.length -1;
    } else{
        imgB();
    }
};
function scrollRight(){
    imgNoB();
    if(currentImg == images.length -1){
        currentImg = 0;
    } else {
        currentImg++;
    }
    imgB();
};

let currentImg = 0;
let imgWrapperDom = document.querySelector('.imgContainer');
let itemsDom = document.querySelector('.items');

for (x=0; x<images.length; x++){
    itemsDom.innerHTML += `<div class="item">
    <img class="sideImg" src="${images[x].url}" alt="picture">
    <div class="description">
        <h2>${images[x].title}</h2>
        <p>${images[x].description}</p>
    </div>
    </div>`;
    imgWrapperDom.innerHTML += `<div class="imgWrapper">
    <img class="sideImg" src="${images[x].url}">
    </div>`;
}

const myImages = document.querySelectorAll('.item');
myImages[currentImg].classList.add('.show');
const myImgSide = document.querySelectorAll('.imgWrapper .sideImg');
console.log(myImgSide, currentImg);
myImgSide[currentImg].classList.add('.active');
console.log(myImgSide, currentImg);
const prevDom = document.querySelector('.prev');
const nextDom = document.querySelector('.next');

setInterval(scrollRight, 4000);
myImgSide.forEach(function(element, y){
    element.addEventListener('click',
        function(){
            imgNoB();
            currentImg = y;
            console.log(myImages, y);
            myImages[y].classList.add('show');
            myImgSide[y].classList.add('active');
        }
    );
});

prevDom.addEventListener('click',
    function(){
        scrollLeft();
    }
);
nextDom.addEventListener('click',
    function(){
        scrollRight();
    }
);