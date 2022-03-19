(function() {
    const checkbox = document.querySelector('.checkbox-dark-mode')

    document.addEventListener('click', (e) => {
        const el = e.target;
        const allOptions = document.querySelector('.slider-options-buy');
        const optionsBuy = document.querySelectorAll('.option-buy');
        const translateQuantify = ['0', 'calc(-100% / 3)', 'calc(-100% * 2 / 3)']

        const darkModeDot = document.querySelector('.dark-mode-dot')

        console.log(el)

        for (i in optionsBuy) {
            if (el === optionsBuy[i] || el.parentElement === optionsBuy[i]) {
                allOptions.style.transform = `translateX(${translateQuantify[i]})`;
                optionsBuy.forEach(element => element.classList.remove('active'));
                el.classList.add('active');
            }
        }

        if (el.classList.contains('dark-mode-div') || el === darkModeDot) {
            checker()
            darkModeBtn(darkModeDot)
        }
    })
   
    function darkModeBtn(darkModeDot) {
        if (!checkbox.checked) {
            darkModeDot.style.transform = '';
            darkModeDot.style.backgroundColor = '#fff'
            return
        }
        darkModeDot.style.transform = 'translateX(20px)';
        darkModeDot.style.backgroundColor = '#000052'
    }

    function checker() {
        if (checkbox.checked) {
            checkbox.checked = false
            return
        } 
        checkbox.checked = true;
    }

}) ()
























/* document.querySelector('.hotel-button').addEventListener('click', () => {
    const margin = document.querySelector('.all-options')
    margin.style.marginLeft = '-880px'
}) */