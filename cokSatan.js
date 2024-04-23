const cokSatanList=[
    {
        bookİmg:'./img/ktp/harry.png',
        bookName:'Harry Potter Kutulu Set -J.K. bowling',
        bookPrice:'1379.32₺'
    },
    {
        bookİmg:'./img/ktp/harryFelsefe.png',
        bookName:'Harry Potter Felsefe Taşı -J.K. Bowling',
        bookPrice:'126.00₺'
    },
    {
        bookİmg:'./img/ktp/harryMelez.png',
        bookName:'Harry Potter Melez Prens -J.K. Bowling',
        bookPrice:'224.00₺'
    },
    {
        bookİmg:'./img/ktp/harrySırlar.png',
        bookName:'Harry Potter Sırlar Odası -J.K. Bowling',
        bookPrice:'112.00₺'
    },
    {
        bookİmg:'./img/ktp/ORV.png',
        bookName:'Omniscient Readers Viewpoint',
        bookPrice:'112.00₺'
    },
    {
        bookİmg:'./img/ktp/TCF.png',
        bookName:'Trash Of The Counts Family',
        bookPrice:'112.00₺'
    },
    {
        bookİmg:'./img/ktp/stefanZweig-2.jpg',
        bookName:'Olağanüstü Bir Gece -Stefan Zweig',
        bookPrice:'112.00₺'
    },
]

const postContainer= document.querySelector('.cokSatan');

const postMethods= ()=>{
    cokSatanList.map((cokSatanList)=>{
        const postElement= document.createElement('div');
        postElement.classList.add('bk-prd');
        postElement.innerHTML=`
        <div class="book-img">
            <img src="${cokSatanList.bookİmg}" alt="">
        </div>
        <h5 class="book-name">${cokSatanList.bookName}</h5>
        <p class="book-price">
            ${cokSatanList.bookPrice}
        </p>
        <button class="btn-buy">
            <i class='bx bx-plus'></i>
            Sepete Ekle
        </button>
        `
        postContainer.appendChild(postElement);
    })
}
postMethods();