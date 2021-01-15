function converter(a, b) {
let mapped=[["fahrenheit",a[1]+459.67*5/9],["kelvin,0"]]

 return b === "kelvin" && a[0] ==="fahrenheit"
 ?a[1]+459.67*5/9
 :b==="kelvin"&& a[0] ==="celcious"
 ?a[1]+273.15
 :b==="celcious"&& a[0] ==="kelvin"
 ?a[1]-273.15
 :b==="celcious"&& a[0] ==="fahrenheit"?
a[1]-32*5/9
 :b==="fahrenheit"&& a[0] ==="kelvin"?
a[1]-273.15*9/5+32
 :b==="fahrenheit"&& a[0] ==="celcious"?
 a[1]*9/5+32
 :b


}

console.log(converter(["celcious", 20] , "kelvin"))