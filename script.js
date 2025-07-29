// Skeleton Screen UI

setTimeout(() => {
    const skeletons = document.querySelectorAll('.skeleton')
    console.log(skeletons);
    const hiddens = document.querySelectorAll('.hidden')
    console.log(hiddens)

    for(const skeleton of skeletons) {skeleton.style.display ='none'}
    for(const hidden of hiddens) { hidden.style.display ='block'}
}, 3000)




//Function to check if page is scrolled and adjust the logo size
const checkScroll = () => {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');

    let scrollPosition = window.scrollY;
    console.log(scrollPosition);

    //Add/remove 'scrolled class based on scroll position 
    if(scrollPosition>20) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }

    //Calculate new font size based on scroll position
    let newSize = 4.8 - (scrollPosition * 0.03); //Decrease by 0.03 for every pixel scrolled

    // Clamping the font size between 1.5rem and 3rem
    newSize = Math.max(2.4, newSize);
    newSize = Math.min(4.8, newSize)

    logo.style.fontSize = newSize + 'rem';

    
}

//Event Listener for scroll event
    window.addEventListener('scroll', checkScroll);



//Dark Mode ------------------------------

const themeSwitcher = document.getElementById('theme-switcher');

//Update Theme Icon and Text

const updateThemeIcon = (isDarkMode) => {
    
    themeSwitcher.children[0].classList.replace(isDarkMode ? 'fa-sun': 'fa-moon', isDarkMode ? 'fa-moon' : 'fa-sun' )
}

//Determine if dark mode is prfefered
function prefersDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
}

// Set the theme based on the preference
function setThemeBasedOnPrference() {
 const isDarkMode = prefersDarkMode();
 document.documentElement.setAttribute('data-theme',isDarkMode ? 'dark' : 'light');
 updateThemeIcon(isDarkMode);
}

//Switch theme 
switchTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light': 'dark';
    document.documentElement.setAttribute('data-theme',newTheme);
    localStorage.setItem('theme',newTheme);
    updateThemeIcon(newTheme === 'dark');
}


//Event Listener 
themeSwitcher.addEventListener('click', switchTheme)

//Check Local Storage For Theme 
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme === 'dark');
    }
    else {
        setThemeBasedOnPrference();
    }
}

//Listen for system theme changes
window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', setThemeBasedOnPrference)

//Initialize theme when the script loads
initializeTheme();
