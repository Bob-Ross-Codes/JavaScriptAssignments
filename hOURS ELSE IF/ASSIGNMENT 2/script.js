let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour


if (hour >= 8 && hour <= 9) { 
  textHolder.innerHTML = "Good morning!";
} else if (hour > 10 && hour < 14 ) { 
  textHolder.innerHTML = "shit time";
} else if (hour > 15 && hour < 16 ) { 
  textHolder.innerHTML = "shit time";
} else if (hour == 17) { 
  textHolder.innerHTML = "Good afternoon";
} else if (hour >= 18 && hour <= 19) { 
  textHolder.innerHTML = "It is dinner time";
} else {
  textHolder.innerHTML = "Goodnight";
}