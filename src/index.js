import './styles/main.scss'
import gsap from 'gsap'


window.addEventListener('load', init)

function init() {
    document.getElementById('app').classList.add('loaded')


    const images = [...document.querySelectorAll('img')]
    const $ = (el) => document.querySelector(el)
    const DURATION = 2


    const btn = $('.header__menu__icon')

    const slideshow = (duration) => {
        const imagesTotal = images.length;
        let i = 0
        images[i].classList.add('active')

        setInterval(() => {
            images[i].classList.remove('active')
            i++;

            if (i >= imagesTotal) i = 0;
            images[i].classList.add('active')
            
        }, duration * 1000)
    }

    slideshow(0.1)

    // Create timeline / reverse / restart
    const tl = new gsap.timeline({ delay: 1, defaultEase: 'expo.out', onReverseComplete:() => tl.restart({ delay: 1 }) })
    btn.addEventListener('click', (e) => tl.reverse())



    tl
    .from('.main__image', DURATION, { y: -100, ease: 'expo.out' })
    .from('.main__logo', DURATION, { autoAlpha: 0, ease: 'expo.out' }, '<.5')
    .from('.main__heading', DURATION, { x: 70, autoAlpha: 0, ease: 'expo.out' }, '<.5')
    .from('.header', DURATION, { y: -100, ease: 'expo.out' }, '<.5')
    .staggerFrom('.main__info > h2', DURATION, { x: -70, autoAlpha: 0, ease: 'expo.out' }, .1, '<.5')
    .staggerFrom('.h__line', DURATION, { scaleX: 0, ease: 'expo.out' }, .1, '<.3')
    .staggerFrom(['.footer__inner > h3', '.category__inner > p'], DURATION, { x: 70, autoAlpha: 0, ease: 'expo.out' }, .1, '<.5')
    .staggerFrom('.credits__detail', DURATION, { x: 70, autoAlpha: 0, ease: 'expo.out' }, .1, '<.5')

}