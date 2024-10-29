var colorArray = [  " #81D8D0", "#020202" ]; // массив с цветами
var i = 0; // итератор

function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}

