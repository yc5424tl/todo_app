let deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(function(button){
    button.addEventListener('click', function(ev){
        if(!window.confirm('Delete Task - Are You Sure?')){
            ev.preventDefault();
        }
    })
});

document.querySelectorAll('.delete-button').forEach(button => button.addEventListener.on('click', function(ev){if(!window.confirm('Delete?')){ev.preventDefault()}}))

$(function() {
    $('.delete-button').click(function(e) {
        e.preventDefault();
        let dialog = ('Are You Sure?').dialog({
            buttons: {
                "Yes": function() {alert('Yes');},
                "No": function() {alert('No');},
                "Cancel": function() {alert('Cancel');
                dialog.dialog('close');
                }
            }
        })
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

