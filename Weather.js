const axios = require( 'axios' );

const Weather = {};


Weather.getWeather = function( request, response ) {
  let city = request.query.city;
  let lon = request.query.lon;
  let lat = request.query.lat;


  const URL = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&city=${city}&key=${process.env.WEATHER_API_KEY}`;






  axios
    .get( URL )
    .then( result => {
      let weatherArr = result.data.data;

      response.send( Weather.gettingWeatherData( weatherArr ) );
      console.log( 'i am inside the promise' );


    } )

    .catch( err => {
      response.send( err );
      console.log( 'outside promise' );
    } );





}


Weather.gettingWeatherData = ( weatherObj ) => {

  let forCastObejct = [];

  weatherObj.map( element => {
    const description = `Low of ${element.low_temp}, high of ${element.max_temp} with ${element.weather.description}`;
    const date = `${element.datetime}`;

    forCastObejct.push( new WeatherObject( description, date ) );

    console.log( forCastObejct );
  } );
  return forCastObejct;

}


class WeatherObject {

  constructor( description, date ) {

    this.description = description;
    this.date = date;

  }

}


module.exports = Weather;
