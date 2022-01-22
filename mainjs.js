let bgimg = document.querySelector('#img1');
let dot1 = document.querySelector('#dot1').classList.add('currentImgDot');
let dot2 = document.querySelector('#dot2');
let dot3 = document.querySelector('#dot3');
let current = 0;

let link1 = 'https://media.discordapp.net/attachments/823303452036825129/934218424786235422/coffee-pure.jpg?width=2048&height=1280';

let link2 = 'https://media.discordapp.net/attachments/823303452036825129/934218450899976252/making.jpg?width=2048&height=1280';
let link3 = 'https://media.discordapp.net/attachments/823303452036825129/934218472127340584/finished.jpg?width=2048&height=1280';

let styleBg = window.getComputedStyle(bgimg, false);
let currentImg = styleBg.backgroundImage.slice(4, -1).replace(/"/g, "");
console.log(currentImg);

let pos = document.querySelectorAll('.dot');

for(let i=0; i < pos.length; i++) {
    pos[i].addEventListener('click', ()=>{
        current = pos[i];
    });
}

function slide() {
    if(current >= 3) {
        current = 0;
    } else if(current < 0) {
        current = 2;
    }
    document.querySelector('.currentImgDot').classList.remove('.currentImgDot');
    
}























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
//     bgimg.style.backgroundImage = `url(${link1})`;
//     dot1.style.color = 'white';
//     dot2.style.color = '#525252';
//     dot3.style.color = '#525252';
// })

// dot2.addEventListener('click', click2 = () => {
//     bgimg.style.backgroundImage = `url(${link2})`;
//     dot2.style.color = 'white';
//     dot1.style.color = '#525252';
//     dot3.style.color = '#525252';
// })

// dot3.addEventListener('click', click3 = () => {
//     bgimg.style.backgroundImage = `url(${link3})`;
//     dot3.style.color = 'white';
//     dot1.style.color = '#525252';
//     dot2.style.color = '#525252';
// })



