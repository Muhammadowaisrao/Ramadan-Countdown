



var x = setInterval(function() {
    var ram = new Date("march 22, 2023 18:42:00").getTime();
    var now = new Date().getTime();
    var diff = ram - now;    
    var days = Math.floor(diff / (1000 * 24 * 60 * 60));
    console.log(days);
    var hours = Math.floor((diff % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60));
    console.log(hours);
    var minuts = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minuts);
    var sec = Math.floor((diff % (1000 * 60)) / (1000));
    console.log(sec);
    
    document.getElementById("count").innerHTML = days +"day, " + hours + ":hr " + minuts + ":min " + sec + ":sec"

}, 1000);

