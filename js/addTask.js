document.addEventListener('DOMContentLoaded', function() {

    const title = document.getElementById('submit')
    title.addEventListener('click', function() {
        localStorage.setItem('title', document.getElementById('titleTask').value);
        localStorage.setItem('description', document.getElementById('taskDescription').value);
        localStorage.setItem('date', document.getElementById('dateTask').value);
        localStorage.setItem('type', document.getElementsByName('type').value);
        localStorage.setItem('choseOne', document.getElementById('choseOne').value);
    })
});