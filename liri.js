require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require("request");
var movieName = process.argv.slice(3).join(' ');
var liriReturn = process.argv[2];
// var Bands = require('node-bands-api');


switch(liriReturn){
    case "spotify-this-song":
    spotifyThisSong();
    break;

    case "movie-this":   
    movieThis();
    break

    case "bands-in-town":
    bandsThis();
    break; 

    default: console.log("\n" + "type any command after 'node liri.js': " + "\n")
    "spotify-this-song 'any song title' " + "\n" +
    "movie-this 'any movie title' " + "\n"+
    "bands-in-town 'any band in town' " + "\n"

};

function musicThis(){

    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request (queryUrl, function (error, response, body){

            if(!error && response.statusCode === 200){

                var musicThis = JSON.parse(body);
                var queryUrlResults =
                "Name: " + myMusicData.Name + "\n" +
                "Venue: " + myMusicData.Venue + "\n" +
                "Date: " + myMusicData.Name + "\n" 

                console.log()
            }
    })
}

function movieThis(){

    var queryUrl = "http://www.omdbapi.com/?apikey=ba5aaec1&t=" + movieName ;
   
    request (queryUrl, function (error, response, body){

                console.log(error, response.statusCode)

            if(!error){

                var myMovieData = JSON.parse(body);
                var queryUrlResults =
                "Artist: " + myMovieData.Name + "\n" +
                "Song: " + myMovieData.Venue + "\n" +
                "Link: " + myMovieData + "\n" 
                "Album: " + myMovieData + "\n" 

                console.log(queryUrlResults)
            }
    })
}


function bandThis(){

    var queryUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=ba5aaec1" + bandName + "ba5aaec1";
   
    request (queryUrl, function (error, response, body){

            if(!error && response.statusCode === 200){

                var bandThis = JSON.parse(body);
                var queryUrlResults =
                "Title: " + mybandData.Title + "\n" +
                "Year: " + mybandData.Yeer + "\n" +
                "Rating: " + mybandData.Rating + "\n" 
                "County: " + mybandData. County + "\n" 
                "Language: " + mybandData.Language + "\n" 
                "Plot: " + mybandData.Plot + "\n" 
                "Actors: " + mybandData.Actors + "\n" 

                console.log()
            }
    })
}


// var spotify = new Spotify(keys.spotify);
