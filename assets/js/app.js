(function() {
    document.addEventListener('click', (e) => {
        const el = e.target;
        const allOptions = document.querySelector('.all-options');
        const optionsBuy = document.querySelectorAll('.option-buy');
        const margins = ['0', '-880px', '-1760px']

        for (i in optionsBuy) {
            if (el === optionsBuy[i] || el.parentElement === optionsBuy[i]) {
                allOptions.style.marginLeft = margins[i];
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