// (atk, sht, dri, pass, def, spd)

let p1 = new Isagi();
let p2 = new Kaiser();

let stage = new Stage(
    p1,
    p2,
    document.querySelector('#player1'),
    document.querySelector('#player2')
)

stage.start();