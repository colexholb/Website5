/* Nothing changed too much from this file. Everything was already cleaned up for the most part. */

/* Page Switching Functions */
function hideAll() {
    let list = [document.getElementById('page-home'), 
                document.getElementById('page-music'),
                document.getElementById('page-live'),
                document.getElementById('page-links'),
                document.getElementById('page-form')];
    for (let i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
    };
};

function showHome() {
    let x = document.getElementById("page-home");
    hideAll();
    x.style.display = 'flex';
};

function showLive() {
    let x = document.getElementById("page-live");
    hideAll();
    x.style.display = 'flex';
};

function showMusic() {
    let x = document.getElementById("page-music");
    hideAll();
    x.style.display = 'flex';
};

function showLinks() {
    let x = document.getElementById("page-links");
    hideAll();
    x.style.display = 'flex';
};

function showForm() {
    let x = document.getElementById("page-form");
    hideAll();
    x.style.display = 'flex';
};

/* Added toggleTheme() functon to handle the theme change. */
function toggleTheme() {
    var head = document.head;
    var links = document.head.getElementsByTagName("link");

    if (links.length == 1) {
        file = "css/theme.css";
        var link = document.createElement("link");

        link.rel = "stylesheet";
        link.href = file;

        head.appendChild(link);
    } else {
        var last = links[1];
        head.removeChild(last);
    }
};

/* Form Function */
document.addEventListener("DOMContentLoaded", function() {
    initValidation("myform");
  });
