// let navbardrop = document.getElementById('shirts')
// navbardrop.addEventListener('click', showselected)

let item = document.querySelector('.container-fluid .d-flex')
let tshirtArray = [{
        img: 'images/tshirt1.jpeg',
        name: 'Black t-shirt',
        size: 'M size',
        price: '100'
    },
    {
        img: 'images/tshirt2.jpeg',
        name: 'Grey t-shirt',
        size: 'S size',
        price: '200'
    }
]

function showselected() {
    item.textContent = '';
    tshirtArray.forEach(element => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let details = document.createElement('p')
        let button = document.createElement('button');

        details.innerHTML = `<strong>${element.name}<strong> <br> ${element.size} <br> ${element.price}dkk`
        img.src = element.img;
        button.innerText = 'Add to cart';

        item.appendChild(div)
        div.append(img, details, button)

        button.addEventListener("click", () => {
            addItemsToCart(element)
        })

    })
}

let cartUl = document.querySelector('.cart ul');
let total = document.querySelector('.total')
let pricearray = [];
let newArray = []


function addItemsToCart(element) {

    total.innerHTML = '';

    let li = document.createElement('li');
    let p = document.createElement('p')
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';



    li.innerHTML = `<div>${element.name}</div>
    <div> ${element.price}dkk</div>`


    pricearray.push(element.price);
    let number = pricearray.map(Number)

    let totalSum = number.reduce((total, num) => total + num, 0)
    p.innerHTML = `Total price: ${totalSum}dkk`
        // let newnumber;
        // let finalsum = totalSum - newnumber
    deleteButton.addEventListener('click', () => {
        cartUl.removeChild(li)
        let deletedPrice = Number(element.price)
        let finalsum = totalSum - deletedPrice

        p.innerHTML = `Total price: ${finalsum}dkk`

    })

    cartUl.appendChild(li);
    li.appendChild(deleteButton)
    total.appendChild(p)
}


// function deleteItem(element) {
//         // pricearray.splice(1, 1)
//         // console.log(pricearray);
//         // let filtered = pricearray.filter((value) => value === element.price);
//         // console.log(filtered);
// }