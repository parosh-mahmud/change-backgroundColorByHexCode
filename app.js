var button =document.getElementById("btn")
var body = document.body

button.addEventListener("click", function (e) {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    if (e.target.value == "button") {
        document.body.style.backgroundColor=getRandomColor()
    }
    
})
