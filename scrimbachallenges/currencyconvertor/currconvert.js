
// Instructions: // 1. Add the functionality to exchange one currency to another//(you can use a technology of your choice) 🤖// 2. Style the app 🎨 const $$ = (ele) => document.querySelector(ele); const rates = {  GBPGBP: 1.0,  EUROEURO: 1.0,  NZDNZD: 1.0,  GBPEURO: 1.1215,  GBPUSD: 1.3644,  GBPNZD: 1.8988,  NZDGBP: 0.53,  NZDUSD: 0.72,  NZDEURO: 0.59,  EUROGBP: 0.89,  EURONZD: 1.68,  EUROUSD: 1.21, };  const convertor = () => {  let returnRate = $$("#original-currency-unit").value.concat($$("#new-currency-unit").value);   $$("#exchange-rate").value = rates[returnRate] || "";    $$(".exchangeRateText").innerHTML = ` Exchange Rate: 1 ${    $$("#original-currency-unit").value  } =  ${rates[returnRate] || ""} ${$$("#new-currency-unit").value}`;
// Instructions:

// 1. Add the functionality to exchange one currency to another
//(you can use a technology of your choice) 🤖
// 2. Style the app 🎨

const $$ = (ele) => document.querySelector(ele);

const rates = {
  GBPGBP: 1.0,
  EUROEURO: 1.0,
  NZDNZD: 1.0,
  GBPEURO: 1.1215,
  GBPUSD: 1.3644,
  GBPNZD: 1.8988,
  NZDGBP: 0.53,
  NZDUSD: 0.72,
  NZDEURO: 0.59,
  EUROGBP: 0.89,
  EURONZD: 1.68,
  EUROUSD: 1.21, 
};


const convertor = () => {
  let returnRate = $$("#original-currency-unit").value.concat($$("#new-currency-unit").value);

  $$("#exchange-rate").value = rates[returnRate] || "";
  
  $$(".exchangeRateText").innerHTML = ` Exchange Rate: 1 ${
    $$("#original-currency-unit").value
  } =  ${rates[returnRate] || ""} ${$$("#new-currency-unit").value}`;
};
convertor();

const calculateAmount = () => {
  convertor();
//if orig is empty
 $$("#original-currency-amount").value === ""
    ? $$("#output-text").innerHTML = "Please Enter Amount To Convert"
    : ($$("#output-text").innerHTML = "", $$("#exchange-rate").value =$$("#original-currency-amount").value * Math.floor($$("#exchange-rate").value * 100)/100);
}; 

calculateAmount();

$$("#original-currency-unit").addEventListener("change", convertor);
$$("#new-currency-unit").addEventListener("change", convertor);
$$("#original-currency-amount").addEventListener("input", calculateAmount);
$$("#original-currency-unit").addEventListener("change", calculateAmount);
$$("#new-currency-unit").addEventListener("change", calculateAmount);
