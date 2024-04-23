const yazarList=[
    {
        href:'./kitaplar.html',
        a:'Pam Jenof'
    },
    {
        href:'./kitaplar.html',
        a:'Bahtiyar Akyılmaz'
    },
    {
        href:'./kitaplar.html',
        a:'Murat Sezginer'
    },
    {
        href:'./kitaplar.html',
        a:'Halide Edip Adıvar'
    },
    {
        href:'./kitaplar.html',
        a:'Ömer Seyfettin'
    },
    {
        href:'./kitaplar.html',
        a:'Peyami Safa'
    },
    {
        href:'./kitaplar.html',
        a:'Reşat Nuri Gültekin'
    },
    {
        href:'./kitaplar.html',
        a:'Ahmet Hamdi Tampınar'
    },
    {
        href:'./kitaplar.html',
        a:'Sait Faik Abasıyanık'
    },
    {
        href:'./kitaplar.html',
        a:'Sabahattin Ali'
    },
    {
        href:'./kitaplar.html',
        a:'Kemal Tahir'
    },
    {
        href:'./kitaplar.html',
        a:'Beyza Alkoç'
    },
    {
        href:'./kitaplar.html',
        a:'Beyza Aksoy'
    },
    {
        href:'./kitaplar.html',
        a:'Stefan Zweig'
    },
    {
        href:'./kitaplar.html',
        a:'Franz Kafka'
    },
    {
        href:'./kitaplar.html',
        a:'Victor Hugo'
    },
    {
        href:'./kitaplar.html',
        a:'Lev Nikolayeviç Tolstoy'
    },
    {
        href:'./kitaplar.html',
        a:'Cemal Süreya'
    },
    {
        href:'./kitaplar.html',
        a:'Ray Bradbury'
    },
    {
        href:'./kitaplar.html',
        a:'Amin Maalouf'
    },
    {
        href:'./kitaplar.html',
        a:'Gabriel Garcia Marquez'
    },
    {
        href:'./kitaplar.html',
        a:'Orhan Pamuk'
    },
    {
        href:'./kitaplar.html',
        a:'Ayşe Kulin'
    },
    {
        href:'./kitaplar.html',
        a:'William Shakespeare'
    },
    {
        href:'./kitaplar.html',
        a:'J.k. Rowling'
    },
    {
        href:'./kitaplar.html',
        a:'Albert Camus'
    },
    {
        href:'./kitaplar.html',
        a:'Elif Şafak'
    },
    {
        href:'./kitaplar.html',
        a:'Tomris Uyar'
    }
]

const postContainer=document.querySelector('.yazarList');

const postMethods= ()=>{
    yazarList.map((yazarList)=>{
        const postElement=document.createElement('div');
        postElement.classList.add('yayin');
        postElement.innerHTML=`
        <div class="yayinImg">
            <img src="./img/bos.png" alt="">
        </div>
        <a href="${yazarList.href}">${yazarList.a}</a>
        `
        postContainer.appendChild(postElement);
    })
}
postMethods();