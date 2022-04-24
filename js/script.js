const checkbox = document.getElementById("switch")
const link = document.querySelector("link")
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

if(prefersColorScheme == true){
    checkbox.checked = true;
}

function clicked(){

    if(checkbox.checked){
        link.href = "css/style-dark.css";
    } else {
        link.href = "css/style-light.css";
    }

}