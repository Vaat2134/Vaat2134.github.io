
gsap.registerPlugin(ScrollTrigger);

// Animación de entrada
gsap.from(".hero-content > *", {
    opacity: 0,
    y: 35,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Aparición de secciones al desplazarse
gsap.utils.toArray(".reveal").forEach((element) => {

    gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",

        scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none none"
        }
    });

});

// Animación de tarjetas
gsap.from(".project-card", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: "back.out(1.5)",

    scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 85%"
    }
});
