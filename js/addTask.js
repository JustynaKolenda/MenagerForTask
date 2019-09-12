document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('formAdd')
    title.addEventListener("submit", (evt)=>{
        evt.preventDefault();

        let task = JSON.parse(localStorage.getItem('task'));
        if(task == null) {
            task = [];
        };
       
        const title = document.getElementById('titleTask').value;
        const description = document.getElementById('taskDescription').value;
        const date = document.getElementById('dateTask').value;
        const type = document.getElementsByName('type').value;
        const choseOne = document.getElementById("choseOne").value;
        
        if(requaired() && checkDate(date)){
            task.push({title, description, date, type, choseOne});
            localStorage.setItem('task', JSON.stringify(task));
            clear();
            window.location.assign("listTask.html");
        }
      
    });

    function clear(){
        document.getElementById('titleTask').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('dateTask').value = '';
        document.getElementsByName('type').value = true;
        document.getElementById("choseOne").value = '';
    }

    function requaired(){
        var req = document.forms["formAdd"]["titleTask"].value;
        if(req == "") {
            alert("Uzupełnij pole");
            return false;
        }
        return true;
    }

    function checkDate(dateFromInput){
        let today = Date.now();
        let start = new Date(dateFromInput);
        console.log(today, start, dateFromInput);

        if(today>start) {
            alert("Data nie może być starsza od dzisiejszej");
            return false;
        } 
        return true;
        
    }
    const discard = document.getElementById('discard');
    discard.addEventListener('click', function() {
        window.location.assign("index.html");
    })
});