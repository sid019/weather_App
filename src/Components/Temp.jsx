import React, { useEffect, useState } from 'react';
import './css/style.css';

const Temp = () => {

    const[city,setCity] = useState(null);
    const[search,setSearch] = useState("delhi")
    const inputEvent = (event) =>{
            setSearch(event.target.value);
    }

    useEffect( () => {
        const fetchApi = async () => {
            const url = (`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4cbc9c9646499430d1d6be5c7bec421d`)
            const response = await fetch(url);
            const resjson = await response.json();
            console.log(resjson);
            setCity(resjson.main);
            // console.log(response);
        };
        fetchApi();
    },[search]);


    return(
        <>
            <h1>Weather App</h1>
            <div className='box' >
                <div className='inputData'>
                    
                    <input type="search" className='inputField' placeholder='Enter the location' onChange = {inputEvent}/>
                </div>

                {!city ? (
                    <p> No Data Found </p>
                ) : (
                    <>

                <div className='info'>
                    <h2 className='location'>
                    <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className='temp'>{city.temp}°Cel</h1>
                    <h3 className='tempmin_max'>Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
                </div>

                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>

                </>
                )}

            </div>
           
      
        </>
    );
}
export default Temp;