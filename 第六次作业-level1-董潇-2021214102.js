const boxes = document.querySelectorAll("div");

let move = (t) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, t)
    })
}

async function run() {
    for (const box of boxes) {
        box.classList.add("run")
        await move(1000);
    }
}
run();