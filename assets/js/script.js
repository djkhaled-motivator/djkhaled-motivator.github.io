var videos = ["https://www.youtube.com/embed/K23_vkcsncA", "https://www.youtube.com/embed/vZ7fedsomvA", "https://www.youtube.com/embed/KQfoZNE_u10", "https://www.youtube.com/embed/I0dBVsCe2fM", "https://www.youtube.com/embed/jEJLKNXv8fM", "https://www.youtube.com/embed/gHgAvor-oi0", "https://www.youtube.com/embed/tcEpHnaZMgg", "https://www.youtube.com/embed/GGXzlRoNtHU", "https://www.youtube.com/embed/Zen0U1BUUyg?list=PL02NJ2ydKsOmWyX6J6w4FfnbrQj86R2ek"];
var counter = 0;

document.getElementById('youtube').style.display = 'none';
document.getElementById('button-next').style.display = 'none';
document.getElementById('main-menu').style.display = 'none';

$('.modal-trigger').leanModal({
    complete: function() {
        var g = document.getElementById('daily-video').innerHTML;
        document.getElementById('daily-video').innerHTML = '';
        document.getElementById('daily-video').innerHTML = g;

    } 
});

function website(url){
    var win = window.open(url, '_blank');
    win.focus();
}


function getNextURL() {
    if (counter == videos.length) {
        counter = 0;
    }
    var toReturn = '<iframe width="' + screen.width + '" height="' + screen.height + '" src="' + videos[counter] + '?autoplay=1&cc_load_policy=1." frameborder="0" allowfullscreen></iframe>';
    counter++;
    return toReturn;
}

var i;

function GetYoutubeVideo() {
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBZ4orRfAgIo99yr9e2cxEUDtz9HhWALT0&channelId=UCVnvMGHpyUl7WR9LA5bOKcw&part=snippet,id&order=date&maxResults=1',
        success: function(data) {
            document.getElementById('daily-video').innerHTML = '<iframe width="600px" height="300px" src="https://www.youtube.com/embed/' + data.items[0].id.videoId + '" frameborder="0" allowfullscreen></iframe>';
        },
        error: function() {
            console.log("Error");
        }
    });
}

GetYoutubeVideo();

function videoChanger() {
    document.getElementById('youtube').innerHTML = getNextURL();
}

function anotherOne() {
    document.getElementById('button-div').style.display = 'none';
    document.getElementById('youtube').style.display = 'block';
    document.getElementById('button-next').style.display = 'block';
    document.getElementById('main-menu').style.display = 'block';
    document.getElementById('youtube').innerHTML = getNextURL();
    document.getElementById('top-card').style.display = 'none';
    document.getElementById('videofeed').style.display = 'none';
}


function mainMenu(){
    document.getElementById('button-div').style.display = 'block';
    document.getElementById('youtube').style.display = 'none';
    document.getElementById('button-next').style.display = 'none';
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('top-card').style.display = 'block';
    document.getElementById('videofeed').style.display = '';
    var f = document.getElementById('youtube').innerHTML;
    document.getElementById('youtube').innerHTML = '';
}