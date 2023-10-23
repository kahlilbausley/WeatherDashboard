var mykey="9cc28bfada0d2a990d8705598bcad94a"
var cityinput=$("#searchCity")
var searchBtn = $("#searchbutton")
searchBtn.on("click", searchWeather)


function searchWeather(city){
    city=cityinput.val()
    var history = document.querySelector("#historylist")
    var historyitem = document.createElement("button")
    var br = document.createElement("br")
    historyitem.textContent=city
    historyitem.classList.add("btn")
    historyitem.classList.add("btn-secondary")
    history.appendChild(historyitem)
    history.appendChild(br)
    history.appendChild(br)
    historyitem.addEventListener("click", function(){
        city=this.textContent
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${mykey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        $("#currentcity").text(city+" "+ dayjs().format("MM/DD/YYYY"))
        $("#currentimg").attr("src","https://openweathermap.org/img/wn/"+data.weather[0].icon+".png")
        $("#currenttemp").text("temp: " + data.main.temp)
        $("#currentwind").text("wind: " + data.wind.speed)
        $("#currenthumidity").text("humidity: " + data.main.humidity)

    })
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${mykey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        $("#day1date").text(data.list[5].dt_txt.slice(0, 10))
        $("#day1icon").attr("src","https://openweathermap.org/img/wn/"+data.list[5].weather[0].icon+"@2x.png")
        $("#day1temp").text("temp: " + data.list[5].main.temp)
        $("#day1wind").text("wind: " + data.list[5].wind.speed)
        $("#day1humidity").text("humidity: " + data.list[5].main.humidity)
        
        $("#day2date").text(data.list[13].dt_txt.slice(0, 10))
        $("#day2icon").attr("src","https://openweathermap.org/img/wn/"+data.list[13].weather[0].icon+"@2x.png")
        $("#day2temp").text("temp: " + data.list[13].main.temp)
        $("#day2wind").text("wind: " + data.list[13].wind.speed)
        $("#day2humidity").text("humidity: " + data.list[13].main.humidity)

        $("#day3date").text(data.list[21].dt_txt.slice(0, 10))
        $("#day3icon").attr("src","https://openweathermap.org/img/wn/"+data.list[21].weather[0].icon+"@2x.png")
        $("#day3temp").text("temp: " + data.list[21].main.temp)
        $("#day3wind").text("wind: " + data.list[21].wind.speed)
        $("#day3humidity").text("humidity: " + data.list[21].main.humidity)

        $("#day4date").text(data.list[29].dt_txt.slice(0, 10))
        $("#day4icon").attr("src","https://openweathermap.org/img/wn/"+data.list[29].weather[0].icon+"@2x.png")
        $("#day4temp").text("temp: " + data.list[29].main.temp)
        $("#day4wind").text("wind: " + data.list[29].wind.speed)
        $("#day4humidity").text("humidity: " + data.list[29].main.humidity)

        $("#day5date").text(data.list[37].dt_txt.slice(0, 10))
        $("#day5icon").attr("src","https://openweathermap.org/img/wn/"+data.list[37].weather[0].icon+"@2x.png")
        $("#day5temp").text("temp: " + data.list[37].main.temp)
        $("#day5wind").text("wind: " + data.list[37].wind.speed)
        $("#day5humidity").text("humidity: " + data.list[37].main.humidity)
    })
    })
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${mykey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        $("#currentcity").text(city+" "+ dayjs().format("MM/DD/YYYY"))
        $("#currentimg").attr("src","https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png")
        $("#currenttemp").text("temp: " + data.main.temp)
        $("#currentwind").text("wind: " + data.wind.speed)
        $("#currenthumidity").text("humidity: " + data.main.humidity)

    })
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${mykey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        $("#day1date").text(data.list[5].dt_txt.slice(0, 10))
        $("#day1icon").attr("src","https://openweathermap.org/img/wn/"+data.list[5].weather[0].icon+"@2x.png")
        $("#day1temp").text("temp: " + data.list[5].main.temp)
        $("#day1wind").text("wind: " + data.list[5].wind.speed)
        $("#day1humidity").text("humidity: " + data.list[5].main.humidity)
        
        $("#day2date").text(data.list[13].dt_txt.slice(0, 10))
        $("#day2icon").attr("src","https://openweathermap.org/img/wn/"+data.list[13].weather[0].icon+"@2x.png")
        $("#day2temp").text("temp: " + data.list[13].main.temp)
        $("#day2wind").text("wind: " + data.list[13].wind.speed)
        $("#day2humidity").text("humidity: " + data.list[13].main.humidity)

        $("#day3date").text(data.list[21].dt_txt.slice(0, 10))
        $("#day3icon").attr("src","https://openweathermap.org/img/wn/"+data.list[21].weather[0].icon+"@2x.png")
        $("#day3temp").text("temp: " + data.list[21].main.temp)
        $("#day3wind").text("wind: " + data.list[21].wind.speed)
        $("#day3humidity").text("humidity: " + data.list[21].main.humidity)

        $("#day4date").text(data.list[29].dt_txt.slice(0, 10))
        $("#day4icon").attr("src","https://openweathermap.org/img/wn/"+data.list[29].weather[0].icon+"@2x.png")
        $("#day4temp").text("temp: " + data.list[29].main.temp)
        $("#day4wind").text("wind: " + data.list[29].wind.speed)
        $("#day4humidity").text("humidity: " + data.list[29].main.humidity)

        $("#day5date").text(data.list[37].dt_txt.slice(0, 10))
        $("#day5icon").attr("src","https://openweathermap.org/img/wn/"+data.list[37].weather[0].icon+"@2x.png")
        $("#day5temp").text("temp: " + data.list[37].main.temp)
        $("#day5wind").text("wind: " + data.list[37].wind.speed)
        $("#day5humidity").text("humidity: " + data.list[37].main.humidity)
    })
}