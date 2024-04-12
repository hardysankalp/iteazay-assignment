$(document).ready(function() {
    let currentQuestion = 0;
    const totalQuestions = $('.question').length;

    // Hide all questions except the first one
    $('.question').hide().eq(0).show();

    // Add event listener for input fields
    $('input, select').on('input', function() {
        updateProgressBar();
    });

    // Function to update progress bar
    function updateProgressBar() {
        let filledInputs = 0;
        $('input[type="text"], input[type="email"]').each(function() {
            if ($(this).val().length >= 3) {
                filledInputs++;
            }
        });
        $('select').each(function() {
            if ($(this).val() !== '') {
                filledInputs++;
            }
        });
        // Update progress bar based on filled inputs
        const progress = (filledInputs / (totalQuestions * 2)) * 100; // Assuming each question has 2 input fields
        $('.progress').css('width', progress + '%');
    }

    // Add event listener for the "Next" button
    $('#nextBtn').click(function() {
        if (currentQuestion < totalQuestions - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    });

    // Add event listener for the "Previous" button
    $('#prevBtn').click(function() {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion);
        }
    });

    // Function to show/hide questions
    function showQuestion(index) {
        $('.question').hide().eq(index).show();
    }
});
