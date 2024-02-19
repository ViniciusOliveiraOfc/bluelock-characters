// (atk, sht, dri, pass, def, spd)

class Isagi {
    constructor() {
        this.name = 'Isagi Yoichi';
        this.atk = 94;
        this.sht = 82;
        this.dri = 70;
        this.pass = 78;
        this.def = 75;
        this.spd = 77;
        this.imagePath = 'assets/imgs/isagi.jpg';
    }
}

class Kaiser {
    constructor() {
        this.name = 'Michael Kaiser';
        this.atk = 96;
        this.sht = 98;
        this.dri = 86;
        this.pass = 79;
        this.def = 74;
        this.spd = 91;
        this.imagePath = 'assets/imgs/kaiser.jpg';
    }
}

class Nagi {
    constructor() {
        this.name = 'Nagi Seishiro'
        this.atk = 91;
        this.sht = 92;
        this.dri = 86;
        this.pass = 85;
        this.def = 75;
        this.spd = 82;
        this.imagePath = 'assets/imgs/nagi.jpg';
    }
}

class Kunigami {
    constructor() {
        this.name = 'Kunigami Rensuke'
        this.atk = 94;
        this.sht = 95;
        this.dri = 71;
        this.pass = 65;
        this.def = 75;
        this.spd = 85;
        this.imagePath = 'assets/imgs/kunigami.jpg';
    }
}

class Stage {
    constructor(p1, p2, p1El, p2El) {
        this.p1 = p1;
        this.p2 = p2;
        this.p1El = p1El;
        this.p2El = p2El;
    }

    start() {
        // player img 
        this.p1El.querySelector('.playerImg').setAttribute('src', `${this.p1.imagePath}`);
        this.p2El.querySelector('.playerImg').setAttribute('src', `${this.p2.imagePath}`);

        // player names
        this.p1El.querySelector('.playerName').innerHTML = this.p1.name;
        this.p2El.querySelector('.playerName').innerHTML = this.p2.name;

        // p1 stats
        this.p1El.querySelector('.offense-number').innerHTML = this.p1.atk;
        this.p1El.querySelector('.shoot-number').innerHTML = this.p1.sht;
        this.p1El.querySelector('.dribble-number').innerHTML = this.p1.dri;
        this.p1El.querySelector('.pass-number').innerHTML = this.p1.pass;
        this.p1El.querySelector('.defense-number').innerHTML = this.p1.def;
        this.p1El.querySelector('.speed-number').innerHTML = this.p1.spd;

        // p1 stats
        this.p2El.querySelector('.offense-number').innerHTML = this.p2.atk;
        this.p2El.querySelector('.shoot-number').innerHTML = this.p2.sht;
        this.p2El.querySelector('.dribble-number').innerHTML = this.p2.dri;
        this.p2El.querySelector('.pass-number').innerHTML = this.p2.pass;
        this.p2El.querySelector('.defense-number').innerHTML = this.p2.def;
        this.p2El.querySelector('.speed-number').innerHTML = this.p2.spd;
    }
}