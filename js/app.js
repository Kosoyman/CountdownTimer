let body = document.querySelector("body")
initialize()

let submit = document.getElementById("submit")
let date
let time


function initialize() {
    body.innerHTML = ""
    
    let dateP = document.createElement("p")
    dateP.value = "Date"
    let date = document.createElement("input")
    date.type = "date"
    date.id = "date"
    dateP.appendChild(date)

    let timeP = document.createElement("p")
    timeP.value = "Time"
    let time = document.createElement("input")
    time.type = "time"
    time.id = "time"
    timeP.appendChild(time)

    let submitP = document.createElement("p")
    let submit = document.createElement("button")
    submit.id = "submit"
    submit.innerHTML = "Submit"
    submitP.appendChild(submit)

    body.appendChild(dateP)
    body.appendChild(timeP)
    body.appendChild(submitP)
}

submit.addEventListener('click', function () {
    console.log("Submitted")
    date = document.getElementById("date").value
    time = document.getElementById("time").value
    displayTimer(date, time)
})

function displayTimer(date, time) {


    body.innerHTML = ""
    
    let timer = document.createElement("p")
    timer.id = "timer"

    let reset = document.createElement("button")
    reset.id = "reset"
    reset.innerHTML = "Reset"

    reset.addEventListener('click', initialize)

    body.appendChild(timer)
    body.appendChild(reset)

    // Set the date we're counting down to
    let countDownDate = new Date(date + " " + time).getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {
    
      // Get todays date and time
      let now = new Date().getTime();
    
      // Find the distance between now an the count down date
      let distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="demo"
      document.getElementById("timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
}


