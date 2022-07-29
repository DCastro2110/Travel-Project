(function() {
    const checkbox = document.querySelector('.checkbox-dark-mode')
    const darkModeDot = document.querySelector('.dark-mode-dot');

    recoverState()

    document.addEventListener('click', (e) => {
        const el = e.target;
        const allOptions = document.querySelector('.slider-options-buy');
        const optionsBuy = document.querySelectorAll('.option-buy');
        const translateQuantify = ['0', 'calc(-100% / 3)', 'calc(-100% * 2 / 3)'];
    
        for (i in optionsBuy) {
            if (el === optionsBuy[i] || el.parentElement === optionsBuy[i]) {
                allOptions.style.transform = `translateX(${translateQuantify[i]})`;
                optionsBuy.forEach(element => element.classList.remove('active'));
                optionsBuy[i].classList.add('active');
            }
        }

        if (el.classList.contains('dark-mode-div') || el === darkModeDot) {
            checker()
            saveState()
        }
    })

    function checker() {
        if (!checkbox.checked) {
            checkbox.checked = true
            darkModeDot.classList.add('dark-mode-on');
            darkMode('on')
            return
        } 
        checkbox.checked = false
        darkModeDot.classList.remove('dark-mode-on');
        darkMode('off');
    }

    function darkMode(value) {
        const html = document.querySelector("html")
        html.dataset.darkMode = value;
    }

    function saveState() {
        const darkModeState = checkbox.checked;
        localStorage.setItem('dark-mode-state', darkModeState)
    }

    function recoverState() {
        let darkModeState = localStorage.getItem('dark-mode-state')
        checkbox.checked = Boolean(darkModeState);
        
        if (checkbox.checked) {
            darkModeDot.classList.add('dark-mode-on');
            darkMode('on')
            return
        } 
        darkModeDot.classList.remove('dark-mode-on');
        darkMode('off')
    }
}) ()
























/* document.querySelector('.hotel-button').addEventListener('click', () => {
    const margin = document.querySelector('.all-options')
    margin.style.marginLeft = '-880px'
}) */
