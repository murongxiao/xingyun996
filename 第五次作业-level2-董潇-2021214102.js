const choice = document.querySelectorAll(".box");
const All = document.querySelector(".all");
const Not = document.querySelector(".not");
const notAll = document.querySelector(".not-all");

All.addEventListener('click', () => {
    for (let i = 0; i < choice.length; i++) {
        choice[i].checked = true;
    }
}, false);

Not.addEventListener('click', () => {
    for (let i = 0; i < choice.length; i++) {
        choice[i].checked = false;
    }
}, false);

notAll.addEventListener('click', () => {
    for (let i = 0; i < choice.length; i++) {
        if (choice[i].checked == true) {
            choice[i].checked = false;
        } else if (choice[i].checked == false) {
            choice[i].checked = true;
        }
    }
}, false);