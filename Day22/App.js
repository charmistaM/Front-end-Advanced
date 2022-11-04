// import logo from './logo.svg';
// import './App.css';

import Emps from "./Day22/empSU";
import Productd from "./Day22/productd";
import Doctors from "./doctors";
import Students from "./students";
import Demo1 from "./ajax";
import Demo2 from "./ajax2";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// function App() {

//   AppLogic 
//   let  custdetails = [{"cname": "Sravya","cid":123,"Loc":"Florida"},
//   {"cname": "Saba","cid":456,"Loc":"Andaman"},
//   {"cname": "Charm","cid":789,"Loc":"Hyderabad"},
//   {"cname": "Stef","cid":101112,"Loc":"Banglore"},];  

//   let proarr=
//     [{"Productname":"Wedges"   ,"Category":"Footwear"    ,"Price":2000     ,"StockPoints":"0"},
//     {"Productname":"Kurti"     ,"Category":"Clothing"    ,"Price":5000     ,"StockPoints":"10"},
//     {"Productname":"Ipad"      ,"Category":"Gadgets"     ,"Price":40000    ,"StockPoints":"0"},
//     {"Productname":"Fruits"    ,"Category":"Groceries"   ,"Price":300      ,"StockPoints":"20"}
//   ];


//   let result  =  custdetails.map( item =>  
//     {
//       return <div> 
//         <p>Customer Name : {item.cname}</p>
//         <p>Customer ID   : {item.cid}  </p>
//         <p>Location      : {item.Loc}  </p>
//         </div>
//     });

//     let result1  =  proarr.map( item =>  
//       {
//         return <tr>
//           <td>{item.Productname}</td>
//           <td>{item.Category}</td>
//           <td>{item.Price}</td>
//           <td>{item.StockPoints}</td>
//         </tr>
//       });
   


  // return (
  //    <div>
  //         <h3> Developing React Applications - Processing Customer details </h3> 
  //         <hr/>
  //         {result} <br/>
  //         <h3> Developing React Applications - Processing Product Array details </h3> 
  //         <hr/>
  //         <table border="2"  width="500">
  //           <tr>
  //             <th>Product Name</th>
  //             <th>Category</th>
  //             <th>Price</th>
  //             <th>Stock</th>
  //           </tr>

  //           {result1}

  //         </table>   
  //   </div>
  // );

//   return (
//     <div>
//          <h3> Developing React Applications - Processing Product Arrays </h3> 
//          <hr/>
//            {result1}         
//    </div>
//  );


// }

function App(){
  return(
    <div>
      {/* <h1>Developing Web Application Using React</h1>
      <hr/><br/> */}
      {/* <Students/><br/>
      <Students course="React"/><br/>
      <Students course="Angular"/><br/>  */}
      {/* <Doctors/> */}
      <Productd/>
      <Emps/>
      {/* <Demo1/>
      <Demo2/> */}
    </div>
      
  );
}

export default App;
