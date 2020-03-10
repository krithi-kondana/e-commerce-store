let container = document.querySelector('.container-fluid .d-flex')



function renderProducts(clickedId) {
    container.textContent = '';
    let products = [];

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
let total = document.querySelector('.total p')
let h4 = document.querySelector('.cart h4')
let priceArray = [];
let totalPrice;
let deleteButton;
let cartItems;

function addItemsToCart(item) {
    total.innerHTML = '';
    h4.innerText = 'Your cart';

    cartItems = []

    cartItems.push(item);

    cartItems.forEach(item => {
        let cartli = document.createElement('li');

        let quantity = document.createElement('select')
        quantity.setAttribute("id", "qty");
        // quantity.id = 'qty'
        // let selectId = document.getElementById('qty')
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete';
        let option;
        numbers.forEach(number => {
            option = document.createElement("option");
            quantity.appendChild(option)
            option.value = number;
            option.text = number
        })


        cartli.innerHTML = `<div>${item.name}</div>
        <div> ${item.price}dkk</div>`

        quantity.addEventListener('change', () => {
            if (quantity.value === '1') {
                item.price
            } else {
                item.price = item.price * Number(quantity.value)
            }
            return item.price

        })



        // console.log('carts', cartItems);

        priceArray.push(item.price);

        let priceAsNumber = priceArray.map(Number)

        totalPrice = priceAsNumber.reduce((total, num) => total + num, 0)

        total.innerHTML = `Total price: ${totalPrice}dkk`
        console.log(totalPrice);


        cartUl.appendChild(cartli);
        // cartli.append(deleteButton);
        cartli.append(quantity, deleteButton);

        deleteButton.addEventListener('click', () => {
            cartUl.removeChild(cartli);
            // console.log('remains', cartItems);

            let deletedProductPrice = Number(item.price)

            totalPrice = totalPrice - deletedProductPrice
            total.innerHTML = `Total price: ${totalPrice}dkk`

            // console.log('totalprice', totalPrice);
            // console.log('deletedprice', deletedProductPrice);
        })

    })

}



// let bag = document.querySelector('.bag')
// bag.addEventListener('click', showCart)