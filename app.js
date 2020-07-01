// new fullpage('#main-page', {
//     autoScrolling: true
// });


const home_content = document.querySelector('.home-content');
const home_image = document.querySelector('.home');
const sales_content = document.querySelector('.sales-content');

const t1 = new TimelineMax();

t1.fromTo(home_content,
    1.5,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0 })
t1.fromTo(home_image,
    1.5,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0 },
    "-=1.5")
t1.fromTo(sales_content,
    1.5,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0 },
    "-=1.5");