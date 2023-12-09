window.onload = function () {
    var counter = 0;
    var counterElement = document.getElementById("counter");
    var incrementButton = document.getElementById("increment");
    incrementButton.onclick = function () {
        counter++;
        counterElement.textContent = counter.toString();
    };
    var decrementButton = document.getElementById("decrement");
    decrementButton.onclick = function () {
        counter--;
        counterElement.textContent = counter.toString();
    };
};
