let deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(function(button){
    button.addEventListener('click', function(ev){
        if(!confirm('Delete Task - Are You Sure?')){
            ev.preventDefault();
        }
    })
})




// let deleteButtons = document.querySelectorAll('.delete-button');
//
// deleteButtons.forEach(function(button){
//
//     button.addEventListener('click', function(ev){
//
//         let okToDelete = confirm('Delete task - are you sure?');
//
//         if(!okToDelete){
//             ev.preventDefault();
//         }
//     })
// });

// document.querySelectorAll('.delete-button').forEach(
//     e => e.addEventListener('click', function(f) {
//         let okToDelete = confirm('Delete task - are you sure?');
//
//         if(!okToDelete) {
//             f.preventDefault();
//         }
//     }));

