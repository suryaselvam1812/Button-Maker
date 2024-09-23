let bgColor = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let paddingValue = document.getElementById("paddingInput");
let borderRadiusValue = document.getElementById("borderRadiusInput");
let customButton1 = document.getElementById("customButton");

function changeButtonColor() {
    let bgColorbutton = bgColor.value;

    let fontColorbutton = fontColor.value;
    let fontSizebutton = fontSize.value;
    let fontWeightbutton = fontWeight.value;
    let paddingbutton = paddingValue.value;
    let borderRadiusbutton = borderRadiusValue.value;
    customButton1.style.backgroundColor = bgColorbutton;
    customButton1.style.color = fontColorbutton;
    customButton1.style.fontSize = fontSizebutton;
    customButton1.style.fontWeight = fontWeightbutton;
    customButton1.style.padding = paddingbutton;
    customButton1.style.borderRadius = borderRadiusbutton;

}