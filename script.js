let loc = document.getElementById("d1");
let tempicon1 = document.getElementById("image_00");
let tempvalue1 = document.getElementById("temp_00");
let climate1 = document.getElementById("climate_00");
let iconfile;
let ap=document.getElementById("d12");
let hum=document.getElementById("humidity_00");
let wind1=document.getElementById("wind_00");

const searchInput = document.getElementById("input");
const searchButton = document.getElementById("search_button");

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value = '';
})
const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=53a46d7e7f146a89a6425ac9ebc136b3`,
            { mode: 'cors' }
        );
        const weatherData = await response.json();
        console.log(weatherData);
        const { name } = weatherData;
        const { feels_like, humidity } = weatherData.main;
        const { id, main } = weatherData.weather[0];
        const { speed} = weatherData.wind;
        loc.textContent = name;
        ap.textContent =name;
        climate1.textContent = main;
        tempvalue1.textContent = Math.round(feels_like - 273);
        hum.textContent=humidity;
        wind1.textContent=speed;
        
        tempicon1.src = "http://openweathermap.org/img/wn/"+
        weatherData.weather[0].icon
        +".png";

    }
    catch (error) 
    {
        alert('city not found');
    }
};

var nav =document.querySelector('#NaVbar');

            window.addEventListener('scroll',function(){
                if (window.pageYOffset>30) {

                    nav.classList.add('fixed-top');
                }else{
                    
                    nav.classList.remove('fixed-top');
                }
            });
let myNav = document.querySelector('#NaVbar');


window.onscroll = function () { moveTop() };


function GetInfo() {
    var newName = document.getElementById("input");
    


fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=53a46d7e7f146a89a6425ac9ebc136b3')
.then(response => response.json())
.then(data => {

    let n;
    let date=new Date();
    let mon=date.getHours();
    console.log(mon);
    if(mon>=0 & mon<3){
        n=1;
    } else if(mon>=3 & mon<6){
        n=2;
    } else if(mon>=6 & mon<9){
        n=3;
    } else if(mon>=9& mon<12){
        n=4;
    } else if(mon>=12 & mon<15){
        n=5;
    } else if(mon>=15 & mon<18){
        n=6;
    } else if(mon>=18 & mon<21){
        n=7;
    }else {
        n=7;
    }
    let m=8-n;
    let q=m+2;
    for (let d = 1; d <5; d++) {
        document.getElementById("d0" + (d+1)).innerHTML =data.list[q].dt_txt.slice(0,10);
        document.getElementById("d" + (d+1)).innerHTML =data.list[q].dt_txt.slice(0,10);
        q=q+8;
    }

    for (let a = 0; a < 4; a++) {
        for (let b = 1; b < 9; b++) {
            document.getElementById("temp_" + (a)+ +(b)).innerHTML =Number(data.list[m+2].main.feels_like - 273.15).toFixed(1);
            document.getElementById("climate_" +(a)+ +(b)).innerHTML =data.list[m+2].weather[0].main;
            document.getElementById("image_" +(a)+ +(b)).src = "http://openweathermap.org/img/wn/"+
            data.list[m+2].weather[0].icon
            +".png";
            m++;
        }
        
    }
    
    console.log(data)

    function CheckDay(day){
        if(day + d.getDay() > 6){
            return day + d.getDay() - 7;
        }
        else{
            return day + d.getDay();
        }
    }
    
        for(i = 1; i<5; i++){
            document.getElementById("a" + (i+1)).innerHTML = weekday[CheckDay(i)];
    
    
        }
})
.catch(err => alert("City not found"))
}





    


