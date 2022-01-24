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
    document.querySelector('.currentImgDot').classList.remove('.currentImgDot');
    bgImg.style.backgroundImage = `url(${Object.values(link)[current]})`;
    console.log(document.querySelector('.currentImgDot'));
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























// var initt = function condition() {
//     if(bi == link1) {
//         dot1.style.color = 'white';
//         console.log('if1 ' + link1);
//     } else if (bi == link2) {
//         dot2.style.color = 'white';
//         console.log('if2 ' + link2);
//     } else {
//         dot3.style.color = 'white';
//         console.log('if3 ' + link3);
//     }
// }();

// dot1.addEventListener('click', click1 = () => {
//     bgImg.style.backgroundImage = `url(${link1})`;
//     dot1.style.color = 'white';
//     dot2.style.color = '#525252';
//     dot3.style.color = '#525252';
// })

// dot2.addEventListener('click', click2 = () => {
//     bgImg.style.backgroundImage = `url(${link2})`;
//     dot2.style.color = 'white';
//     dot1.style.color = '#525252';
//     dot3.style.color = '#525252';
// })

// dot3.addEventListener('click', click3 = () => {
//     bgImg.style.backgroundImage = `url(${link3})`;
//     dot3.style.color = 'white';
//     dot1.style.color = '#525252';
//     dot2.style.color = '#525252';
// })



