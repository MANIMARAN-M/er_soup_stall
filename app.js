const home_content = document.querySelector('.home-content');
const home_image = document.querySelector('.home');
const image = document.querySelector('.re-img');
const google_form = document.querySelector('.google-form');

const t1 = new TimelineMax();

t1.fromTo(home_content,
    1.5,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0 })
t1.fromTo(home_image,
    1.5,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0 },
    "-=1.5")
t1.fromTo(image,
    .5,
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0 })
t1.fromTo(google_form,
    .4,
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0 },
);