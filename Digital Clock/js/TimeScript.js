function showTime() {
    var date = new Date();
    // hh must return 0 to 23
    var hh = date.getHours(); 
    // mm must return 0 to 59
    var mm = date.getMinutes();
    // ss must return 0 to 59
    var ss = date.getSeconds();

    var session = "AM"

    if(hh == 0) {
        hh = 12;
    }

    if(hh > 12) {
        hh = hh - 12;
        session="PM";
    }

    // Code before ":" will be executed if the condition is true.
    // If the condition is false, then the condition after ":" will be executed.
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    var time = hh+":"+mm+":"+ss+" "+session;
    document.getElementById("hour").innerText = hh;
    document.getElementById("hour").textContent = hh;

    document.getElementById("minute").textContent = mm;
    document.getElementById("minute").textContent = mm;

    document.getElementById("seconds").textContent = ss;
    document.getElementById("seconds").textContent = ss;

    document.getElementById("ampm").textContent = session;
    document.getElementById("ampm").textContent = session;

    // HERE, setTimeout() IS USED TO CALL THE showTime() AFTER EVERY ONE SECOND
    setTimeout(showTime, 1000);
}

// HERE, setInterval() IS USED TO CALL THE showTime() AFTER EVERY ONE SECOND
// setInterval(showTime, 1000);