function startCountdown() {
    var inputDate = new Date(document.getElementById('datetime').value);
    var countdownElement = document.getElementById('countdown');

    var countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var distance = inputDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = "Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Time's up!";
        }
    }, 1000);
}