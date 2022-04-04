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


function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    console.log(linksInternos)

    function scrollToSection(e) {
        e.preventDefault()

        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        console.log(href)
        // funcionando apenas no chrome e firefox
        section.scrollIntoView({
            behavior: 'smooth',
            block:'start'
        })

        // forma alternativa de scroll
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}
initScrollSuave()



function initAnimationScroll() {

    const sections = document.querySelectorAll('.js-scroll')
    const windowMetade = window.innerHeight * 0.65

    // function animation
    function animationScroll () {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top
            const isSectionVisible = (sectionTop - windowMetade) < 0
            if(isSectionVisible) {
                section.classList.add('ativo')
            }
        })
    }

    animationScroll()

    // adicionado no window
    window.addEventListener('scroll', animationScroll)

}
initAnimationScroll()