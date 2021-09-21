import data from './data.js'
const itemsContainer = document.querySelector('#items')
const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')

itemList.onclick = function(e){

	if (e.target && e.target.classList.contains('remove')){
		const eltName = e.target.dataset.name
		removeItem(eltName)
	} else if (e.target && e.target.classList.contains('add-one')){
		const eltName = e.target.dataset.name
		addItem(eltName)
		showItems()
	} else if (e.target && e.target.classList.contains('sub-one')){
		const eltName = e.target.dataset.name
		removeItem(eltName, 1 )
	}
}


//putting in the divs with the images and descriptions 
for (let i = 0; i < data.length; i += 1) {
	const newDiv = document.createElement('div');
	newDiv.className = 'item'

	const img = document.createElement('img');
	img.src = data[i].image
	img.width = 300
	img.height = 300

	newDiv.appendChild(img)
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

const all_items_button = Array.from(document.querySelectorAll("button"))

all_items_button.forEach(elt => elt.addEventListener('click', () => {
	addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
	showItems()
}))

//----------creating the cart and items------------------
const cart = []
function addItem(name, price){
	for (let i = 0; i < cart.length; i += 1){
		if (cart[i].name === name) {
			cart[i].qty += 1
			return
		}
	}
	const item = { name, price, qty:1 }
	cart.push(item)
	showItems()
}


//------show items --------------------
function showItems(){
	total()
	let itemStr = ''
	for (let i = 0; i < cart.length; i += 1){
		const {name, price, qty} = cart[i]
		itemStr += `<li> ${name} $${price} x ${qty} = ${qty * price} 
		<button class='remove' data-name='${name}'>Remove</button>
		<button class='add-one' data-name='${name}'> + </button>
		<button class='sub-one' data-name='${name}'> - </button>
		</li>`   
	}
	itemList.innerHTML = itemStr
    cartQty.innerHTML = `quantity: ${getQty()}`

}
showItems()




//---------------total cost in cart---------
function total(){
	let total = 0
	for (let i = 0; i < cart.length; i += 1){
	total += cart[i].price * cart[i].qty
	cartTotal.innerHTML = `total price: $${total.toFixed(2)}`
	}
}
total()

// -------------quantyity ---------------
function getQty(){
	let qty = 0
	for (let i = 0; i < cart.length; i+= 1){
		qty += cart[i].qty
	}
	return qty
}


//------------------removing item(s) from cart ----------
function removeItem(name, qty = 0){
	for( let i = 0; i < cart.length; i += 1){
		if(cart[i].name === name){
			if(qty > 0){
				cart[i].qty -= qty
			}
			if(cart[i].qty < 1 || qty === 0 ){
			cart.splice(i, 1)	
			}
			showItems()
			return
		}
	}
}
