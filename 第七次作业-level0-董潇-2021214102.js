const res = fetch("http://anonym.ink:8000/homework/get_homework", {
        method: 'POST'
    })
    .then(response => response.text())
    .then(level => console.log(level))