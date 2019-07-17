window.addEventListener('DOMContentLoaded', () => {

    // Navbar
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

    // Skills

    const skillsDiv = document.querySelector('#skills div')
    
    const skills = [
        { label: 'React', original: 'react-original', wordmark: 'react-original-wordmark' },
        { label: 'JavaScript', original: 'javascript-plain', wordmark: 'javascript-plain' },
        { label: 'Node.js', original: 'nodejs-plain', wordmark: 'nodejs-plain-wordmark' },
        { label: 'Node.js', original: 'express-original', wordmark: 'express-original-wordmark' },
        { label: 'HTML 5', original: 'html5-plain', wordmark: 'html5-plain-wordmark' },
        { label: 'CSS 3', original: 'css3-plain', wordmark: 'css3-plain-wordmark' },
        { label: 'SASS', original: 'sass-original', wordmark: 'sass-original' },
        { label: 'Bootstrap', original: 'bootstrap-plain', wordmark: 'bootstrap-plain-wordmark' },
        { label: 'jQuery', original: 'jquery-plain', wordmark: 'jquery-plain-wordmark' },
        { label: 'mongoDB', original: 'mongodb-plain', wordmark: 'mongodb-plain-wordmark' },
        { label: 'PostgreSQL', original: 'postgresql-plain', wordmark: 'postgresql-plain-wordmark' },
        { label: 'Babel', original: 'babel-plain', wordmark: 'babel-plain' },
        { label: 'webpack', original: 'webpack-plain', wordmark: 'webpack-plain-wordmark' },
        { label: 'Python', original: 'python-plain', wordmark: 'python-plain-wordmark' },
        { label: 'Mocha', original: 'mocha-plain', wordmark: 'mocha-plain' },
        { label: 'Git', original: 'git-plain', wordmark: 'git-plain-wordmark' },
        { label: 'GitHub', original: 'github-plain', wordmark: 'github-plain-wordmark' },
        { label: 'Atom', original: 'atom-original', wordmark: 'atom-original-wordmark' },
        { label: 'Visual Studio Code', original: 'visualstudio-plain', wordmark: 'visualstudio-plain-wordmark' },
        { label: 'Heroku', original: 'heroku-original', wordmark: 'heroku-original-wordmark' },
        { label: 'Trello', original: 'trello-plain', wordmark: 'trello-plain-wordmark' }
    ]


    const skillsIcons = []

    skills.forEach(skill => {
        const div = document.createElement('div')        
        div.setAttribute('aria-label', skill.label.toLowerCase())
        const icon = document.createElement('i')
        icon.classList.add(`devicon-${skill.original}`)
        // icon.setAttribute('aria-label', skill.label.toLowerCase())
        // icon.textContent = skill.label
        div.appendChild(icon)
        skillsDiv.appendChild(div)
        skillsIcons.push(icon)
    })

    
    skillsIcons.forEach((icon, i) => {
        console.log(icon)
        console.log(icon.classList[0])
        console.log('index', i)
        icon.addEventListener('mouseover', () => {
            console.log('mouseover', icon)
            icon.classList.remove(`devicon-${skills[i].original}`)
            icon.style.color = '#CCCCCC'
            icon.classList.add(`devicon-${skills[i].wordmark}`)
        })
        icon.addEventListener('mouseout', () => {
            console.log('mouseout', icon)
            icon.classList.remove(`devicon-${skills[i].wordmark}`)
            icon.style.color = '#F7F0F0'
            icon.classList.add(`devicon-${skills[i].original}`)
        })
    })

    navControl.addEventListener('click', toggleBurgerMenu)
})