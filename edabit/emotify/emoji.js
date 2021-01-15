function changeEnough(change, amountDue) {
	const [quarter,dime,nickle,penny]=change
	let Moneytotal = [
   quarter * 0.25,
    dime * 0.10,
  nickle * 0.05,
   penny * 0.01
  ]
	console.log(Moneytotal)
	return Moneytotal.reduce((acc,curr)=>acc + curr > amountDue)
}



function changeEnough(change, amountDue) {
	const [quarter,dime,nickle,penny]=change
	let Moneytotal = (
   quarter * 0.25+
   dime * 0.10 +
   nickle * 0.05 +
   penny * 0.01 
  ).toFixed(2)
	console.log(Moneytotal)
	// return Moneytotal > amountDue
}


function changeEnough(change, amountDue) {
	var coins = [.25, .10, .05, .01 ]
	return change.map((x, i) => x*coins[i]).reduce((a,b) => a+b) >= amountDue
}

function changeEnough(change, amountDue) {
  const changeHashMap = [0.25, 0.10, 0.05, 0.01];
  return change
    .map((item, i) => item * changeHashMap[i])
    .reduce((acc, val) => acc + val) >= amountDue;	
}
console.log(changeEnough([30, 40, 20, 5], 12.55))
// let emoji= {
// "smile":":D",
// "grin":":)",
// "sad": ":(",
// "mad":":P",
	
// }



// const emotify=(str)=>{
// let change = str.split(' ')
// return `Make me ${emoji[change.pop()]}`

// }




// function emotify(str) {
//     let obj ={"smile"	:":D",
//         "grin"	:":)",
//         "sad"	:":(",
//         "mad"	:":P"
//     }
//     str =str.split(' ')
//     str=obj[str.pop()] //or str[2]
//     return str.join(' ')
// }
// console.log(emotify("Make me mad"), "Make me :P")


// function emotify(str) {
// 	let [first, mid, last] = str.split(" ");
	
// 	let emotify = {
// 		"smile": ":D",
// 		"grin": ":)",
// 		"sad": ":(",
// 		"mad": ":P"
// 	}
	
// 	return `Make me ${emotify[last]}`;
// }

// // https://edabit.com/challenge/Szh3ib2bpJCYXKrKa