//square that changes when color selected
const brush = document.querySelector(".brush")

//set color button
const setColor = document.querySelector("#set-color")

//input field
const colorField = document.querySelector("#color-field")


setColor.addEventListener("click", (event) => {
    event.preventDefault();
    //check if button works
    //console.log("hello")
    brush.style.backgroundColor = colorField.value;
})

const body = document.querySelector("body")

for (let i = 0; i < 800; i++) {
    const newDiv = document.createElement('div');
    newDiv.className = 'square';
    body.appendChild(newDiv);

    function changeSquare() {
        newDiv.style.backgroundColor = colorField.value;
    }
    newDiv.addEventListener("mouseover", changeSquare);

}
