const getChk = document.querySelector('.theme-input input[type="checkbox"]');
const savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
cookiesok = localStorage.getItem("cookies-accepted") ? localStorage.getItem('cookies-accepted') : false;

if (savedTheme && cookiesok) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        getChk.checked = true;
    }
}
function themeChange(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (cookiesok){
            localStorage.setItem('theme', 'dark');
        }
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (cookiesok){
            localStorage.setItem('theme', 'light');
        }
    }    
}
getChk.addEventListener('change', themeChange, false);