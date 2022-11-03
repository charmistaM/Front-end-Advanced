function Docdetails(props) {  
    let arr=[];
    for(let i=1;i<=props.docObj.stars;i++){
        arr.push(<i class="bi bi-star-fill" style={{margin:"1px"}}></i>)
    }
        return (
            <div style={{width:"200px",height:"250px",border: "3px solid black",float:"left",textAlign:"center",padding:"25px",marginLeft:"30px",marginTop:"30px",borderRadius:"15px",backgroundColor:"#F0E0D0"}}>
            <img src={props.docObj.avatar} style={{borderRadius:"50%",width:"80px",height:"80px",border:"2px solid black"}}/>
            <p style={{align:"center",fontWeight:"bold"}}>{props.docObj.dname}</p>
            <p>{props.docObj.profile}</p>
            <p>{arr}</p>
            <input type="button" value="BOOK APPOINTMENT" style={{borderRadius:"5px",fontWeight:"bold",padding:"7px"}}/>
        </div>
        );
  }
  
  export default Docdetails;