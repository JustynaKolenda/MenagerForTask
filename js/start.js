document.addEventListener('DOMContentLoaded', function() {

const addNewTask = document.getElementById('taskAdd')
const listOfTask = document.getElementById('taskList')

    addNewTask.addEventListener('click', function() {
        window.location.assign("addTask.html")
        //window.location.replace('listTask.html')
    })

    listOfTask.addEventListener('click', function() {
        //window.location.replace('listTask.html')
        window.location.assign("listTask.html")
    })
});