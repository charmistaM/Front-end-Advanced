var promodule = require("./productmodule");
let arr =  promodule.getAllProducts();
let carr= promodule.getCatProducts();
let parr=promodule.getPriProducts();
let sarr=promodule.getStoProducts();
let siarr=promodule.getStoiProducts();
console.log("All Products:")
 for(let item  of  arr)
 {
	 	 str  =  `Product Name :  ${item.Productname}, Category  :  ${item.Category}, Price :  ${item.Price}, Stock : ${item.StockPoints}`;
		 console.log(str);
 }

 
console.log("\nProducts of Category:");
 for(let item of carr){
    str=`Product Name : ${item.Productname},     Category : ${item.Category},    Price : ${item.Price},  Stock : ${item.StockPoints}`;
    console.log(str);
 }

 console.log("\nProducts of Price Range above 5000 below 60000");
 for(let item of parr){
    str=`Product Name : ${item.Productname},     Category : ${item.Category},    Price : ${item.Price},  Stock : ${item.StockPoints}`;
    console.log(str);
 }

 console.log("\nProducts that are out of stock");
 for(let item of sarr){
    str=`Product Name : ${item.Productname},     Category : ${item.Category},    Price : ${item.Price},  Stock : ${item.StockPoints}`;
    console.log(str);
 }

 console.log("\nProducts that are in stock");
 for(let item of siarr){
    str=`Product Name : ${item.Productname},     Category : ${item.Category},    Price : ${item.Price},  Stock : ${item.StockPoints}`;
    console.log(str);
 }
