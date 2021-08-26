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

  const toggleBurgerMenu = (e) => {
    e.preventDefault()
    if (!navBarOpen) openBurgerMenu()
    else closeBurgerMenu()
  }

  navControl.addEventListener('touchstart', toggleBurgerMenu)
  navControl.addEventListener('click', toggleBurgerMenu)

  // Skills

  const skillsDiv = document.querySelector('#skills div')
    
  const skills = [
    { level: 2, label: 'React', original: 'react-original', wordmark: 'react-original-wordmark' },
    { level: 2, label: 'JavaScript', original: 'javascript-plain', wordmark: 'javascript-plain' },
    { level: 2, label: 'TypeScript', original: 'typescript-plain', wordmark: 'typescript-plain' },
    { level: 2, label: 'HTML 5', original: 'html5-plain', wordmark: 'html5-plain-wordmark' },
    { level: 2, label: 'CSS 3', original: 'css3-plain', wordmark: 'css3-plain-wordmark' },
    { level: 2, label: 'SASS', original: 'sass-original', wordmark: 'sass-original' },
    { level: 0, label: 'Node.js', original: 'nodejs-plain', wordmark: 'nodejs-plain-wordmark' },
    { level: 0, label: 'Express', original: 'express-original', wordmark: 'express-original-wordmark' },
    { level: 0, label: 'Python', original: 'python-plain', wordmark: 'python-plain-wordmark' },

    // { level: 2, label: 'Bootstrap', original: 'bootstrap-plain', wordmark: 'bootstrap-plain-wordmark' },
    // { level: 0, label: 'jQuery', original: 'jquery-plain', wordmark: 'jquery-plain-wordmark' },
    // { level: 1, label: 'mongoDB', original: 'mongodb-plain', wordmark: 'mongodb-plain-wordmark' },
    // { level: 1, label: 'PostgreSQL', original: 'postgresql-plain', wordmark: 'postgresql-plain-wordmark' },
    // { level: 1, label: 'Babel', original: 'babel-plain', wordmark: 'babel-plain' },
    // { level: 1, label: 'webpack', original: 'webpack-plain', wordmark: 'webpack-plain-wordmark' },
    // { level: 0, label: 'Mocha', original: 'mocha-plain', wordmark: 'mocha-plain' },
    { level: 0, label: 'Git', original: 'git-plain', wordmark: 'git-plain-wordmark' },
    { level: 2, label: 'GitHub', original: 'github-plain', wordmark: 'github-plain-wordmark' },
    // { level: 0, label: 'JetBrains', original: 'jetbrains-plain', wordmark: 'jetbrains-plain' },
    // { level: 0, label: 'Webstorm', original: 'webstorm-plain', wordmark: 'webstorm-plain-wordmark' },
    // { level: 0, label: 'PyCharm', original: 'pycharm-plain', wordmark: 'pycharm-plain-wordmark' },
    // { level: 0, label: 'Atom', original: 'atom-original', wordmark: 'atom-original-wordmark' },
    // { level: 0, label: 'Visual Studio Code', original: 'visualstudio-plain', wordmark: 'visualstudio-plain-wordmark' },
    // { label: 'Heroku', original: 'heroku-original', wordmark: 'heroku-original-wordmark' },
    // { label: 'Trello', original: 'trello-plain', wordmark: 'trello-plain-wordmark' }
    
    
    // { level: 1, label: 'Redis', original: 'redis-plain', wordmark: 'redis-plain-wordmark' },
    
    
    
    { level: 1, label: 'Google Cloud Platform', original: 'google-plain', wordmark: 'google-plain-wordmark' },
    { level: 0, label: 'AWS', original: 'amazonwebservices-original', wordmark: 'amazonwebservices-plain-wordmark' },
    // { level: 0, label: 'Docker', original: 'docker-plain', wordmark: 'docker-plain-wordmark' },
    // { level: 0, label: 'NGINX', original: 'nginx-plain', wordmark: 'nginx-plain' },
    
    
    { level: 0, label: 'NPM', original: 'npm-plain-wordmark', wordmark: 'npm-plain-wordmark' },
    { level: 0, label: 'yarn', original: 'yarn-plain', wordmark: 'yarn-plain-wordmark' },
    
    
    
    // { level: 0, label: 'Vue', original: 'vuejs-plain', wordmark: 'vuejs-plain-wordmark' },
    // { level: 0, label: 'WordPress', original: 'wordpress-plain', wordmark: 'wordpress-plain-wordmark' },
    // { level: 0, label: 'Go', original: 'go-plain', wordmark: 'go-plain' },
    
    
    // { level: 0, label: 'Gimp', original: 'gimp-plain', wordmark: 'gimp-plain' },
    // { level: 0, label: 'Adobe Illustrator', original: 'illustrator-plain', wordmark: 'illustrator-plain' },
    // { level: 0, label: 'Adobe Photoshop', original: 'photoshop-plain', wordmark: 'photoshop-plain' },

  ]


  const skillsIconsArray = []

  skills.forEach(skill => {
    const div = document.createElement('div')        
    div.setAttribute('aria-label', skill.label)
    const icon = document.createElement('i')
    icon.classList.add(`devicon-${skill.original}`)
    div.appendChild(icon)
    skillsDiv.appendChild(div)
    skillsIconsArray.push(icon)
  })

    
  skillsIconsArray.forEach((icon, i) => {
    icon.addEventListener('mouseover', () => {
      icon.classList.remove(`devicon-${skills[i].original}`)
      icon.style.color = '#CCCCCC'
      icon.classList.add(`devicon-${skills[i].wordmark}`)
    })
    icon.addEventListener('mouseout', () => {
      setTimeout
      icon.classList.remove(`devicon-${skills[i].wordmark}`)
      icon.style.color = '#F7F0F0'
      icon.classList.add(`devicon-${skills[i].original}`)
    })
  })


  // Projects

  const projects = [
    { 
      id: 1,
      title: 'WDI Project 1 - Pac-Man',
      titleShort: 'Pac-Man',
      description: 'A grid-based JavaScript game',
      brief: 'Build a grid-based Pac-Man game in JavaScript where the user should be able to clear a level and the score should be counted and displayed.',
      solution: 'Using a simple HTML structure, CSS and jQuery, I built a functional Pac-Man game.',
      timeframe: 6,
      teamSize: 1,
      link: './wdi-project-1',
      github: 'https://github.com/wesley-hall/wdi-project-1',
      imageDesktop: '',
      imageMobile: ''
    },
    { 
      id: 2,
      title: 'WDI Project 2 - Get Out In London',
      titleShort: 'Get Out In London',
      description: 'An application to view events information in London',
      brief: 'Build a front end React application (with at least one classical and one functional component) that consumes a public API.',
      solution: 'We used React to create an application that was styled/structured using bulma and axios, to request events information for London from the Skiddle API.',
      timeframe: 2,
      teamSize: 2,
      link: 'https://get-out-in-london.herokuapp.com',
      github: 'https://github.com/wesley-hall/wdi-project-2',
      imageDesktop: '',
      imageMobile: ''
    },
    { 
      id: 3,
      title: 'WDI Project 3 - Booker',
      titleShort: 'Booker',
      description: 'An application to create a book-sharing community where users are both borrowers and lenders',
      brief: 'Build a full stack MERN application with multiple relationships between models that have CRUD functionality. The app should consume one public API and have automated testing for at least one back end RESTful resource.',
      solution: 'Our application was based around four interconnected Mongoose models - user, genre, book (including ratings and reviews) and loan. My main focus on the front end was the loans page, where I worked on filtering the loans coming in and out to display this information to users and give them the functionality to update the loans. I also worked on the map and pointers on the libraries page, and the library filtering search functionality on the books page.',
      timeframe: 9,
      teamSize: 4,
      link: 'https://ga-booker.herokuapp.com',
      github: 'https://github.com/wesley-hall/wdi-project-3',
      imageDesktop: '',
      imageMobile: ''
    },
    { 
      id: 4,
      title: 'WDI Project 4 - JoinedUp',
      titleShort: 'JoinedUp',
      description: 'A professional networking and social application where users can create a personal profile, ‘join up’ with other users, as well as create, view and interact with social and job posts',
      brief: 'Build a full stack application with React and JavaScript on the front end, and Python, Flask and an SQL database (PostgreSQL) on the back end.',
      solution: 'We started by building our SQL database table models and establishing relationships between them. I focused on the job post, social post, industry, likes and comments at this stage before we came together to review what we had done and work on the back end functionality for friends/connections. When it came to starting on the front end, we switched sides and my initial focus was on the profile page, including experience and education, as well as the discover page. We choose Bootstrap and React Bootstrap as our front end framework so that we could focus more on JavaScript functionality.',
      timeframe: 7,
      teamSize: 2,
      link: 'https://joined-up.herokuapp.com',
      github: 'https://github.com/SeongJaeMoon92/final-project',
      imageDesktop: '',
      imageMobile: ''
    }
  ]

  const projectDivsArray = []

    

  const projectsNav = document.querySelector('#projects-nav')
  const projectsContent = document.querySelector('#projects-content')

  projects.forEach(project => {
    const projectAnchorLink = document.createElement('a')
    projectAnchorLink.href = `#project-${project.id}`
    projectAnchorLink.target = '_self'
    projectAnchorLink.textContent = project.titleShort
    console.log(projectAnchorLink)
    projectsNav.appendChild(projectAnchorLink)

    const projectDiv = document.createElement('div')
    projectDiv.id = `project-${project.id}`
    projectDiv.setAttribute('aria-label', project.title)
    projectDiv.classList.add('project')

    const projectTitle = document.createElement('h4')
    projectTitle.textContent = project.title
    projectDiv.appendChild(projectTitle)

    const projectContent = document.createElement('div')

    const projectDescription = document.createElement('p')
    projectDescription.textContent = `Description: ${project.description}`
    projectContent.appendChild(projectDescription)

    const projectBrief = document.createElement('p')
    projectBrief.textContent = `Brief: ${project.brief}`
    projectContent.appendChild(projectBrief)

    projectDiv.appendChild(projectContent)
        

    projectsContent.appendChild(projectDiv)
    projectDivsArray.push(projectDiv)
  })

  // const currentProject = 1

  // const projectsCarousel = () => {

  // }


  // Experience

  const workDiv = document.querySelector('#experience #work')

  const educationDiv = document.querySelector('#experience #education')

  const allExperience = [
    {
      current: true,
      dev: true,
      title: 'Software Developer (Front-end)',
      company: 'Mindera',
      location: {
        city: 'London (Remote)',
        country: 'UK'
      },
      dates: {
        start: '2020-10-19',
        end: null,
      },
      description: '',
      url: 'https://www.mindera.com',
      image: './images/experience/mindera.png'
    },
    {
      current: true,
      dev: true,
      title: 'Software Developer (Full Stack)',
      company: 'StreamAMP / Triple13',
      location: {
        city: 'London',
        country: 'UK',
      },
      dates: {
        start: '2019-08-12',
        end: null,
      },
      description: '',
      url: 'https://www.triple13.io',
      image: './images/experience/triple13.png',
    },
    {
      current: false,
      dev: true,
      title: 'Software Engineering Immersive Teaching Assistant',
      company: 'General Assembly',
      location: {
        city: 'London',
        country: 'UK',
      },
      dates: {
        start: '2019-05-07',
        end: '2019-08-02',
      },
      description: '',
      url: 'https://generalassemb.ly',
      image: './images/experience/general-assembly.png',
    },
    {
      current: false,
      dev: false,
      title: 'Marketing Executive',
      company: 'SSL247',
      location: {
        city: 'London',
        country: 'UK',
      },
      dates: {
        start: '2017-06-05',
        end: '2018-12-21',
      },
      description: '',
      url: 'https://www.ssl247.co.uk',
      image: './images/experience/ssl247.png',
    },
    {
      current: false,
      dev: false,
      title: 'Marketing Assistant',
      company: 'First Point Group',
      location: {
        city: 'London',
        country: 'UK',
      },
      dates: {
        start: '2017-05-31',
        end: '2016-11-28',
      },
      description: '',
      url: 'https://www.firstpointgroup.com',
      image: './images/experience/fpg.png',
    }
  ]

  const experienceDivs = []


  const currentExperience = allExperience.filter(experience => experience.current === true)
  const previousExperience = allExperience.filter(experience => experience.current === false)

  console.log(currentExperience)
  console.log(previousExperience)

  currentExperience.forEach(experience => {
    const experienceDiv = document.createElement('div')
    
    const experienceTitle = document.createElement('h4')
    experienceTitle.textContent = experience.title
    experienceDiv.appendChild(experienceTitle)

    const experienceCompany = document.createElement('h5')
    experienceCompany.textContent = experience.company
    experienceDiv.appendChild(experienceCompany)

    const experienceContent = document.createElement('div')

    workDiv.appendChild(experienceDiv)

    // const projectDescription = document.createElement('p')
    // projectDescription.textContent = `Description: ${project.description}`
    // projectContent.appendChild(projectDescription)

    // const projectBrief = document.createElement('p')
    // projectBrief.textContent = `Brief: ${project.brief}`
    // projectContent.appendChild(projectBrief)

    // projectDiv.appendChild(projectContent)
        

    // projectsContent.appendChild(projectDiv)
  })
  

  const allEducation = [
    {
      course: 'Web Development Immersive',
      institution: 'General Assembly',
      degree: null,
      grade: null,
      location: {
        city: 'London',
        country: 'UK'
      },
      dates: {
        start: '2019-01-28',
        end: '2019-04-18'
      },
      description: '',
      url: 'https://generalassemb.ly',
      image: './images/experience/general-assembly.png'
    },
    {
      course: 'International Business with Marketing and Chinese (Mandarin)',
      institution: 'European Business School, Regent\'s University London',
      degree: 'BA Hons',
      grade: '2:1',
      location: {
        city: 'London',
        country: 'UK'
      },
      dates: {
        start: '2019-01-28',
        end: '2019-04-18'
      },
      description: '',
      url: 'https://generalassemb.ly',
      image: './images/experience/regents-university-london.png'
    }
  ]

  const educationDivs = []

    
})