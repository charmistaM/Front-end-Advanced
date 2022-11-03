function Students(){
    let stArray= 
    [   {"sname": "Sravya",  "sid":123,   "age":40, "course":"Angular",  "total":10},
        {"sname": "Saba",    "sid":456,   "age":30, "course":"React",    "total":20},
        {"sname": "Charm",   "sid":789,   "age":20, "course":"Node",     "total":30},
        {"sname": "Stef",    "sid":10,    "age":10, "course":"JSON",     "total":40},
        {"sname": "Sravya",  "sid":123,   "age":40, "course":"Angular",  "total":10},
        {"sname": "Saba",    "sid":456,   "age":30, "course":"React",    "total":20},
        {"sname": "Charm",   "sid":789,   "age":20, "course":"Node",     "total":30} 
    ];
    let result  =  stArray.map( (item ,index) =>  
        {
          return <tr key="index"
          style={ {backgroundColor : (index%2==0)?"LightBlue":"LightPink"}}>
                   <td> {item.sname}  </td>  
                   <td> {item.sid}  </td>  
                   <td> {item.age}  </td>  
                   <td> {item.course}  </td>
                   <td> {item.total}  </td>  
              </tr>
        });
       
    
    
      return (
         <div> 
              <table border="2"  width="500">
                <tr>
                  <th>Student Name</th>
                  <th>Student ID</th>
                  <th>Age</th>
                  <th>Course</th>
                  <th>Total</th>
                </tr>
    
                {result}
    
              </table>
    
    
        </div>
      );
    }
    
    export default Students;
