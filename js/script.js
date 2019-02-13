//Global variables
const nameInput = $('#name');
const otherText = $('#other-title');
const title = $('#title');
const design = $('#design');


//Sets 'focus' on first text field
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
nameInput.focus();


//Hides 'other-title' text field
otherText.hide();


//Event that toggles 'other-title' text when 'other' is clicked
title.on('click', function() {
    if (this.value === 'other') {
        otherText.toggle();
    }
});


//Event that removes 'color' options on 'design' click
design.on('click', function() {
    if (this.value === 'js puns') {
        $('option[value="tomato"]').toggle();
        $('option[value="steelblue"]').toggle();
        $('option[value="dimgrey"]').toggle();
    }

    if (this.value === 'heart js') {
        $('option[value="cornflowerblue"]').toggle();
        $('option[value="darkslategrey"]').toggle();
        $('option[value="gold"]').toggle();
    }
});






