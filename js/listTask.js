document.addEventListener('DOMContentLoaded', function() {
    let tasks = JSON.parse(localStorage.getItem('task'));

    if(tasks== null) {
        tasks = [];
    };
    let html = '';
    tasks.forEach(el => {
            html += '<li>';
            html += el.title;
            html += '<br>';
            html += el.description;
            html += '<br>';
            html += el.date;
            // html += '<br>';
            // html += el.type;
            html += '<br>';
            html += el.choseOne;
            html += '</li>';
            document.querySelector('li').innerHTML = html;
    });
});