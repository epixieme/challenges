const getHashTags=(str) =>{
let strSplit=str.replace(/,/g,"").split(' ').sort((a,b)=>b.length-a.length).splice(0,3)

// let lessThan=strSplit.filter((item,index)=>item===strsplit)

// return arrays.map((item,index)=>arrays.map(item=>item.length===item[index+1].length))

console.log(strSplit)
// return str.split(' ').map((item,index)=>item.length===strSplit.length)
}

console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"))


// getHashTags("How the Avocado Became the Fruit of the Global Trade")
// ➞ ["#avocado", "#became", "#global"]

// getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
// ➞ ["#christmas", "#probably", "#will"]

// getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
// ➞ ["#surprise", "#parents", "#fruit"]

// getHashTags("Visualizing Science")
// ➞ ["#visualizing", "#science"]