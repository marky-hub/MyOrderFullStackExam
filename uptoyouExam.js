var testCase_1 = [{ product: "gold", price: 20000 }, { product: "copper", price: 10000 }, { product: "silver", price: 15000 },
{ product: "gold", price: 22000 }, { product: "silver", price: 17000 }, { product: "emerald", price: 9999 },
]

var testCase_2 = [{ product: "gold", price: 20000 }, { product: "copper", price: 10000 }, { product: "silver", price: 15000 },
{ product: "gold", price: 22000 }, { product: "silver", price: 17000 }, { product: "emerald", price: 9999 }, { product: "gold", price: 24500 }, { product: "silver", price: 14000 }, { product: "emerald", price: 7777 },
{ product: "ruby", price: 8500 }, { product: "ruby", price: 7900 }, { product: "emerald", price: 8888 }, { product: "gold", price: 23000 }, { product: "silver", price: 17000 }, { product: "emerald", price: 6666 },
{ product: "sapphire", price: 10000 }, { product: "silver", price: 17999 }, { product: "ruby", price: 9000 },
{ product: "jade", price: 3000 }, { product: "jade", price: 3500 }, { product: "sapphire", price: 9500 },
]

var testCase_3 = [{ product: "gold", price: 20000 }, { product: "copper", price: 10000 }, { product: "silver", price: 15000 },
{ product: "gold", price: 22000 }, { product: "silver", price: 17000 }, { product: "emerald", price: 9999 }, { product: "gold", price: 24500 }, { product: "silver", price: 14000 }, { product: "emerald", price: 7777 },
{ product: "ruby", price: 8500 }, { product: "ruby", price: 7900 }, { product: "emerald", price: 8888 }, { product: "gold", price: 23000 }, { product: "silver", price: 17000 }, { product: "emerald", price: 6666 },
{ product: "sapphire", price: 10000 }, { product: "silver", price: 17999 }, { product: "ruby", price: 9000 },
{ product: "jade", price: 3000 }, { product: "jade", price: 3500 }, { product: "sapphire", price: 9500 }, { product: "emerald", price: 9999 }, { product: "gold", price: 24500 }, { product: "silver", price: 14000 }, { product: "emerald", price: 7777 },
{ product: "ruby", price: 8500 }, { product: "ruby", price: 7900 }, { product: "emerald", price: 8888 }, { product: "gold", price: 23000 }, { product: "silver", price: 17000 }, { product: "emerald", price: 6666 },
{ product: "sapphire", price: 10000 }, { product: "silver", price: 17999 }, { product: "ruby", price: 9000 },]


var result_testCase = [];

//change test case here
var jewelryMarket = testCase_2


jewelryMarket.forEach(function(item) {
    if(result_testCase.filter(r => r.product === item.product).length > 0){
        var existProduct = result_testCase.filter(r => r.product === item.product)[0];
        existProduct.amount += 1;
        existProduct.price += item.price;
    }else{
        result_testCase.push({product:item.product,amount:1,price:item.price})
    }
});



var result = result_testCase;

for(var i = 0 ;i < result.length ;i++){
    console.log("product:" + result[i].product + "|amount:" + result[i].amount + "|price:"+result[i].price);
}

