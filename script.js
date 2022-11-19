const cambiarC = document.getElementById('btn');
const txt = document.getElementById('texto');

const colores = ['aliceblue', 'mediumorchid','azure','grey', 'pink', 'cadetblue', 'mistyrose','olive', 'blue', 'orange', 'midnightblue'];

cambiarC.addEventListener('click',function(){
    background();
});

function background(){
    var num = parseInt(Math.random(0,10)*colores.length);
    console.log(num);
    switch(num){
        case 0:
            body.style.backgroundColor = colores[0];
            txt.innerHTML='El color actual es AliceBlue';
            break;
        case 1:
            body.style.backgroundColor = colores[1];
            txt.innerHTML='El color actual es MediumOrchid';
            break;
        case 2:
            body.style.backgroundColor = colores[2];
            txt.innerHTML='El color actual es Azure';
            break;
        case 3:
            body.style.backgroundColor = colores[3];
            txt.innerHTML='El color actual es Gray';
            break;
        case 4:
            body.style.backgroundColor = colores[4];
            txt.innerHTML='El color actual es Pink';
            break;
        case 5:
            body.style.backgroundColor = colores[5];
            txt.innerHTML='El color actual es CadetBlue';
            break;
        case 6:
            body.style.backgroundColor = colores[6];
            txt.innerHTML='El color actual es MistyRose';
            break;
        case 7:
            body.style.backgroundColor = colores[7];
            txt.innerHTML='El color actual es Olive';
            break;
        case 8:
            body.style.backgroundColor = colores[8];
            txt.innerHTML='El color actual es Blue';
            break;
        case 9:
            body.style.backgroundColor = colores[9];
            txt.innerHTML='El color actual es Orange';
            break;
        case 10:
            body.style.backgroundColor = colores[10];
            txt.innerHTML='El color actual es MidnightBlue';
            break;
    }
    
}