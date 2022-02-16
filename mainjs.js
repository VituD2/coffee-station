// v3.3
// Show more-content working 
// Animation more-content working
// Back-to-top script working
// Need to make a script that keep type_cont background-position equals to the hover (background color will be static until i close the more-content window) !!!POSTPONE THIS!!!

//Still need to do a slide of content (.specialists)
//Find a new way to slide content

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

//CHECK SCROLL & CLICK TO GO TO TOP
let arrowUp = document.querySelector('.arrowUp');


window.onscroll = ()=>{
    function scrollFunc() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            arrowUp.classList.add('arrowUp-active');
        } else {
            arrowUp.classList.remove('arrowUp-active');
        }
    }
    scrollFunc();
}

arrowUp.addEventListener('click', ()=>{
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
})

// TYPE CONTAINER HOVER
let type_containers = document.querySelectorAll('#type-cont');

for (let i = 0; i < type_containers.length; i++) {
    type_containers[i].addEventListener('mouseenter', ()=>{
        type_containers[i].classList.add('type-cont-hov');
    });
}

// TYPES OF COFFEE READ MORE SCRIPT

// let more_cont = document.querySelector('.type1 .more-content');
// console.log(more_cont);


for (let i=1; i < 6; i++) {
    current_type = i;
    let type_cont = document.querySelector('.type'+[current_type]);
    type_cont.addEventListener('click', ()=>{
        // console.log(type_cont.childNodes);
        let more_cont = type_cont.childNodes[3];
        console.log(more_cont);
        more_cont.classList.toggle('more-content-active');
    });
}

//SPECIALISTS SLIDE 
// let georgia_info = document.querySelector('.special0');
// let daniel_info = document.querySelector('special1');

let spec_info = document.querySelectorAll('.spec');
let previous = document.querySelector('#previous');
let next = document.querySelector('#next');
let spec_current = 0;

for (let i=0; i< spec_info.length; i++) {
    spec_current = spec_info[i].id;
} 

previous.addEventListener('click', ()=>{
    spec_current--
    spec_slide();
    console.log('previous', spec_current);
});

next.addEventListener('click', ()=>{
    spec_current++
    spec_slide();
    console.log('next', spec_current);
});


function spec_slide() {
    if(spec_current >= spec_info.length) {
        spec_current = 0;
    } else if(spec_current < 0) {
        spec_current = spec_info.length - 1;
    }
    document.querySelector('#'+[spec_current].classList.add('spec-active'));
}

spec_slide();


