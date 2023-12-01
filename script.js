// Creating a LocomotiveScroll instance for smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// Animate navigation links using gsap
gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})


// Use Shery.js to animate text in the headings
Shery.textAnimate("#headings h1" , {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
   });


// Animate elements with gsap in the hero section
gsap.from(".anime1",{
    y: 50,
    stagger: .3,
    opacity: 0,
    ease: Expo,
    duration: 1
})

// Use Shery.js to apply image effects to specific elements
Shery.imageEffect("#imagetext img", {
    style: 3,
    config: {"uFrequencyX":{"value":11.57,"range":[0,100]},"uFrequencyY":{"value":4.96,"range":[0,100]},"uFrequencyZ":{"value":45.45,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.7},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500135824627999},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.56,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

Shery.imageEffect('.fimage img', {
    style: 5,
    config: {"a":{"value":1.96,"range":[0,30]},"b":{"value":-0.69,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6665974437179937},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

// Additional gsap animations for specific elements
gsap.from('#imagetext img', {
    y: "80",
    opacity: 0,
    duration: 2,
    ease: Expo,
});

gsap.from('#simagewrap img', {
    y: "80",
    opacity: 0,
    duration: 2,
    ease: Expo,
});

// Use Shery.js to apply image effects to '#bnimg'
Shery.imageEffect('#bnimg', {
    style: 5,
    config: {"a":{"value":0.74,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1399278253207927},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.74,"range":[1,15]},"durationOut":{"value":0.55,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.2,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.66,"range":[0,10]},"metaball":{"value":0.12,"range":[0,2]},"discard_threshold":{"value":0.45,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.4,"range":[0,2]},"noise_scale":{"value":10.74,"range":[0,100]}},
    gooey: true,
});

// Event listeners to show/hide a video element on mouseover/mouseleave
document.querySelector('#future button')
.addEventListener('mouseover', function(){
    gsap.to('#future video',{
        opacity: 1,
        duration: 1,
        ease: Power4
    })
})


document.querySelector('#future button')
.addEventListener('mouseleave', function(){
    gsap.to('#future video',{
        opacity: 0,
        duration: 1,
        ease: Power4
    })
})