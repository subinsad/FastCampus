const User = function (name, age) {
    this.name = name;
    this.age = age;
};

User.prototype.showName = function () {
    console.log(this.name);
};

const mike = new User('mike', 30);

class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}

const tom = new User('tom', 30);

//상속 extends

class Car {
    constructor(color) {
        this.color = color;
        this.whells = 4;
    }
    drive() {
        console.log('drive');
    }
    stop() {
        super.stop(); // stop을사용-부모클래스를사용, 오버라이딩
        console.log('stop');
    }
}

class Bmw extends Car {
    constructor(color) {
        super(color); // 이게 있어야 함. 부모생성자 호출
        this.navigation = 1;
    }
    park() {
        console.log('park');
    }
}

const z4 = new Bmw('blue');
