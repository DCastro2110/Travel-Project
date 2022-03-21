(function() {
    const checkbox = document.querySelector('.checkbox-dark-mode')

    document.addEventListener('click', (e) => {
        const el = e.target;
        const allOptions = document.querySelector('.slider-options-buy');
        const optionsBuy = document.querySelectorAll('.option-buy');
        const translateQuantify = ['0', 'calc(-100% / 3)', 'calc(-100% * 2 / 3)'];
        const darkModeDot = document.querySelector('.dark-mode-dot');

        for (i in optionsBuy) {
            if (el === optionsBuy[i] || el.parentElement === optionsBuy[i]) {
                allOptions.style.transform = `translateX(${translateQuantify[i]})`;
                optionsBuy.forEach(element => element.classList.remove('active'));
                optionsBuy[i].classList.add('active');
            }
        }

        if (el.classList.contains('dark-mode-div') || el === darkModeDot) {
            checker(darkModeDot)
        }
    })

    function checker(darkModeDot) {
        if (!checkbox.checked) {
            checkbox.checked = true
            darkModeDot.classList.add('dark-mode-on');
            darkMode('on')
            return
        } 
        checkbox.checked = false
        darkModeDot.classList.remove('dark-mode-on');
        darkMode('off')
    }

    function darkMode(value) {
        const html = document.querySelector("html")
        html.dataset.darkMode = value;
    }

}) ()
























/* document.querySelector('.hotel-button').addEventListener('click', () => {
    const margin = document.querySelector('.all-options')
    margin.style.marginLeft = '-880px'
}) */