/* const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
}})
*/

document.addEventListener('DOMContentLoaded', function() {
    fetch('./navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});