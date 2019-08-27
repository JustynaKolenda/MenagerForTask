document.addEventListener('DOMContentLoaded', function() {

const addNewTask = document.getElementById('taskAdd')
const listOfTask = document.getElementById('taskList')

    addNewTask.addEventListener('click', function() {
        window.location.assign("addTask.html")
    })

    listOfTask.addEventListener('click', function() {
        window.location.assign('listTask.html')
    })
});