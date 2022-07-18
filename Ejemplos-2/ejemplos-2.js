//Primer ejemplo

var time = 13;
var greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20) {
  greeting = "Good evening";
}
console.log(greeting) // Good afternoon


//Segundo ejemplo

var day = 2;
var text;

switch (day) {
        case 0:
        text = "Sunday";
    break;
        case 1:
        text = "Monday";
    break;
        case 2:
        text = "Tuesday";
    break;
        case 3:
        text = "Wednesday";
    break;
        case 4:
        text = "Thursday";
    break;
        case 5:
        text = "Friday";
    break;
        case 6:
        text = "Saturday";
    break;
        default:
        text = "Error";
}
console.log(text); // Tuesday

//tercer ejemplo

