const mangaList=[
    {
        bookİmg:'./img/ktp/kuroko-no-basket.png',
        bookName:'Kuroko No Basket Cilt 1',
        bookPrice:'120₺'
    },
    {
        bookİmg:'./img/ktp/kuroko-no-basket-2.png',
        bookName:'Kuroko No Baket Cilt 2',
        bookPrice:'120₺'
    },
    {
        bookİmg:'./img/ktp/deathNote-1.png',
        bookName:'Death Note Cilt 1',
        bookPrice:'110₺'
    },
    {
        bookİmg:'./img/ktp/deathNote-2.png',
        bookName:'Death Note Cilt 2',
        bookPrice:'110₺'
    },
    {
        bookİmg:'./img/ktp/haikyuu1.png',
        bookName:'Haikyuu Cilt 1',
        bookPrice:'350₺'
    },
    {
        bookİmg:'./img/ktp/haikyuu2.png',
        bookName:'Haikyuu Cilt 2',
        bookPrice:'350₺'
    }
]

const postContainer= document.querySelector('.manga');

const postMethods= ()=>{
    mangaList.map((mangaList)=>{
        const postElement= document.createElement('div');
        postElement.classList.add('bk-prd');
        postElement.innerHTML=`
        <div class="book-img">
            <img src="${mangaList.bookİmg}" alt="">
        </div>
        <h5 class="book-name">${mangaList.bookName}</h5>
        <p class="book-price">
            ${mangaList.bookPrice}
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