const mask = document.querySelector(".hero_secondary");
const heading = document.querySelector(".heading");
let timer;
    
window.addEventListener("mousemove", function (e) {
    const xP = e.clientX;
    const yP = e.clientY;

    const x = Math.round((xP / window.innerWidth) * 100)
    const y = Math.round((yP / window.innerHeight) * 100)

    clearTimeout(timer);
    timer = setTimeout(function() {

        if( e.target !== heading) {
        gsap.to(mask, {
        '--r': `5%`,
        duration: 1,
        ease: 'sine.inOut',
        }) 
    }}, 300);

    gsap.to(mask, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
        })
    
    if(e.target == heading ) {
        gsap.to(mask, {
        '--r': `20%`,
        duration: 1,
        ease: 'power1.inOut'
        })
    } else {
            gsap.to(mask, {
        '--r': `10%`,
        duration: 1,
        ease: 'power1.out'
        }) 
        }

})

