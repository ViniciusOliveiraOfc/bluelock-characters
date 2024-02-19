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
        this.p1El.querySelector('.playerName').innerHTML = this.p1.name;
        this.p2El.querySelector('.playerName').innerHTML = this.p2.name;
    }
}