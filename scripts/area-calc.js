// function calculateTriangleArea(){

//     // get triangle base value;
//     const baseField = document.getElementById('triangle-base');
//     const baseValueText = baseField.value;
//     const base = parseFloat(baseValueText);
//     // console.log(base);

//     // get triangle height value
//     const heightField = document.getElementById('triangle-height');
//     const heightValueText = heightField.value;
//     const height = parseFloat(heightValueText);
//     // console.log(height);
    
//     const area = 0.5 * base * height;
//     // console.log(area);

//     const araeTriangle = document.getElementById('triangle-area');
//     araeTriangle.innerText = area;

// }

// function calculateRectangleArea(){

//      // get rectangle width value;
//      const widthField = document.getElementById('rectangle-width');
//      const widthValueText = widthField.value;
//      const width = parseFloat(widthValueText);
//      // console.log(base);
 
//      // get triangle length value
//      const lengthField = document.getElementById('rectangle-length');
//      const lengthValueText = lengthField.value;
//      const length = parseFloat(lengthValueText);
//      // console.log(height);
     
//      const area = width * length;
//      // console.log(area);
 
//      const areaRectangle = document.getElementById('rectangle-area');
//      areaRectangle.innerText = area;
// }

// reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    console.log(base);
    
    const height = getInputValue('parallelogram-height')
    console.log(height);

    const area = base * height;
}

// reuseable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reuseable set span, p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}