const boxs = document.querySelectorAll("div");

let move = (t) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, t)
    })
}

async function run() {
    for (const box of boxs) {
        box.classList.add("run")
        await move(1000);
    }
}
run();