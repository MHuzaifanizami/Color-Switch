var buttons = document.querySelectorAll(".button");
var body = document.querySelector("body");
var title = document.getElementById("title");


buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        if (e.target.id == "yellow") {
            body.style.backgroundColor = e.target.id
            title.style.color = "#000"
        } else if (e.target.id == "green") {
            body.style.backgroundColor = e.target.id
            title.style.color = "#fff"


        } else if (e.target.id == "blue") {
            body.style.backgroundColor = e.target.id
            title.style.color = "#fff"


        } else if (e.target.id == "white") {
            body.style.backgroundColor = e.target.id
            
            title.style.color = "#000"


        } else if (e.target.id == "purple") {
            body.style.backgroundColor = e.target.id
            title.style.color = "#fff"


        }else if (e.target.id == "goldenrod") {
            body.style.backgroundColor = e.target.id
            title.style.color = "#fff"


        }else if (e.target.id == "pink") {
            body.style.backgroundColor = e.target.id
            title.style.color = "#fff"



        }

    })
})