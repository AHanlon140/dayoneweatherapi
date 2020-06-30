var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var description = document.querySelector('.description');
var temperature = document.querySelector('.temperature');



button.addEventListener('click', function(){
    fetch('api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=22d9d10551b8a1cc945dbadf0906691f')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather']['0']['description'];
        
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })
    


    .catch(err => alert("wrong city name!"))
})