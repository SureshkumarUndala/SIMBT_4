const cityref = document.querySelector("input")
const search_btn = document.querySelector(".search_btn")
const popupButton = document.querySelector(".popup_button")




const sunsetTime = (timestamps)=>{
  console.log(timestamps)
  const time =new Date(timestamps)
  return `${time.getHours()} : ${time.getMinutes()}`
}


// store search cities 




const getWheather = ()=>{
     console.log(cityref)
    let city = cityref.value
    if(city.trim().length === 0){
      document.querySelector(".popup").style.display = "flex"

     
        return 
    }
    else{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=28f2ba0a8bd96c69b2d4e2c58c855352`
        ).then(res=>res.json()).
        then(res=>{
          console.log(res)
          if(res.cod !=="404"){
         
            const wheather =document.querySelector(".wheather")
            wheather.style.display = "flex"
            document.querySelector(".city_name").innerText = res.name
            document.querySelector('.time').innerText = sunsetTime(res.sys.sunset)
            document.querySelector(".temperature").innerText = `${Math.round(res.main.temp - 273.15)} °C`   
           document.querySelector(".pressure").innerText = res.main.pressure
           document.querySelector(".windspeed").innerText = `${res.wind.speed}Km/hr`
           document.querySelector(".humidity").innerText = res.main.humidity
          

          }
          else{
           document.querySelector(".popup").style.display = "flex"
           return
            
          }
        

        }
            ).catch(err=>console.log(err))
    }

    
}

// turn off popup 
popupButton.addEventListener("click", ()=>{
  document.querySelector(".popup").style.display = "none"
  return

})

search_btn.addEventListener("click", getWheather)
