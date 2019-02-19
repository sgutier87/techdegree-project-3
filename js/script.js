//Global variables
const nameInput = $('#name');
const otherText = $('#other-title');
const title = $('#title');
const design = $('#design');
const total = $('#total');
const activities = $('.activities input');


//Sets 'focus' on first text field
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
nameInput.focus();


//Hides 'other-title' text field
otherText.hide();


//Hides 'total' h3
total.hide();


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


//http://api.jquery.com/prop/
activities.on('change', function() {
    const main = $('input[name="all"]');
    const jsFrameworks = $('input[name="js-frameworks"]');
    const express = $('input[name="express"]');
    const jsLibs = $('input[name="js-libs"]');
    const node = $('input[name="node"]');
    let count = 0;


    if (this.checked && this.name === "all") {
        count += 200;
    } else if (this.checked === false && this.name === "all") {
        count -= 200;
    }


    //Disables 'Express Workshop' if 'JavaScript Frameworks Workshop' is selected
    if (this.checked && this.name === "js-frameworks") {
        express.prop("disabled", true);
        express.parent().css( "color", "grey" );
    } else if (this.checked === false && this.name === "js-frameworks") {
        express.prop("disabled", false);
        express.parent().css( "color", "black" );
    }


    //Disables 'JavaScript Frameworks Workshop' if 'Express Workshop' is selected
    if (this.checked && this.name === "express") {
        jsFrameworks.prop("disabled", true);
        jsFrameworks.parent().css( "color", "grey" );
    } else if (this.checked === false && this.name === "express") {
        jsFrameworks.prop("disabled", false);
        jsFrameworks.parent().css( "color", "black" );
    }
    

    //Disables 'Node.js Workshop' if 'JavaScript Libraries Workshop' is selected
    if (this.checked && this.name === "js-libs") {
        node.prop("disabled", true);
        node.parent().css( "color", "grey" );
    } else if (this.checked === false && this.name === "js-libs") {
        node.prop("disabled", false);
        node.parent().css( "color", "black" );
    }


    //Disables 'JavaScript Libraries Workshop' if 'Node.js Workshop' is selected
    if (this.checked && this.name === "node") {
        jsLibs.prop("disabled", true);
        jsLibs.parent().css( "color", "grey" );
    } else if (this.checked === false && this.name === "node") {
        jsLibs.prop("disabled", false);
        jsLibs.parent().css( "color", "black" );
    }


    if (count) {
        total.show();
    } else {
        total.hide();
    }
});






