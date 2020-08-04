function showTime() {
    var date = new Date();
    // hh must return 0 to 23
    var hh = date.getHours(); 
    // mm must return 0 to 59
    var mm = date.getMinutes();
    // ss must return 0 to 59
    var ss = date.getSeconds();
    // use to set AM/PM
    var session = "AM";
    // sets 00 to 12AM
    if(hh == 0) {
        hh = 12;
    }
    // to display time in 12 hour format
    if(hh > 12) {
        hh = hh - 12;
        session="PM";
    }

    // Code before ":" will be executed if the condition is true.
    // If the condition is false, then the condition after ":" will be executed.
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    // code to display hour
    document.getElementById("hour").innerText = hh;
    document.getElementById("hour").textContent = hh;
    // code to display minutes
    document.getElementById("minute").textContent = mm;
    document.getElementById("minute").textContent = mm;
    // code to display seconds
    document.getElementById("seconds").textContent = ss;
    document.getElementById("seconds").textContent = ss;
    // code to display AM/PM
    document.getElementById("ampm").textContent = session;
    document.getElementById("ampm").textContent = session;

    // HERE, setTimeout() IS USED TO CALL THE showTime() AFTER EVERY ONE SECOND
    setTimeout(showTime, 1000);
}