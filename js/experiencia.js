let modoOscuro = document.getElementById('modoOscuro');
let c=0;
modoOscuro.addEventListener('click',()=>{
    if(c==0){
    document.body.style.background = '#000';
    document.body.style.color = '#fff';
    document.getElementById('header').style.background = 'linear-gradient(180deg, #000 25%, rgb(107, 152, 250) 75%)';
    modoOscuro.innerHTML = '<i class="fa-regular fa-moon"></i>';
    c=1;
    }else{
    document.body.style.background = '#fff';
    document.body.style.color = '#000';
    modoOscuro.innerHTML = '<i class="fa-solid fa-moon"></i>';
    document.getElementById('header').style.background = 'linear-gradient(180deg, #fff 25%, rgb(107, 152, 250) 75%)';
    c=0;
    }
})


let empresa1 = document.getElementById('empresa1');
let clic = 0;

empresa1.addEventListener('click', () => {
    if(clic==0){
    document.getElementById('uno').style.display='block';
    empresa1.innerHTML = '<span><i class="fa-solid fa-chevron-up"> </i> </span>Sprinter - Project Manager'
    clic = 1
    }else {
    document.getElementById('uno').style.display='none';
    empresa1.innerHTML = '<span><i class="fa-solid fa-chevron-down"> </i> </span>Sprinter - Project Manager'
    clic = 0
    }
});

let empresa2 = document.getElementById('empresa2');
let clic2 = 0;

empresa2.addEventListener('click', () => {
    if(clic2==0){
    document.getElementById('dos').style.display='block';
    empresa2.innerHTML = '<span><i class="fa-solid fa-chevron-up"> </i> </span>JD Sports - Project Manager'
    clic2 = 1
    }else {
    document.getElementById('dos').style.display='none';
    empresa2.innerHTML = '<span><i class="fa-solid fa-chevron-down"> </i> </span>JD Sports - Project Manager'
    clic2 = 0
    }
});


let empresa3 = document.getElementById('empresa3');
let clic3 = 0;

empresa3.addEventListener('click', () => {
    if(clic3==0){
    document.getElementById('tres').style.display='block';
    empresa3.innerHTML = '<span><i class="fa-solid fa-chevron-up"> </i> </span>Balearia - Project Manager'
    clic3 = 1
    }else {
    document.getElementById('tres').style.display='none';
    empresa3.innerHTML = '<span><i class="fa-solid fa-chevron-down"> </i> </span>Balearia - Project Manager'
    clic3 = 0
    }
});




