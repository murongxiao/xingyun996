let arr = [
    1, [2, [3, [4,
        5
    ]]], 6
];

let dx = (arr) => {
    return arr.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            return [...pre, ...dx(cur)];
        } else {
            return [...pre, cur]
        }
    }, [])

}
console.log(dx(arr));