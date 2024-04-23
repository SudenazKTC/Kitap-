const yayinEviData=[
    {
        href:'./kitaplar.html',
        a:'İş Bankası Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Martı Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Yapı Kredi Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'İndigo Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Ephesus Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Epilson Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Can Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'İthaki Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Pegasus Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Ren Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Kronik Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Dokuz Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Artemis Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Destek Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Can Çocuk Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Genç Timaş Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Alfa Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Gerekli Şeyler Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Yabancı Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Yakamoz Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Olimpos Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Gün Işığı Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Everest Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Beyaz Balina Yayınları'
    },
    {
        href:'./kitaplar.html',
        a:'Timaş Çocuk Yayınları'
    }
]

const postContainer=document.querySelector('.yayinEvi');

const postMethods= ()=>{
    yayinEviData.map((yayinEviData)=>{
        const postElement=document.createElement('div');
        postElement.classList.add('yayin');
        postElement.innerHTML=`
        <div class="yayinImg">
            <img src="./img/bos.png" alt="">
        </div>
        <a href="${yayinEviData.href}">${yayinEviData.a}</a>
        `
        postContainer.appendChild(postElement);
    })
}
postMethods();