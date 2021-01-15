// let vowels="a, e, i, o, u"

// let nums=[]
// function distanceToNearestVowel(str) {
// let newArr = Array.from(str)
// newArr.map((vowel,index)=>{
//  if(vowels.includes(vowel)){
// nums.push(0)
//  }

//  newArr.map((item,index2)=>{
// if(!vowels.includes(vowel))

// 	nums.push(Math.abs(index-index2))

//  })

// })
// return nums
// }


function distanceToNearestVowel(str) {
	let vowels = [...str].map((v,i) => /[aeiou]/.test(v) ? i : -1)
	// .filter(v => v >= 0);
	// return [...str].map((_,i) => Math.min(...vowels.map(v => Math.abs(i - v))));
}

// distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

// console.log(distanceToNearestVowel("babbb"))

console.log(distanceToNearestVowel("abcdabcd"))
 // ➞ [0, 1, 2, 1, 0, 1, 2, 3]

// distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]


 // ➞ [1, 0, 1, 2, 3]