var Productarr=
            [{"Productname":"Wedges"   ,"Category":"Footwear"    ,"Price":2000     ,"StockPoints":"0"},
            {"Productname":"Kurti"     ,"Category":"Clothing"    ,"Price":5000     ,"StockPoints":"10"},
            {"Productname":"Ipad"      ,"Category":"Gadgets"     ,"Price":40000    ,"StockPoints":"0"},
            {"Productname":"Fruits"    ,"Category":"Groceries"   ,"Price":300      ,"StockPoints":"20"},
            {"Productname":"Mules"     ,"Category":"Footwear"    ,"Price":8000     ,"StockPoints":"10"},
            {"Productname":"Jeans"     ,"Category":"Clothing"    ,"Price":5000     ,"StockPoints":"0"},
            {"Productname":"Telvision" ,"Category":"Gadgets"     ,"Price":65000    ,"StockPoints":"5"},
            {"Productname":"Vegetables","Category":"Groceries"   ,"Price":500      ,"StockPoints":"0"},
            ];
            // console.log(Product);

exports.getAllProducts = function(){
    return Productarr;
};

exports.getCatProducts= function(){
    let cat=Productarr.filter(item => item.Category=="Footwear");
    return cat;
}

exports.getPriProducts= function(){
    let pri=Productarr.filter(item => (item.Price>=5000 && item.Price<65000));
    return pri;
}

exports.getStoProducts= function(){
    let sto=Productarr.filter(item => item.StockPoints==0);
    return sto;
}

exports.getStoiProducts= function(){
    let sto=Productarr.filter(item => item.StockPoints!=0);
    return sto;
}

