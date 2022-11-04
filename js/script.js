// "using strict";

// window.onload = () => {
//     var sunElement = document.getElementById('sun');
//     var satellitesElements = document.getElementsByClassName('satellite');

//     function step() {
//         requestAnimationFrame(step);

//             // x = x0 + R cos (t*a)
//             // y = y0 + R sin (t*a)
//         //animation step
//         let x=0, y=0, x0=0, y0=0, x1=0, y1=0;
//         let radius=0, angle=0, time=0;
//         let previous;

//         x = sunElement.offsetLeft;
//         y = sunElement.offsetTop;

//         x0 = satellitesElements[0].offsetLeft;
//         y0 = satellitesElements[0].offsetTop;

//         previous = parseInt(satellitesElements[0].style.left);

//         satellitesElements[0].style.left = previous + 30 + 'px';

//     }

//     step(); //animation start;

//     // let observerFiresCount = 0;
//     // console.log(`Init value: ${observerFiresCount}`);

//     // let observer = new IntersectionObserver(() => {
//     //     console.log(`Third value: ${observerFiresCount}`);
//     //     if (observerFiresCount > 1) {
//     //         console.log('TUX appeared');
//     //         toggleAnimation();
//     //     }
//     //     observerFiresCount++;
//     // }, {threshold: 1.0});

//     // observer.observe(sunElement);
//     // observerFiresCount++; 
//     // console.log(`After mount value: ${observerFiresCount}`);


    
//     // function toggleAnimation() {

//     //     observer.unobserve(sunElement);

//     //     for (var i = 0; i < satellitesElements.length; i++) {
//     //         satellitesElements[i].classList.add("satellite_animated");     
//     //     }

//     //     console.log("Finished rolling");
//     // }

//     // x = x0 + R cos (t*a)
//     // y = y0 + R sin (t*a)
// };

