window.addEventListener('DOMContentLoaded', () => {

    const navControl = document.querySelector('.nav-control i')
    const navSecondary = document.querySelector('.nav-secondary')

    const toggleBurgerMenu = function () {
        navControl.classList.toggle('fa-bars')
        navControl.classList.toggle('fa-times')
        navSecondary.classList.toggle('hidden-mobile')
    }

    navControl.addEventListener('click', toggleBurgerMenu)
})