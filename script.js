var timerID;
var colorValue = 255;
var myBody = document.querySelector('body');
var backgroundChanger = {
    changeWhite: function () {
        if (colorValue >= 255) {
            //colorValue = -1;
            clearInterval(timerID);
            timerID = null;
            colorValue = 255;
            // myBody.style.color = "rgb(0,0,0)"
            // myBody.style.backgroundColor = "rgb(255,255,255)";
            $('body').css('color', "rgb(0,0,0)");
            $('body').css('backgroundColor', "rgb(255,255,255)");
        }
        else {
            colorValue = colorValue + 255 / 60;
            // myBody.style.color = "rgb(" + (255 - colorValue) + "," + (255 - colorValue) + "," + (255 - colorValue) + ")";
            // myBody.style.backgroundColor = "rgb(" + colorValue + "," + colorValue + "," + colorValue + ")";
            $('body').css('color', "rgb(" + (255 - colorValue) + "," + (255 - colorValue) + "," + (255 - colorValue) + ")");
            $('body').css('backgroundColor', "rgb(" + colorValue + "," + colorValue + "," + colorValue + ")");
        }
    },
    changeBlack: function () {
        if (colorValue <= 0) {
            //colorValue = -1;
            clearInterval(timerID);
            timerID = null;
            colorValue = 0;
            myBody.style.color = "rgb(255,255,255)"
            myBody.style.backgroundColor = "rgb(0,0,0)";
        }
        else {
            colorValue = colorValue - 255 / 60;
            myBody.style.color = "rgb(" + (255 - colorValue) + "," + (255 - colorValue) + "," + (255 - colorValue) + ")";
            myBody.style.backgroundColor = "rgb(" + colorValue + "," + colorValue + "," + colorValue + ")";
        }
    }
}

document.writeln(window.innerWidth + " " + window.innerHeight);
$('body').append(window.innerWidth + " " + window.innerHeight);
        // $('body').append($('document').innerWidth + " " + $('document').innerHeight);