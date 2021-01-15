function sevenBoom(arr) {
	
	let didgets= arr.join('')

	console.log(didgets)
	if (didgets.includes(7)){
		
		return "Boom!"
	}
	return "there is no 7 in the array"
}

console.log(sevenBoom([35, 4, 9, 37]))