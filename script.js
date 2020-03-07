// let navbardrop = document.getElementById('shirts')
// navbardrop.addEventListener('click', showselected)

let item = document.querySelector('.container-fluid .d-flex')
let imageArray = [{
        img: 'images/tshirt1.jpeg',
        name: 'Black t-shirt',
        size: 'M size',
        price: '100dkk'
    },
    {
        img: 'images/tshirt2.jpeg',
        name: 'Grey t-shirt',
        size: 'S size',
        price: '100dkk'
    }
]

function showselected() {
    item.textContent = '';
    imageArray.forEach(element => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let details = document.createElement('p')
        let button = document.createElement('button');

        details.innerHTML = `<strong>${element.name}<strong> <br> ${element.size} <br> ${element.price}`
        img.src = element.img;
        button.innerText = 'Add to cart';

        item.appendChild(div)
        div.append(img, details, button)

        button.addEventListener("click", () => {
            addItemsToCart(element)
        })

    })
}

function addItemsToCart(element) {
    let cartUl = document.querySelector('.cart ul');
    let li = document.createElement('li');
    cartUl.appendChild(li);

    li.innerHTML = `${element.name} ${element.price}`
}