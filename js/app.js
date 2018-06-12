let body = document.querySelector("body")
let submit = document.getElementById("submit")
let date
let time
initialize()

function initialize() {
    body.innerHTML = ""

    let box = document.createElement("div")
    //box.classList.add("content")

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
    submit.classList.add("button")
    submit.id = "submit"
    submit.innerHTML = "Submit"
    submitP.appendChild(submit)

    submit.addEventListener('click', function () {
        if (document.getElementById("date").value && document.getElementById("time").value) {
            date = document.getElementById("date").value
            time = document.getElementById("time").value
            displayTimer(date, time)
        }
        else {
            window.alert("Input valid date and time!")
        }
    })

    box.appendChild(dateP)
    box.appendChild(timeP)

    body.appendChild(box)
    body.appendChild(submitP)
}

function displayTimer(date, time) {
    body.innerHTML = ""
    
    let timer = document.createElement("table")
    timer.id = "table"
    timer.classList.add("table")

    let text = document.createElement("tr")

    let d = document.createElement("td")
    d.innerHTML = "Days"
    d.classList.add("text")
    
    let h = document.createElement("td")
    h.innerHTML = "Hours"
    h.classList.add("text")

    let m = document.createElement("td")
    m.innerHTML = "Minutes"
    m.classList.add("text")

    let s = document.createElement("td")
    s.innerHTML = "Seconds"
    s.classList.add("text")

    text.appendChild(d)
    text.appendChild(h)
    text.appendChild(m)
    text.appendChild(s)

    let numbers = document.createElement("tr")

    let days = document.createElement("td")
    days.id = "days"
    days.classList.add("number")

    let hours = document.createElement("td")
    hours.id = "hours"
    hours.classList.add("number")

    let minutes = document.createElement("td")
    minutes.id = "minutes"
    minutes.classList.add("number")

    let seconds = document.createElement("td")
    seconds.id = "seconds"
    seconds.classList.add("number")

    numbers.appendChild(days)
    numbers.appendChild(hours)
    numbers.appendChild(minutes)
    numbers.appendChild(seconds)

    timer.appendChild(text)
    timer.appendChild(numbers)

    let reset = document.createElement("button")
    reset.id = "reset"
    reset.innerHTML = "Reset"

    body.appendChild(timer)
    body.appendChild(reset)
    
    // Set the date we're counting down to
    let countDownDate = new Date(date + " " + time).getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {
    
        let d = document.getElementById("days")
        let h = document.getElementById("hours")
        let m = document.getElementById("minutes")
        let s = document.getElementById("seconds")
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
      
      d.innerHTML = days 
      h.innerHTML = hours
      m.innerHTML = minutes
      s.innerHTML = seconds
    
      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        window.alert("The time has come")
        initialize()
      }
    }, 1000)

    reset.addEventListener('click', function () {
        clearInterval(x)
        initialize()
    })
}
