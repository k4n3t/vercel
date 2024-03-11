const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {

    const {clientHeight} = document.documentElement;

    const topHero = hero.getBoundingClientRect().top;

    if(topHero.toFixed() < clientHeight * 0.8){
        hero.classList.add('heroHidden')
    } else {
      if (hero.classList.contains('heroHidden')) hero.classList.remove('heroHidden')
    }
    
})