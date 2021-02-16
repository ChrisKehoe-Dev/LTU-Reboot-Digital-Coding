var temperature = Math.floor(Math.random() * 75 +3);
var season = "Summers"
var qCoat

if(temperature < 0) {
    qCoat = "Stay Inside"
} else if (temperature < 30 && season != "Summer" ) {
    qCoat = "Wear a coat and hat"
} else if (temperature < 30 && season == "Summer" ) {
    qCoat = "Wear a jacket"
} else if (temperature < 50 && season != "Summer") {
    qCoat = "Wear a coat"
} else if (temperature < 50 && season == "Summer") {
    qCoat = "Wear a light jumper"
} else {
    qCoat = "Shorts and T-shirt and hit the beach"
} 

document.write("<p>" + temperature + "</p>")
document.write("<p>" + qCoat + "</p>")