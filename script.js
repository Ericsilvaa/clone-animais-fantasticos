// animais fantasticos - scroll e txt
function initActiveBar() {
const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo') //adicionei a classe no 1° item

    function activeBar(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo')
        })
        tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeBar(index)
        })
    })
}
}
initActiveBar();



// FAQ

function initAccordion() {
    const faqLista = document.querySelectorAll('.js-accordion dt')

    if(faqLista.length) {
        function activeLine() {
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }

        faqLista.forEach((item) => {
            item.addEventListener('click', activeLine)
        })
    }
}
initAccordion();
function name(params) {
  
}