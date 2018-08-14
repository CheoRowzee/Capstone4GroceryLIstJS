var groceries = ["Milk", "Butter", "Juice", "Carrots", "Steak"];
var prices = ["1.99", "3.99", "4.99", "3.50", "10.99" ]

var itemPrice = groceries.concat(prices);


var testItem = [];
var testPrice =[];
function getTotal(itemName, price){
	
testItem.push(itemName);
testPrice.push(price);

var total = document.getElementById("total");
var sumTotal = 0;
for (var i =0; i < testItem.length; i++) {
	sumTotal+= testPrice[i];

	}

function getItem(itemName, price) {

	testItem.push(itemName);
	testPrice.push(price)

}	


	total.innerHTML +=  "<p>" + " " +  testItem + " "  + sumTotal + "</p>"
}


console.log(testItem); 