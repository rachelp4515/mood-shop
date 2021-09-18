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
}

