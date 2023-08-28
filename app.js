const texts = document.querySelectorAll('.text-content h1');
const spaces = document.querySelectorAll('h1 span');
const mainImg = document.querySelector('.section-2');
const floatingImg = document.querySelector('.floating-img')
// const tl = gsap.timeline();
console.log(texts, spaces);
console.log(mainImg);

gsap.fromTo(texts, {width: '100%', delay: 2, backgroundColor: '#f4f4f4'},
{width: 0, duration: 2, ease: 'power2.inOut', stagger: 0.2,
onComplete: () => {
    gsap.to(texts, {width: '100%', backgroundColor: 'transparent',duration: 2, ease: 'power2.inOut', stagger: 0.2})
    gsap.to(spaces, {backgroundColor: '#f4f4f4'})

}});

gsap.to(mainImg,{width: '100%', duration: 3, ease: Power2.easeOut})
gsap.to(floatingImg,{width: '24em', duration: 2, delay: 1.5, ease: Power2.easeOut})