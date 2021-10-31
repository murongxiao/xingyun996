{
    let obj = new Object();
    obj.name = 'dx1';
    obj.color = 'red';
    console.log(obj);
} {
    let obj = {
        name: 'dx2',
        color: 'yellow'
    }
    console.log(obj);
} {
    function Dx() {
        this.name = 'dx3';
        this.color = 'green';
    }
    let d = new Dx();
    console.log(d);
}