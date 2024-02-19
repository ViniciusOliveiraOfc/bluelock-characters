let btnEnviar = document.querySelector('.btnEnviar');
btnEnviar.addEventListener('click', () => {
    let backdrop = document.querySelector('.backdrop');
    backdrop.classList.add('dnone');

    let valuep1 = document.querySelector('#selectP1').value;
    let valuep2 = document.querySelector('#selectP2').value;

    let p1;
    let p2;

    if (valuep1 == 'Isagi Yoichi') {
        p1 = new Isagi();
    } else if (valuep1 == 'Nagi Seishiro') {
        p1 = new Nagi();
    }

    if (valuep2 == 'Michael Kaiser') {
        p2 = new Kaiser();
    } else if (valuep2 == 'Kunigami Rensuke') {
        p2 = new Kunigami();
    }

    let stage = new Stage(
        p1,
        p2,
        document.querySelector('#player1'),
        document.querySelector('#player2')
    )
    
    stage.start();
})