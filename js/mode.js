const getChk = document.querySelector('.theme-input input[type="checkbox"]');
const savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        getChk.checked = true;
    }
}
function themeChange(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}
getChk.addEventListener('change', themeChange, false);