// Entscheidungsstrukturen | control structures

// Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Wertzuweisung
ageJohn = 20;
ageMark = 30;

//Logische Aussagen/ Test(s)
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

//console.log("isJohnOlder: " + isJohnOlder);
//console.log("isJohnEqual: " + isJohnEqual);

/************ IF  ************/

/* 
// alternativlos (TINA)
if (isJohnOlder) 
{
    console.log("John ist älter!");
}
 */

/************ IF - ELSE  ************/

/*
 // mit Alternative
if (isJohnOlder) 
{ // Ja-Zweig
    console.log("John ist älter!");
} 
else 
{ // Nein-Zweig
    console.log("John ist jünger!");
} 
*/

/************ IF - ELSE IF ************/

/* // mit Alternativen Fällen
if (isJohnOlder) 
{ // 1. Ja-Zweig
    console.log("John ist älter!");
} 
else if (isJohnEqual)
{ // 2. Ja-Zweig
    console.log("John ist gleich alt!");
}
else 
{ // Nein-Zweig
    console.log("John ist jünger!");
} */

/************  Ternäre Schreibweise ************/
//console.log((isJohnOlder) ? "John is older" : "Mark is older");

/************  Fallunterscheidung / SWITCH 1 ************/
/* 
let firstName, job;
firstName = "John";
//job = "driver";
//job = "teacher";
//job = "artist";
//job = "instructor";
job = "pilot";

switch (job) 
{
    case "driver":
        console.log(firstName + " fährt TAXI.");
        break;
    case "teacher":
    case "instructor":   
        console.log(firstName + " unterrichtet.");
        break;
    case "artist":
        console.log(firstName + " malt Bilder.");
        break;
    default: // Habe ich alle Fälle betrachtet???? (Wahrscheinlich nicht ...)
        console.log(firstName + " macht etwas anderes.");
        break;
} */

/************  Fallunterscheidung / SWITCH 2 ************/

/* let a = 20;

switch (a) {
    case 1:
        console.log("a ist 1");
        break;
    case 2:
        console.log("a ist 2");
        break;
        default:
        console.log("a hat einen anderen Wert");
        break;
} */

/************  Fallunterscheidung / SWITCH 2a ************/

/* let a = 3;

switch (true) {
    case (a == 1):
        console.log("a ist 1");
        break;
    case (a == 2):
        console.log("a ist 2");
        break;
        default:
        console.log("a hat einen anderen Wert");
        break;
} */

