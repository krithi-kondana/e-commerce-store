let container = document.querySelector('.container-fluid .d-flex')



function renderProducts(clickedId) {
    let products = [];
    container.textContent = '';
    if (clickedId === 'tshirts') {
        products.push(...menTshirtArray)
    } else if (clickedId === 'jeans') {
        products.push(...menJeansArray)
    }
    products.forEach(item => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let details = document.createElement('p')
        let button = document.createElement('button');

        details.innerHTML = `<strong>${item.name}<strong> <br> ${item.size} <br> ${item.price}dkk`
        img.src = item.img;
        button.innerText = 'Add to cart';

        container.appendChild(div)
        div.append(img, details, button)

        button.addEventListener("click", () => {
            addItemsToCart(item)
        })

    })
}

let cartUl = document.querySelector('.cart ul');
let total = document.querySelector('.total')
let h4 = document.querySelector('.cart h4')
let priceArray = [];
let newArray = []

function addItemsToCart(item) {
    total.innerHTML = '';
    // section.innerHTML = `<h4>Your cart</h4>`
    let li = document.createElement('li');
    let p = document.createElement('p')
    h4.innerText = 'Your cart';
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';
    // let input = document.createElement('input')
    // input.type = 'number';
    // input.value = '';
    // input.id = 'quantity';
    // let quantity = input.value;


    li.innerHTML = `<div>${item.name}</div>
    <div> ${item.price}dkk</div>`

    priceArray.push(item.price);

    let priceAsNumber = priceArray.map(Number)

    let totalPrice = priceAsNumber.reduce((total, num) => total + num, 0)

    p.innerHTML = `Total price: ${totalPrice}dkk`
    console.log(totalPrice);


    deleteButton.addEventListener('click', () => {
        cartUl.removeChild(li);

        let deletedProductPrice = Number(item.price)
        newArray.push(deletedProductPrice);
        let lastItem = newArray[newArray.length - 1]



        let result = totalPrice - lastItem
        p.innerHTML = `Total price: ${result}dkk`

        // let finalsum = totalPrice - deletedProductPrice
        console.log('totalprice', totalPrice);
        console.log('deletedprice', deletedProductPrice);

    })
    cartUl.appendChild(li);
    li.append(deleteButton)
    total.appendChild(p)
}

// let bag = document.querySelector('.bag')
// bag.addEventListener('click', showCart)




// function deleteItem(element) {
//         // pricearray.splice(1, 1)
//         // console.log(pricearray);
//         // let filtered = pricearray.filter((value) => value === element.price);
//         // console.log(filtered);
// }