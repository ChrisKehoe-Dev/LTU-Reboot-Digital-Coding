var temperature = -1
var qCoat

if(temperature < 0 ) {
    qCoat = "Stay Inside"
} else if (temperature < 30 ) {
    qCoat = "Wear a coat and hat"
} else if (temperature < 50 ) {
    qCoat = "Wear a coat"
} else {
    qCoat = "Just Pants and Vest"
} 

document.write(qCoat)