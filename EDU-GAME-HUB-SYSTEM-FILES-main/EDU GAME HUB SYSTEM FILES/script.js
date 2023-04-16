$(document).ready(function() {
    $('#add-student-btn').click(function() {
      $('#add-student-modal').modal('show');
    });
  });

// Get the modal and the button that opens it
var modal = document.querySelector('.modal');
var addStudentButton = document.querySelector('.add-student');
var addTeacherButton = document.querySelector('.add-teacher');

// When the user clicks the Add Student button, display the student modal
addStudentButton.addEventListener('click', function() {
    var studentModal = document.querySelector('#add-student-modal');
    studentModal.style.display = 'block';
});

// When the user clicks the Add Teacher button, display the teacher modal
addTeacherButton.addEventListener('click', function() {
    var teacherModal = document.querySelector('#add-teacher-modal');
    teacherModal.style.display = 'block';
});

// When the user clicks the cancel button or the close button, hide the modal
var cancelButtons = document.querySelectorAll('.cancel');
var closeButtons = document.querySelectorAll('.modal-close');

for (var i = 0; i < cancelButtons.length; i++) {
    cancelButtons[i].addEventListener('click', closeModal);
    closeButtons[i].addEventListener('click', closeModal);
}

function closeModal() {
    var modals = document.querySelectorAll('.modal');
    for (var i = 0; i < modals.length; i++) {
        modals[i].style.display = 'none';
    }
}
