var user = document.querySelector('.userName');
var userName = localStorage.getItem('userName');

user.innerHTML = "Welocme, " + userName ; 
