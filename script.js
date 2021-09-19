import data from './data.js'
const itemsContainer = document.querySelector('#items')


for (let i = 0; i < data.length; i += 1) {
	const newDiv = document.createElement('div');
	newDiv.className = 'item'

	const img = document.createElement('img');
	img.src = data[i].image
	img.width = 300
	img.height = 300

	newDiv.appendChild(img)
	console.log(img) 
	itemsContainer.appendChild(newDiv)

    const description = document.createElement('P')
    description.innerText = data[i].desc
    newDiv.appendChild(description)

    const price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

	const button = document.createElement('button')
	button.id = data[i].name

	button.dataset.price = data[i].price
	button.innerHTML = "Add to Cart"
	newDiv.appendChild(button)
}

const cart = []
function addItem(name, price){
	for (let i = 0; i < cart.length; i += 1){
		if (cart[i].name === name) {
			cart[i].qty += 1
			return
		}
	}
	const item= {
		name:name,
		price:price,
		qty:1,
	}
	cart.push(item)
}

addItem('food', 100000)
addItem('more food', 10000000)

function showItems(){
	console.log(`quantity: ${getQty()}`)
	for (let i = 0; i < cart.length; i += 1){
		console.log(`${cart[i].name} ${cart[i].price} x ${cart[i].qty}`)
	}
}

showItems()
let total = 0
for (let i = 0; i < cart.length; i += 1){
	total += cart[i].price * cart[i].qty
}
function getQty(){
	let qty = 0
	for (let i = 0; i < cart.length; i+= 1){
		qty += cart[i].qty
	}
	return qty
}
console.log(`total price: $${total.toFixed(2)}`)

function removeFunction(name, qty = 0){
	for( let i = 0; i < cart.length; i += 1)
		if(cart[i].name === name){
			if(qty = 0){
				cart[i].qty -= 1
			}
			if(cart[i].qty < 1 || qty === 0 ){
			cart.spice(i, 1)	
			}
			return
		} 
}

