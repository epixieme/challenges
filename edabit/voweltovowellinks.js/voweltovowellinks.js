// const vowelLinks=(str)=>/(?<=\s)[aeiouAEIOU]/g && /[aeiouAEIOU]+(?=\s)/g.test(str)

// const vowelLinks=(str)=>str.matchAll(/[aeiouAEIOU]+(?=\s)/g) && str.matchAll(/(?<=\s)[aeiouAEIOU]/g)
	

// const vowelLinks=(str)=>{

// 	let lookbehind =(/[aeiouAEIOU]+(?=\s).(?<=\s)[aeiouAEIOU]/).test(str)
// [aeiouAEIOU]+(?=\s).[aeiouAEIOU]
// 	// let lookahead= str.match(/[aeiouAEIOU]+(?=\s)/)

// 	console.log("this is behind " + lookbehind)
// 	// console.log("this is ahead " +lookahead)

// }
const vowelLinks=(str)=>/[aeiouAEIOU]+(?=\s).(?<=\s)[aeiouAEIOU]/.test(str)
const vowelLinks=(str)=>/[aeiouAEIOU]+(?=\s) (?<=\s)[aeiouAEIOU]/.test(str)

// function vowelLinks(str) {
// 	return /[eyuoa] [eyuoa]/.test(str);
// }
// const vowelLinks = txt => txt.search(/[aeiou] [aeiou]/i) !== -1;


console.log(vowelLinks("the large appliances"))
// Test.assertEquals(vowelLinks("the large appliances"), true)

// const vowelLinks=(str)=>/[aeiou]\b/g.test(str)

// [aeiouAEIOU]+(?=\s)
// /(?<=\$)\d+/