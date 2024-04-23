const publisherList=[
    {
        img:'./img/publisher/12-yayınevi-ephesus.webp'
    },
    {
        img:'./img/publisher/6-yayınevi-pegasus.webp'
    },
    {
        img:'./img/publisher/aile-yayinlari.webp'
    },
    {
        img:'./img/publisher/artemis-yayinlari.webp'
    },
    {
        img:'./img/publisher/olimpos-yayinlari.webp'
    },
    {
        img:'./img/publisher/sincap-kitap.webp'
    },
    {
        img:'./img/publisher/destek-yayinlari.webp'
    },
    {
        img:'./img/publisher/diyojen-yayincilik.webp'
    },
    {
        img:'./img/publisher/hayykitap.webp'
    },
    {
        img:'./img/publisher/indigo-kitap.webp'
    },
    {
        img:'./img/publisher/ketebe-yayinlari.webp'
    },
    {
        img:'./img/publisher/kronik-kitap.webp'
    },
]

const postContainer= document.querySelector('.publisher');

const postMethods= ()=>{
    publisherList.map((publisherList)=>{
        const postElement= document.createElement('div');
        postElement.classList.add('publisher-box');
        postElement.innerHTML=`
        <div class="box1">
      <a href="#">
        <img src="${publisherList.img}" alt="Ephesus">
      </a>
    </div>
        `
        postContainer.appendChild(postElement);
    })
}
postMethods();