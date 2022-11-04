import {useState}  from 'react';
function Productd(){
    let [pname, setPname]  = useState("");
    let [uprice, setUprice]  = useState("");
    let [qty, setQty]  = useState("");
    // let [tamount,setTamount]=useState(uprice*qty);
    let [result,setResult]=useState("");

    function inputPnameChange(event){
        setPname(event.target.value);
    }

    function inputUpriceChange(event){
        setUprice(event.target.value);
    }

    function inputQtyChange(event){
        setQty(event.target.value);
    }

    let productdClick  = function()
    {
        // console.log(tamount);
        // setResult("Total Amount of " + pname + " is " + tamount);
        let val=0;
        val=uprice*qty;
        setResult("Total Amount of " + pname + " is " + val);
    };


    return(
        <>
        <h1>React Component to process Product Details</h1>
        <hr/>
        <fieldset>
                <legend>Product Details</legend>
                Product Name  : 
                <input type="text"  onChange={inputPnameChange}  />
                <br/><br/>
                Unit Price : 
                <input type="number"  onChange={inputUpriceChange}  />
                <br/><br/>
                Quantity :
                <input type="number"  onChange={inputQtyChange}     />
                <br/><br/>
                <input type="text" onChange={e => setResult(e.target.value)} /><br/><br/>
                <input type="button"  value="Get Total Amount"  onClick={productdClick}  />
                <br/><br/>
                <hr/>
                <p>{result}</p>
            </fieldset>
        </>
    )
}
export default Productd;