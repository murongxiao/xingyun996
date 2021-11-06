let obj1 = { name: "Billy", age: 21, gender: "male" };
let obj2 = { name: "Peter", age: 18, gender: "male" };
let obj3 = { name: "Alex", age: 19, gender: "female" };
//复制方法1
function copy(insertObj) {
    let newObj = {};
    for (let i in insertObj) {
        newObj[i] = insertObj[i];
    }
    return newObj;
}
let peo1 = copy(obj1);
let peo2 = obj2; //法2
let peo3 = Object.assign(obj3); //法3
let arr = [];
arr.push(peo1, peo2, peo3);
console.table(arr);