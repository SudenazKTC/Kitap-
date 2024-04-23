const bookData=[
    {
        bookİmg:'./img/ktp/franzKafka-1.png',
        bookName:'Dönüşüm -Franz Kafka',
        bookPriceSpan:'32₺',
        bookPrice:'15₺'
    },
    {
        bookİmg:'./img/ktp/franzKafka-2.jpg',
        bookName:'Dava -Franz Kafka',
        bookPriceSpan:'32.15₺',
        bookPrice:'18.22₺'
    },
    {
        bookİmg:'./img/ktp/sefiller.png',
        bookName:'Sefiller -Victor Hugo',
        bookPriceSpan:'449.99₺',
        bookPrice:'345.99₺'
    },
    {
        bookİmg:'./img/ktp/ORV.png',
        bookName:'Omniscient Readers Viewpoint',
        bookPriceSpan:'249.99₺',
        bookPrice:'155.99₺'
    },
    {
        bookİmg:'./img/ktp/stefanZweig-1.jpg',
        bookName:'Bilinmeyen Bir Kadının Mektubu -Stefan Zweig',
        bookPriceSpan:'29.99₺',
        bookPrice:'16.50₺'
    },
    {
        bookİmg:'./img/ktp/stefanZweig-2.jpg',
        bookName:'Olağanüstü Bir Gece -Stefan Zweig',
        bookPriceSpan:'36.99₺',
        bookPrice:'17.79₺'
    },
    {
        bookİmg:'./img/ktp/stefanZweig-3.png',
        bookName:'Ay Işığı Sokağı -Stefan Zweig',
        bookPriceSpan:'79₺',
        bookPrice:'47.99₺'
    },
    {
        bookİmg:'./img/ktp/stefanZweig-4.png',
        bookName:'Satranç -Stefan Zweig',
        bookPriceSpan:'33₺',
        bookPrice:'18.29₺'
    },
    {
        bookİmg:'./img/ktp/stefanZweig-5.jpg',
        bookName:'Mecburiyet -Stefan Zweig',
        bookPriceSpan:'79₺',
        bookPrice:'50.49₺'
    },
    {
        bookİmg:'./img/ktp/TCF.png',
        bookName:'Trash Of The Counts Family',
        bookPriceSpan:'549.99₺',
        bookPrice:'349.49₺'
    },
    {
        bookİmg:'./img/ktp/trueBeatuy.png',
        bookName:'True Beauty Novel',
        bookPriceSpan:'379₺',
        bookPrice:'249.49₺'
    },
    {
        bookİmg:'./img/ktp/WMMAP.png',
        bookName:'Who Made Me a Princess',
        bookPriceSpan:'419.88₺',
        bookPrice:'258.49₺'
    }
]

const postContainer= document.querySelector('.book-product');

const postMethods= ()=>{
    bookData.map((bookData)=>{
        const postElement= document.createElement('div');
        postElement.classList.add('bk-prd');
        postElement.innerHTML=`
        <div class="book-img">
            <img src="${bookData.bookİmg}" alt="">
        </div>
        <h5 class="book-name">${bookData.bookName}</h5>
        <p class="book-price">
            <span>${bookData.bookPriceSpan}</span> ${bookData.bookPrice}
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