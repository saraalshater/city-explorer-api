'use strict';


require( 'dotenv' ).config();
const express = require( 'express' );
const cors = require( 'cors' );
const weather = require( './data/weather.json' );

const app = express();
app.use( cors() );

const PORT = process.env.PORT || 3002;

//localhost:3001/weather?searchQuery=amman
app.get( '/weather', handleWeather );
app.use( '*', ( request, response ) => response.status( 404 ).send( 'page not found' ) );

function handleWeather( request, response ) {
  let searchQuery = request.query.searchQuery;
  const city = weather.find( city => city.city_name.toLowerCase() === searchQuery.toLowerCase() );
  if( city != undefined )
  {
    const weatherArray = city.data.map( day => new Forecast( day ) );
    response.status( 200 ).send( weatherArray );
  }
  else
  {
    errorHandler( response );
  }
}

function errorHandler( response ) {
  response.status( 500 ).send( 'something went wrong' );
}


function Forecast( day ) {
  this.date = day.valid_date;
  this.description = day.weather.description;
}

app.listen( PORT, () => console.log( `listening on ${PORT}` ) );











// ---------------------------------------------------------------------------------------------------------------
// require( 'dotenv' ).config();
// const cors = require( 'cors' );
// const express = require( 'express' ); // << importing our express using require
// const server = express(); //<< saving all express related in a var called server
// const weatherData = require( './data/weather.json' ); // << importing or requiring our JSON data



// server.use( cors() );
// const PORT = 3000;//<< Our PORT digital number


// //our url route will be http://localhost:3000/
// server.get( '/', ( request, response ) => {
//   response.send( 'hello i am the root route / ' ); //<< this is the root route checking
// } );



// //our url route will be http://localhost:3000/test
// server.get( '/test', ( request, response ) => {
//   let smth = 'hello from the test route'; //<< testing a route
//   response.send( smth );
// } );




// // server.get( '/getweather', ( req,res )=> {
// //   let test = weatherData.data.map( item => {
// //     return item.city_name;
// //   } );

// //   res.send( test );
// // } )



// //our url route will be http://localhost:3000/weather
// server.get( '/weather', ( request, response ) => {

//   // response.send( weatherData.data);
//   // console.log( weatherData );
//   // const cityName = request.query.name;
//   const lon = request.query.lon;
//   // const lat = request.query.lat;

//   let cityNameData = weatherData.data.find( item => {
//     if ( item.lon == lon ) {
//       return item;
//     }


//   response.send( cityNameData );
//   console.log( cityNameData );
//   console.log( lon );
//   } );

//   // let ourdata = weatherdata.data.map(item => {
//   //     return item.clouds ;
//   // });
//   // response.send(ourdata);
// } );

// server.get( '*', ( request, response ) => {
//   response.status( 404 ).send( 'page not found 404' ); //<< universal route
// } );





// server.listen( PORT, () => {
//   console.log( `i am listening ${PORT}` ); //<< making the server listening to our port always put it at the end
// } );
