
function makeRed() {
    // your code here...
    console.log('Change background to red');
    // background color:
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.color = 'white';
    document.querySelector('#section1').style.fontSize = '50px';
}

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = '#266EBA';
}

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = 'pink';
}

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = 'orange';
}

function multicolor() {
    // Goal of this function is to change the colors of all of the
    // section1->red
    // section2->blue
    // section3->pink
    // section4->orange
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').innerHTML = "Hello";
    document.querySelector('#section2').style.backgroundColor = '#266EBA';
    document.querySelector('#section2').innerHTML = "there";
    document.querySelector('#section3').style.backgroundColor = 'pink';
    document.querySelector('#section3').innerHTML = "friend";
    document.querySelector('#section4').style.backgroundColor = 'orange';
    document.querySelector('#section4').innerHTML = "!";
}

