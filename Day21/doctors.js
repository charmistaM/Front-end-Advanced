import Docdetails from "./docdetails";

function Doclist(){
    let docArray=
    [   {dname: "Sravya",  profile:"Neurologist",    stars:5, avatar:"https://th.bing.com/th/id/OIP.78jjsr6hk0VDwwSLtbqAMAHaE8?pid=ImgDet&rs=1",},
        {dname: "Saba",    profile:"Cardiolist",     stars:4, avatar:"https://pngimg.com/uploads/doctor/doctor_PNG16037.png",  },
        {dname: "Charm",   profile:"Dermatalogist",  stars:3, avatar:"https://th.bing.com/th/id/R.573bc2065c5269fadcb58367a1b0ac5e?rik=5QtQw9ALStXihg&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f210000%2fvelka%2fdoctor-1490804667Vnr.jpg&ehk=6%2bCc1fjKY41%2fghc%2b2t1RP%2bX24hWtPtnPuU0YpuFrntQ%3d&risl=&pid=ImgRaw&r=0",   },
        {dname: "Stef",    profile:"ENT Specialist", stars:2, avatar:"https://pngimg.com/uploads/doctor/doctor_PNG16019.png",   },
        {dname: "Sravya",  profile:"Pediatrician",   stars:1, avatar:"https://media.istockphoto.com/photos/arab-saudi-doctor-man-posing-happy-picture-id465462879?k=6&m=465462879&s=170667a&w=0&h=mpZkqPQI_gxrvExoMx92thfJOCkAvifOb56cOcML4dM=",},
        {dname: "Saba",    profile:"Gynacologist",   stars:4, avatar:"https://th.bing.com/th/id/OIP.5qA8LJUCQ-eDwsUdVQHMmgHaJM?pid=ImgDet&w=768&h=953&rs=1",  },
        {dname: "Charm",   profile:"Dentist",        stars:2, avatar:"https://th.bing.com/th/id/OIP.OkpXpzBGwJG3ocsU79jIrwHaHI?pid=ImgDet&rs=1",   } 
    ];

    let result =  docArray.map(item =>  
        {
            return <Docdetails docObj={item}/>
        }); 
      
      
        return (
           <div style={{backgroundColor:"LightBlue"}}> 
                   {result}
          </div>
        );
      }
      
      export default Doclist;
