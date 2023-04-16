$(document).ready(function(){
    console.log('jQuery is working!');
  });

// Get the modal and the button that opens it
var modal = document.querySelector('.modal');
var addButton = document.querySelector('.add-user');

// When the user clicks the button, display the modal
addButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

// When the user clicks the cancel button or the close button, hide the modal
var cancelButton = document.querySelector('.cancel');
var closeButton = document.querySelector('.modal-close');

cancelButton.addEventListener('click', closeModal);
closeButton.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
}

$(document).ready(function() {
    $(".teachers-tab").click(function() {
        $(".students-tab").hide();
    });

    $("ul li:first-child").click(function() {
        $(".students-tab").show();
    });

    // When the user clicks on the "Add Student" button
$('.add-user').on('click', function() {

    // Display the modal window
    $('.modal').show();
  
  });
  

});
