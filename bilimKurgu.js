const bilimKurguList=[
    {
        bookİmg:'./img/ktp/franzKafka-1.png',
        bookName:' Dönüşüm Ciltli -Franz Kafka',
        bookPrice:'18.72₺'
    },
    {
        bookİmg:'./img/ktp/harryFelsefe.png',
        bookName:'Harry Potter Felsefe Taşı -J.K. Bowling',
        bookPrice:'126.00₺'
    },
    {
        bookİmg:'./img/ktp/stefanZweig-1.jpg',
        bookName:'Bilinmeyen Bir Kadının Mektubu -Stefan Zweig',
        bookPrice:'16.35₺'
    },
    {
        bookİmg:'./img/ktp/harrySırlar.png',
        bookName:'Harry Potter Sırlar Odası -J.K. Bowling',
        bookPrice:'112.00₺'
    },
    {
        bookİmg:'./img/ktp/sefiller.png',
        bookName:'Sefiller Set (İki Kitap) -Victor Hugo',
        bookPrice:'155.75₺'
    },
    {
        bookImg:'./img/ktp/stefanZweig-2.jpg',
        bookName:'Olağanüstü Bir gece -Stefan Zweig',
        bookPrice:'17.70₺'
    },
    {
        bookImg:'./img/ktp/franzKafka-2.jpg',
        bookName:'Dava (Ciltli Kitap) -Franz Kafka',
        bookPrice:'33.12₺'
    },
    {
        bookİmg:'./img/ktp/harryMelez.png',
        bookName:'Harry Potter Melez Prens -J.K. Bowling',
        bookPrice:'224.00₺'
    },
    {
        bookImg:'./img/ktp/stefanZweig-3.png',
        bookName:'Ay Işığı Sokağı (Ciltli) -Stefan Zweig',
        bookPrice:'47.60₺'
    },
    {
        bookImg:'./img/ktp/stefanZweig-4.png',
        bookName:'Satranç (Ciltli) -Stefan Zweig',
        bookPrice:'18.20₺'
    },
    {
        bookİmg:'./img/ktp/harry.png',
        bookName:'Harry Potter Kutulu Set -J.K. bowling',
        bookPrice:'1379.32₺'
    },
]

const postContainer= document.querySelector('.bilimKurgu');

const postMethods= ()=>{
    bilimKurguList.map((bilimKurguList)=>{
        const postElement= document.createElement('div');
        postElement.classList.add('bk-prd');
        postElement.innerHTML=`
        <div class="book-img">
            <img src="${bilimKurguList.bookİmg}" alt="">
        </div>
        <h5 class="book-name">${bilimKurguList.bookName}</h5>
        <p class="book-price">
            ${bilimKurguList.bookPrice}
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