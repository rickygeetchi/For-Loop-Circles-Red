class Box{
    constructor(width, height, backgroundColor){
        this.color = backgroundColor;
        this.height = `${height}px`;
        this.width = `${width}px`;
        this.circle = '50%'
    }

    render () {
        const body = document.body;
        const div = document.createElement('div');
        div.style.width = this.width;
        div.style.height = this.height;
        div.style.borderRadius = this.circle;
        div.style.backgroundColor = this.color;
        body.appendChild(div);
       
    }
}

const myBox = new Box(50,50,'red');

console.log(myBox)

for (let i = 0; i <= 9; i += 1){
    myBox.render();
}


