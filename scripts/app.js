window.addEventListener('DOMContentLoaded', () => {

    const navControl = document.querySelector('.nav-control i')
    const navPrimary = document.querySelector('.nav-primary')
    const navSecondary = document.querySelector('.nav-secondary')


    let navBarOpen = false

    const openBurgerMenu = () => {
        navBarOpen = true
        navControl.classList.remove('fa-bars')
        navControl.classList.add('fa-times')
        navPrimary.style.marginBottom = '0'
        navSecondary.classList.remove('hidden-mobile')
    }

    const closeBurgerMenu = () => {
        navBarOpen = false
        navControl.classList.remove('fa-times')
        navControl.classList.add('fa-bars')
        navPrimary.style.marginBottom = '1em'
        navSecondary.classList.add('hidden-mobile')
    }

    const toggleBurgerMenu = () => {
        if (!navBarOpen) openBurgerMenu()
        else closeBurgerMenu()
    }

    navControl.addEventListener('click', toggleBurgerMenu)
})