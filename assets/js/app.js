(function() {
    document.addEventListener('click', (e) => {
        const el = e.target;
        const allOptions = document.querySelector('.slider-options-buy');
        const optionsBuy = document.querySelectorAll('.option-buy');
        const translateQuantify = ['0', 'calc(-100% / 3)', 'calc(-100% * 2 / 3)']

        for (i in optionsBuy) {
            if (el === optionsBuy[i] || el.parentElement === optionsBuy[i]) {
                allOptions.style.transform = `translateX(${translateQuantify[i]})`;
                optionsBuy.forEach(element => element.classList.remove('active'));
                el.classList.add('active');
            }
        }
    })
}) ()
























/* document.querySelector('.hotel-button').addEventListener('click', () => {
    const margin = document.querySelector('.all-options')
    margin.style.marginLeft = '-880px'
}) */