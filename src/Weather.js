import { Link } from "react-router-dom";


    fetch('https://api.openweathermap.org/data/2.5/weather?q=sunnyvale&appid=8e2b2d612e69745ec47c663e4cf5c0e9&units=metric')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
function Weather()
return (
    <div className="Weather">
           <h2>How is today's weather?</h2> 
    </div>
)

  
 export default Weather;