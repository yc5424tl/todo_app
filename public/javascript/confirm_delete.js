

let deleteButtons = window.document.querySelectorAll('.delete-button');
deleteButtons.forEach(function(button){
    button.addEventListener('click', function(ev){
        let okToDelete = window.confirm("Delete Task - Are You Sure?");
        if(!okToDelete){
            ev.preventDefault();
        }
    })
});



