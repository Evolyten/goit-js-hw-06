const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listEl = document.querySelector('.gallery')
listEl.style.display = 'flex'
listEl.style.width = "800px"
listEl.style.listStyle="none"
listEl.style.margin = "0"
listEl.style.padding="0"


const markup = images.map((img) => `<li class ="gallery-img"><img alt='${img.alt}' src='${img.url}'></li>`).join("")
listEl.insertAdjacentHTML('beforeend', markup)

const listItemEl = document.querySelectorAll('.gallery-img')
listItemEl.forEach(n => { const img = n.querySelector('img'); img.style.width = '100%'; img.style.height="180px" })