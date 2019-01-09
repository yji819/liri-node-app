require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var name = process.argv[3];

if(command == "concert-this"){
    concertThis();
} else if (command == "spotify-this-song"){
    spotify();
} else if (command == "movie-this"){
    movieThis();
} else if (commnad =="do-what-it-says"){
    itSays();
};

function concertThis() {
    var request = require("request");

    request("https://rest.bandsintown.com/artists/" + name + "/events?app_id=codingbootcamp")
    request(request, function (response, data){
        
    }
};
function spotify() {
    if(process.argv[3] === undefined) {
		spotify = "The Sign";
	}
};