var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button= document.querySelector('.submit');
var humidity= document.querySelector('.humidity');



button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humid = data['main']['humidity'];
  main.innerHTML = nameValue;
  desc.innerHTML = "Description - "+descValue;
  temp.innerHTML = "Temp - "+Math.round((tempValue-273.00)*100)/100+"°C";
  humidity.innerHTML="Humidity - "+humid+"%";

})

.catch(err => alert("Wrong city name!"));
})
