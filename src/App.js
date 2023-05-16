import React,{useState} from "react";


const App = () => {

  let [cords, setCords] = useState({ latitude: "", longitude: "" });
  let [hemisphere, setHermisphere] = useState("");
  let [month, setMonth] = useState(new Date().getMonth())
  

  let monthArr = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]

  
  function findLocation(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          setCords({ latitude: position.coords.latitude, longitude: position.coords.longitude })
          findHemisphere(position.coords.latitude);
        })
      }
  }

  function findHemisphere(latittude) {

    if (latittude > 0) {
      setHermisphere("Northern Hemisphere");
    } else if (latittude < 0) {
      setHermisphere("Southern Hemisphere");
    } else if (latittude == 0) {
      setHermisphere("Equator")
    }
    
  }
  
  return (
    <div>
      <h1>Latitude: {cords.latitude }</h1>
      <h1>Longitutde: {cords.longitude}</h1>
      <button onClick={findLocation}>Find Location</button>
      <h1>{hemisphere}</h1>
      <h1>{ monthArr[month]}</h1>
    </div>
  )
}


export default App