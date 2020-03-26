// Change header styles on scroll
const header = document.querySelector('header');
const introInner = document.querySelector('.intro-inner h3');

const introInnerOptions = {
  rootMargin: '-100px 0px 0px 0px'
};

const introInnerObserver = new IntersectionObserver(function(entries, introInnerOptions) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  })
}, introInnerOptions);

introInnerObserver.observe(introInner);


// Set dynamic copyright date
const copyright = document.querySelector('.date');
copyright.innerText = new Date().getFullYear();
