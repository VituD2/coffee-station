// v1.9
// for getting div details working 
// next step = do the arrow down hover in js , then i'll be able to add a transition value;
//             Do the "read more" script

// INITIAL SCREEN SLIDE 
let bgImg = document.querySelector('#img1');
let link = {
    link0:'https://media.discordapp.net/attachments/823303452036825129/934218424786235422/coffee-pure.jpg?width=2048&height=1280',
    link1:'https://media.discordapp.net/attachments/823303452036825129/934218450899976252/making.jpg?width=2048&height=1280',
    link2:'https://media.discordapp.net/attachments/823303452036825129/934218472127340584/finished.jpg?width=2048&height=1280'
}

var current = 0;
let changingImg = true;

let styleBg = window.getComputedStyle(bgImg, false);
let currentImg = styleBg.backgroundImage.slice(4, -1).replace(/"/g, "");
console.log(currentImg);

document.getElementById(0).classList.add('currentImgDot');

let pos = document.querySelectorAll('.slide-dots i');

// console.log(pos[2]);

for(let i=0; i < pos.length; i++) {
    pos[i].addEventListener('click', ()=>{
        // console.log(pos[i].i + 'clicado')
        current = pos[i].id;
        changingImg = false;
        slide();
    });
}

function slide() {
    if(current >= 3) {
        current = 0;
    } else if(current < 0) {
        current = 2;
    }
    document.querySelector('.currentImgDot').classList.remove('currentImgDot');
    bgImg.style.backgroundImage = `url(${Object.values(link)[current]})`;
    // console.log(document.querySelector('.currentImgDot'));
    document.getElementById([current]).classList.add('currentImgDot');
}

slide();

setInterval(()=>{
    if(changingImg){
        current++;
        slide();
    } else {
        changingImg = true;
    }
}, 6000);


// TYPES OF COFFEE READ MORE SCRIPT

let type_cont = document.querySelectorAll('#type-cont');

for (let i = 0; i < type_cont.length; i++) {
    type_cont[i].addEventListener('click', ()=>{

    });  
}