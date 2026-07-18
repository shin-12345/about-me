const colors = [
    "#eef2f7",
    "#fff8e7",
    "#eafaf1",
    "#f5ecff",
    "#e8f7ff"
];

let index = 0;

function changeColor(){
    index++;

    if(index >= colors.length){
        index = 0;
    }

    document.body.style.background = colors[index];
}