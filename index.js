// fetch("api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}");

const convert_to_json = function (res) {
    return res.json();
}

const handle_seacrh = function (search_responce) {
    const div_data = document.getElementById('wheather_data');
    // console.log(search_responce);   
    // console.log(search_responce.main.temp);
    // console.log(search_responce.wind.speed);
    // console.log(search_responce.weather[0].description);
    // console.log(search_responce.weather[0].id);

    div_data.innerText = search_responce.main.temp;
    div_data.innerText = search_responce.main.speed;
    div_data.innerText = search_responce.weather[0].description;
    div_data.innerText = search_responce.weather[0].id;   


}


const search_fn = function () {
    const input = document.getElementById('input_field');
    const user_id = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user_id}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(convert_to_json).then(handle_seacrh);

}

const btnsearch = document.getElementById('search_btn');
btnsearch.addEventListener('click', search_fn);