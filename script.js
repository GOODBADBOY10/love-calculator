let resultBox = document.getElementById('result')
let container = document.getElementById('content-box');


window.onload = function () {
    let button = document.getElementById('button')
    button.addEventListener('click', calculateLove);
}

function calculateLove() {
    let yourName = document.getElementById('your-name').value
    let loverName = document.getElementById('lover-name').value
    let resultName = document.getElementById('result-name');
    let resultLover = document.getElementById('result-lover');
    let resultPercentage = document.getElementById('result-percentage');

    if (yourName === '' && loverName === '') {
        alert("Enter Your name and Lover's name");
    } else {
        let percentage = Math.floor(Math.random() * 101);
        resultName.innerText = yourName;
        resultPercentage.innerText = percentage.toString() + " % ";
        resultLover.innerText = loverName;
    }
}
