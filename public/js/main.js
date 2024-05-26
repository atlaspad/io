const body = document.body;
const header = body.querySelector('header');
const footer = body.querySelector('footer');

body
  .querySelectorAll('.dependents__slide.slider__item')
  .forEach((slide, index) => (slide.dataset.aosDelay = (50 * index).toString()));

// animations on scroll
AOS.init({
  once: true,
});

// motion path
const ethereumIllustration = body.querySelector('.hero__ethereum');
const reactIllustration = body.querySelector('.hero__react');

ethereumIllustration
  .querySelectorAll('.hero__ethereum .hero__ethereum-line')
  .forEach((item, index) => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes heroEthereumLine${index} {
        0% {
          opacity: 0.5;
          stroke-dashoffset: ${(item.getTotalLength() + 1).toFixed(2)};
        }
        100% {
          opacity: 1;
          stroke-dashoffset: 0;
        }
      }
    `;
    document.head.appendChild(style);
    item.style.setProperty('stroke-dasharray', (item.getTotalLength() + 1).toFixed(2).toString());
    item.style.setProperty('stroke-dashoffset', (item.getTotalLength() + 1).toFixed(2).toString());
    item.style.setProperty('animation', `heroEthereumLine${index} 1.5s ease forwards`);
    item.style.setProperty('animation-delay', `${(10 * index) / 100}s`);
  });

reactIllustration.querySelectorAll('.hero__react .hero__react-line').forEach((item, index) => {
  const style = document.createElement('style');
  style.innerHTML = `
      @keyframes heroReactLine${index} {
        0% {
          opacity: 0.5;
          stroke-dashoffset: ${(item.getTotalLength() + 1).toFixed(2)};
        }
        100% {
          opacity: 1;
          stroke-dashoffset: 0;
        }
      }
    `;
  document.head.appendChild(style);
  item.style.setProperty('stroke-dasharray', (item.getTotalLength() + 1).toFixed(2).toString());
  item.style.setProperty('stroke-dashoffset', (item.getTotalLength() + 1).toFixed(2).toString());
  item.style.setProperty('animation', `heroReactLine${index} 1.5s ease forwards`);
  item.style.setProperty('animation-delay', `${(20 * index) / 100}s`);
});

// testimonials pagination
const testimonials = body.querySelector('.testimonials');
const testimonialsList = testimonials.querySelector('.testimonials__list');
const testimonialsItems = testimonialsList.querySelectorAll('.testimonials__item');
const testimonialsPagination = testimonials.querySelector('.testimonials__paginations');

testimonialsItems.forEach((testimonial, index) => {
  testimonial.dataset.testimonialNumber = index;
  const testimonialPaginationButton = document.createElement('button');
  testimonialPaginationButton.classList.add('testimonials__pagination');
  testimonialPaginationButton.dataset.testimonialButtonNumber = index;
  testimonialsPagination.appendChild(testimonialPaginationButton);
});

const testimonialsObserverOptions = {
  threshold: 0.7,
};

const testimonialsPaginationButtons = testimonialsPagination.querySelectorAll(
  '.testimonials__pagination'
);

function testimonialsSlideEvents(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      if (entry.isIntersecting) {
        testimonialsPaginationButtons.forEach((button, index) => {
          button.classList.remove('testimonials__pagination--active');
          testimonialsPaginationButtons[entry.target.dataset.testimonialNumber].classList.add(
            'testimonials__pagination--active'
          );
        });
      }
    }
  });
}

const testimonialsScrollObserver = new IntersectionObserver(
  testimonialsSlideEvents,
  testimonialsObserverOptions
);
testimonialsItems.forEach((testimonial) => testimonialsScrollObserver.observe(testimonial));

testimonialsPagination.addEventListener('click', (event) => {
  if (event.target.classList.contains('testimonials__pagination')) {
    testimonialsList
      .querySelector(`[data-testimonial-number="${event.target.dataset.testimonialButtonNumber}"`)
      .scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }
});

// handle visual height unit

const handleVisualHeightUnit = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

handleVisualHeightUnit();

// resize event listener

let windowPreviousWidth = window.innerWidth;

resizeWindowActions = () => {
  handleVisualHeightUnit();
  if (windowPreviousWidth !== window.innerWidth) {
    windowPreviousWidth = window.innerWidth;
  }
};

window.addEventListener('resize', resizeWindowActions);
