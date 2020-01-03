var timerID;
var colorValue = 255;
var colorChangeSpeed = 10;
// var myBody = document.querySelector('body');
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
            colorValue = colorValue + (255 / 60) * colorChangeSpeed;
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
            $('body').css('color', "rgb(255,255,255)");
            $('body').css('backgroundColor', "rgb(0,0,0)");
        }
        else {
            colorValue = colorValue - (255 / 60) * colorChangeSpeed;
            $('body').css('color', "rgb(" + (255 - colorValue) + "," + (255 - colorValue) + "," + (255 - colorValue) + ")");
            $('body').css('backgroundColor', "rgb(" + colorValue + "," + colorValue + "," + colorValue + ")");
        }
    }
}

function init()
{
    if(getCookie('isDarkMode') == '1'){
        alert(getCookie('isDarkMode'));
        colorValue = 0;
        $('modeChange').value = "일반으로 변경";
    }
    else{
        alert(getCookie('isDarkMode'));
        colorValue = 255;
        $('modeChange').value = "야간으로 변경";
    }
}

function isMobile() {
    return 1 < window.devicePixelRatio;
}

function setCookie(name, value, days) {
    if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
    } else {
           var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == name) {
                    return unescape(y);
            }
    }
}