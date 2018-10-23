

var square = (x) => x * x;
console.log(square(9))


var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt(){
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);

//NOTE Arrow functions do not bind a "this" keyword
//functions on object literals can use "this" keyword is formmtted like sayHiAlt
