const spans = document.getElementsByTagName('span');
const box = document.querySelector('.box');
for (let i = 0; i < spans.length; i++) {
    spans[i].style.backgroundColor = "black"
}

function changeColor() {
    if (spans[0].style.backgroundColor == "black") {
        for (let i = 0; i < spans.length; ++i) {
            spans[i].style.backgroundColor = "white";
        };
    } else if (spans[1].style.backgroundColor == "white") {
        for (let i = 0; i < spans.length; ++i) {
            spans[i].style.backgroundColor = "black";
        };
    }
    if (box.innerHTML == "点我查看内容") {
        this.innerHTML = "点我隐藏内容";
    } else {
        this.innerHTML = "点我查看内容";
    };
}

box.addEventListener('click', changeColor, false);