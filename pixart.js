//square that changes when color selected
const brush = document.querySelector(".brush")

//set color button
const setColor = document.querySelector("#set-color")

//input field
const colorField = document.querySelector("#color-field")


setColor.addEventListener("click",(event) => {
    event.preventDefault();
//check if button works
//console.log("hello")
brush.style.backgroundColor = colorField.value;
})

for (let i = 0;i<20; i++){
    let newDiv = document.createElement('div')
    newDiv.className = 'square'
    document.querySelectorAll('body')[0].appendChild(newDiv)
    }
