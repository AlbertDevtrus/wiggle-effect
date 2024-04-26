const button = document.querySelector('.button');
const span = document.querySelector('span');

const xToButton = gsap.quickTo(button, 'x', {duration: 1, ease: 'elastic.out(1, 0.5)'});
const yToButton = gsap.quickTo(button, 'y', {duration: 1, ease: 'elastic.out(1, 0.5)'});

const xToSpan = gsap.quickTo(span, 'x', {duration: 1, ease: 'elastic.out(1, 0.5)'});
const yToSpan = gsap.quickTo(span, 'y', {duration: 1, ease: 'elastic.out(1, 0.5)'});

button.addEventListener('mousemove', mouseMove);
button.addEventListener('mouseleave', mouseLeave);

function mouseMove(e) {
    const { clientX, clientY } = e;

    const { left, top, width, height } = button.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    xToButton(x);
    yToButton(y);

    xToSpan(x * 0.8);
    yToSpan(y * 0.8);
}

function mouseLeave(e) {
    xToButton(0);
    yToButton(0);

    xToSpan(0);
    yToSpan(0);
}