document.addEventListener('DOMContentLoaded', function() {
    let tasks = JSON.parse(localStorage.getItem('task'));

    if(tasks== null) {
        tasks = [];
    };
    let html = '';
    tasks.forEach(el => {
        html += '<tr>';
        html += '<td>';
        html += el.title;
        html += '</td>';
        html += '<td>';
        html += el.description;
        html += '</td>';
        html += '<td>';
        html += el.date;
        html += '</td>';
        html += '<td>';
        html += el.type;
        html += '</td>';
        html += '</tr>';
    });
    document.querySelector('tbody').innerHTML = html;

    const reset = document.getElementById('reset');
    reset.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
    })
});