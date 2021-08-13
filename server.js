'use strict';


require( 'dotenv' ).config();
const express = require( 'express' );
const cors = require( 'cors' );
// const weather = require( './data/weather.json' );
const axios = require( 'axios' );

const app = express();
app.use( cors() );

const PORT = 3002;


const Weather = require( './Weather' );
const movies = require( './movies' );

//http://localhost:3002/weather?city=amman
app.get( '/weather', Weather.getWeather );

//our url route will be http://localhost:3002/test
app.get( '/test', ( request, response ) => {
  let smth = 'hello from the test route'; //<< testing a route
  response.send( smth );
} );


// let weatherArr = [];


// function getWeather(request, response) {
//   let city = request.query.city;
//   let lon = request.query.lon;
//   let lat = request.query.lat;


//   const URL = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&city=${city}&key=${process.env.WEATHER_API_KEY}`;






//   axios
//     .get(URL)
//     .then(result => {
//       let weatherArr = result.data.data

//       response.send(gettingWeatherData(weatherArr));
//       console.log('i am inside the promise');


//     })

//     .catch(err => {
//       response.send(err);
//       console.log('outside promise');
//     });





//   //   const city = weather.find( city => city.city_name.toLowerCase() === searchQuery.toLowerCase() );
//   //   if( city != undefined )
//   //   {
//   //     const weatherArray = city.data.map( day => new Forecast( day ) );
//   //     response.status( 200 ).send( weatherArray );
//   //   }
//   //   else
//   //   {
//   //     errorHandler( response );
//   //   }
// }


// function gettingWeatherData(weatherObj) {

//   let forCastObejct = [];

//   weatherObj.map(element => {
//     const description = `Low of ${element.low_temp}, high of ${element.max_temp} with ${element.weather.description}`;
//     const date = `${element.datetime}`;

//     forCastObejct.push(new WeatherObject(description, date));

//     console.log(forCastObejct);
//   });
//   return forCastObejct;

// };


// class WeatherObject {

//   constructor(description, date) {

//     this.description = description;
//     this.date = date;

//   }

// }




//http://localhost:3002/movies?cityname=Amman
app.get( '/movies', movies.getMoviesHandler );

// async function getMoviesHandler(req, res) {
//   const city = req.query.cityname;

//   const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}`;


//   axios
//     .get(url)
//     .then(result => {
//       console.log('inside promise');

//       let moviesArray = result.data.results;

//       res.send(moviesobjectFunction(moviesArray));
//     })
//     .catch(err => {
//       res.send(err);
//     })
//   console.log('outside promise');
// }




// const moviesobjectFunction = (moviesobj) => {

//   const movieslistObj = [];

//   moviesobj.map(element => {

//     const title = element.title;


//     const overview = element.overview


//     const average_votes = element.vote_average

//     const total_votes = element.vote_count


//     const image_url = process.env.imgurl + element.poster_path


//     const popularity = element.popularity


//     const released_on = element.release_date


//     movieslistObj.push(new Movies(title, overview, average_votes, total_votes, image_url, popularity, released_on));

//     console.log(movieslistObj);

//   });

//   return movieslistObj;

// };


// class Movies {

//   constructor(title, overview, average_votes, total_votes, image_url, popularity, released_on) {

//     this.title = title;
//     this.overview = overview;
//     this.average_votes = average_votes;
//     this.total_votes = total_votes;
//     this.image_url = image_url;
//     this.popularity = popularity;
//     this.released_on = released_on;
//   }
// }


// function errorHandler( response ) {
//   response.status( 500 ).send( 'something went wrong' );
// }


// function Forecast( day ) {
//   this.date = day.valid_date;
//   this.description = day.weather.description;
// }

app.use( '*', ( request, response ) => response.status( 404 ).send( 'page not found' ) );

app.listen( PORT, () => {
  console.log( `I am Listening on port: ${PORT}` );
} );











// ---------------------------------------------------------------------------------------------------------------
// require( 'dotenv' ).config();
// const cors = require( 'cors' );
// const express = require( 'express' ); // << importing our express using require
// const server = express(); //<< saving all express related in a var called server
// const weatherData = require( './data/weather.json' ); // << importing or requiring our JSON data



// server.use( cors() );
// const PORT = 3002;//<< Our PORT digital number


// //our url route will be http://localhost:3000/
// server.get( '/', ( request, response ) => {
//   response.send( 'hello i am the root route / ' ); //<< this is the root route checking
// } );



// //our url route will be http://localhost:3000/test
// server.get( '/test', ( request, response ) => {
//   let smth = 'hello from the test route'; //<< testing a route
//   response.send( smth );
// } );




// //our url route will be http://localhost:3002/weather
// server.get( '/weather', weatherHandler );





// function weatherHandler( request, response ) {


//   console.log( weatherData );
//   // response.send( weatherData );
//   const cityName = request.query.name;


//   let cityNameData = weatherData.find( item => {
//     if ( item.city_name.toLowerCase() === cityName.toLowerCase() ) {
//       return item.city_name;
//     } else if ( cityNameData !== undefined ){
//       response.send( 'error' );

//     }

//   } );

//   // response.send( cityNameData.data );
//   console.log( cityNameData );

//   // } );

//   // let ourdata = weatherdata.data.map(item => {
//   //     return item.clouds ;
//   // });
//   // response.send(ourdata);

// }




// class Forecast {

// }


// server.get( '*', ( request, response ) => {
//   response.status( 404 ).send( 'page not found 404' ); //<< universal route
// } );





// server.listen( PORT, () => {
//   console.log( `i am listening ${PORT}` ); //<< making the server listening to our port always put it at the end
// } );
