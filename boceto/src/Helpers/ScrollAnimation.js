import ScrollReveal from 'scrollreveal'

function ScrollAnimation(){
  const sr = ScrollReveal({
    distance: '30px',
    duration: 1600,
    reset: true
  });

  sr.reveal(`.home__data, .home__img,
              .how__data, .coverage__content,
              .footer__content`, {
    origin: 'top',
    interval: 200
  });

  sr.reveal(`.buy__img, .join__content`, {
    origin: 'left'
  })

  sr.reveal(`.buy__data, .join__img`, {
    origin: 'right'
  })
}
export default ScrollAnimation;