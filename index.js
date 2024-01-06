#index.js

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e5ccc7a58mshe3515001a8a5c38p19028bjsn984925f11161',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}



// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9e5ccc7a58mshe3515001a8a5c38p19028bjsn984925f11161',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle',options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(error => console.log(error))


//     const url = 'https://forecast9.p.rapidapi.com/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9e5ccc7a58mshe3515001a8a5c38p19028bjsn984925f11161',
// 		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
