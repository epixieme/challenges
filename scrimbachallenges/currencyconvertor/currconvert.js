// Instructions:

// 1. Add the functionality to exchange one currency to another
//(you can use a technology of your choice) 🤖
// 2. Style the app 🎨

const $$ = (ele) => document.querySelector(ele);

const rates = { //lookup table
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
    //join original currency and new currency
  let returnRate = $$("#original-currency-unit").value.concat($$("#new-currency-unit").value);
  $$("#exchange-rate").value = rates[returnRate] || "";//access rates lookup table and return rate value or nothing - prevents undefined from being displayed when only one currency code is chosen
  $$(".exchangeRateText").innerHTML = ` Exchange Rate: 1 ${
    $$("#original-currency-unit").value
  } =  ${rates[returnRate] || ""} ${$$("#new-currency-unit").value}`;
};

let displayExchangeRateBanner=convertor();//call function to display Exchangre rate banner text

const calculateAmount = () => {
 $$("#original-currency-amount").value === ""
    ? $$("#output-text").innerHTML = "Please Enter Amount To Convert"//if amount is null then display output message 
    : ($$("#output-text").innerHTML = "", $$("#exchange-rate").value =$$ ("#original-currency-amount").value * Math.floor($$("#exchange-rate").value * 100)/100)//else if amount is not null, output message not displayed and currency amount is converted into new currency

}; 

let outPutMessageText = calculateAmount()// call function to display output message 

$$("#original-currency-unit").addEventListener("change", convertor);
$$("#new-currency-unit").addEventListener("change", convertor);
$$("#original-currency-amount").addEventListener("input", calculateAmount);
$$("#original-currency-unit").addEventListener("change", calculateAmount);
$$("#new-currency-unit").addEventListener("change", calculateAmount);
