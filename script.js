const prev= document.getElementById('prev');
const next= document.getElementById('next');

const slider=document.querySelector('.slider');

const product= document.querySelector('.product');

next.addEventListener('click', ()=> {
    slider.scrollLeft += product.offsetWidth +30;
})

prev.addEventListener('click', ()=>{
    slider.scrollLeft -= product.offsetWidth +30;
})

const prev2= document.getElementById('prev2');
const next2=document.getElementById('next2');

const slider2 =document.querySelector('.slider2')

const product2=document.querySelector('.product2');

next2.addEventListener('click', ()=>{
    slider2.scrollLeft += product2.offsetWidth +30;
})

prev2.addEventListener('click', ()=>{
    slider2.scrollLeft -= product2.offsetWidth +30;
})

const prev3= document.getElementById('prev3');
const next3= document.getElementById('next3');

const slider3= document.querySelector('.slider3');

const product3= document.querySelector('.product3');

next3.addEventListener('click', ()=>{
    slider3.scrollLeft+= product3.offsetWidth +30;
    console.log(slider3.scrollLeft);
})

prev3.addEventListener('click', ()=>{
    slider3.scrollLeft -= product3.offsetWidth +30;
})