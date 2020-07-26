// Quotes API 
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        // Random quote
        var randQuote = document.getElementById('randQuote');
        var circle = document.querySelector('.background-circle');

        function showQuote() {
            randQuote.innerHTML = apiResult.slip.advice;
            randQuote.style.fontWeight = '400';
        }

        circle.addEventListener('click', showQuote);

    }
};
xmlhttp.open('GET', 'https://api.adviceslip.com/advice', true);
xmlhttp.send();