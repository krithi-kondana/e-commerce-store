let products = document.querySelector('.container-fluid .d-flex')


function renderProducts() {
    products.textContent = '';
    menTshirtArray.forEach(tshirt => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let details = document.createElement('p')
        let button = document.createElement('button');

        details.innerHTML = `<strong>${tshirt.name}<strong> <br> ${tshirt.size} <br> ${tshirt.price}dkk`
        img.src = tshirt.img;
        button.innerText = 'Add to cart';

        products.appendChild(div)
        div.append(img, details, button)

        button.addEventListener("click", () => {
            addItemsToCart(tshirt)
        })

    })
}

let cartUl = document.querySelector('.cart ul');
let total = document.querySelector('.total')
let priceArray = [];
let newArray = []

function addItemsToCart(tshirt) {

    total.innerHTML = '';

    let li = document.createElement('li');
    let p = document.createElement('p')
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';

    li.innerHTML = `<div>${tshirt.name}</div>
    <div> ${tshirt.price}dkk</div>`

    priceArray.push(tshirt.price);

    let priceAsNumber = priceArray.map(Number)

    let totalPrice = priceAsNumber.reduce((total, num) => total + num, 0)

    p.innerHTML = `Total price: ${totalPrice}dkk`
    console.log(totalPrice);


    deleteButton.addEventListener('click', () => {
        cartUl.removeChild(li);

        let deletedProductPrice = Number(tshirt.price)
        newArray.push(deletedProductPrice);
        let lastItem = newArray[newArray.length - 1]



        let result = totalPrice - lastItem
        p.innerHTML = `Total price: ${result}dkk`

        // let finalsum = totalPrice - deletedProductPrice
        console.log('totalprice', totalPrice);
        console.log('deletedprice', deletedProductPrice);

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