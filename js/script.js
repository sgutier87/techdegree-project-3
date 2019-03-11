//Global variables
const nameInput = $('#name');
const otherText = $('#other-title');
const title = $('#title');
const design = $('#design');
const checkBoxes = $('.activities input');
const activities = $('.activities');
const activitesLabels = $('.activities label');
const $total = $('<h3>Total: </h3>');
let count = 0;
const payment = $('#payment');
const credit = $('#credit-card');
const payPal = $('#payPal');
const bitCoin = $('#bitCoin');
const select = $('option[value="select_method"]');
const submit = $('button[type="submit"]');



//Sets 'focus' on first text field
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
nameInput.focus();


//Hides 'other-title' text field
otherText.hide();


//Appends and hides '$total' element
activities.append($total);
$total.hide();


//Hides 'payPal' and 'bitCoin' divs
payPal.hide();
bitCoin.hide();


select.prop("disabled", true);


//Function to show '$total' element and change text with a given 'count'
const showTotal = (count) => {
    if (count) {
        $total.text('Total: $' + count);
        $total.show();
    } else {
        $total.text('Total: $' + count);
        $total.hide();
    }
};


const isValidName = (name) => {
    return /^[a-z]+$/i.test(name);
}


const isValidEmail = (email) => {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

const isValidCredit = (credit) => {
    return /\b\d{13,16}\b/.test(credit);
}


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


//Event that disables checkboxes if conflicting conference is checked
//Adds or subtracts from 'count'and calls 'showTotal'
//http://api.jquery.com/prop/
checkBoxes.on('change', function() {
    const jsFrameworks = $('input[name="js-frameworks"]');
    const express = $('input[name="express"]');
    const jsLibs = $('input[name="js-libs"]');
    const node = $('input[name="node"]');

    //Adds or subtracts 200 from 'count'and calls 'showTotal' when 'Main Conference' is checked
    if (this.checked && this.name === "all") {
        count += 200;
        showTotal(count);
    } else if (this.checked === false && this.name === "all") {
        count -= 200;
        showTotal(count);
    }

    //Disables 'Express Workshop' if 'JavaScript Frameworks Workshop' is selected
    //Adds or subtracts 100 from 'count'and calls 'showTotal'
    if (this.checked && this.name === "js-frameworks") {
        express.prop("disabled", true);
        express.parent().css( "color", "grey" );
        count += 100;
        showTotal(count);
    } else if (this.checked === false && this.name === "js-frameworks") {
        express.prop("disabled", false);
        express.parent().css( "color", "black" );
        count -= 100;
        showTotal(count);
    }

    //Disables 'JavaScript Frameworks Workshop' if 'Express Workshop' is selected
    //Adds or subtracts 100 from 'count'and calls 'showTotal'
    if (this.checked && this.name === "express") {
        jsFrameworks.prop("disabled", true);
        jsFrameworks.parent().css( "color", "grey" );
        count += 100;
        showTotal(count);
    } else if (this.checked === false && this.name === "express") {
        jsFrameworks.prop("disabled", false);
        jsFrameworks.parent().css( "color", "black" );
        count -= 100;
        showTotal(count);
    }
    
    //Disables 'Node.js Workshop' if 'JavaScript Libraries Workshop' is selected
    //Adds or subtracts 100 from 'count'and calls 'showTotal'
    if (this.checked && this.name === "js-libs") {
        node.prop("disabled", true);
        node.parent().css( "color", "grey" );
        count += 100;
        showTotal(count);
    } else if (this.checked === false && this.name === "js-libs") {
        node.prop("disabled", false);
        node.parent().css( "color", "black" );
        count -= 100;
        showTotal(count);
    }

    //Disables 'JavaScript Libraries Workshop' if 'Node.js Workshop' is selected
    //Adds or subtracts 100 from 'count'and calls 'showTotal'
    if (this.checked && this.name === "node") {
        jsLibs.prop("disabled", true);
        jsLibs.parent().css( "color", "grey" );
        count += 100;
        showTotal(count);
    } else if (this.checked === false && this.name === "node") {
        jsLibs.prop("disabled", false);
        jsLibs.parent().css( "color", "black" );
        count -= 100;
        showTotal(count);
    }

    //Adds or subtracts 100 from 'count'and calls 'showTotal' when 'Build tools Workshop' is checked
    if (this.checked && this.name === "build-tools") {
        count += 100;
        showTotal(count);
    } else if (this.checked === false && this.name === "build-tools") {
        count -= 100;
        showTotal(count);
    }

    //Adds or subtracts 100 from 'count'and calls 'showTotal' when 'npm Workshop' is checked
    if (this.checked && this.name === "npm") {
        count += 100;
        showTotal(count);
    } else if (this.checked === false && this.name === "npm") {
        count -= 100;
        showTotal(count);
    }
});


//Event that displays correct payment div according to select menu option chosen
payment.on('click', function () {
    if (this.value === 'credit card') {
        credit.show();
        payPal.hide();
        bitCoin.hide();
    } else if (this.value === 'paypal') {
        payPal.show();
        credit.hide();
        bitCoin.hide();
    } else if (this.value === 'bitcoin') {
        bitCoin.show();
        credit.hide();
        payPal.hide()
    }
});


//Submit Button Event
submit.on('click', function () {
    let checks = 0;
    const name = $('#name').val();
    const email = $('#mail').val();
    const credit = $('#cc-num').val();

    submit.attr('type', 'button');

    //Name Validation
    if (isValidName(name) === false) {
        $('#name').css('border-color', 'red');
        $('label[for="name"]').css('color', 'red');
    } else {
        $('#name').css('border', 'none');
        $('label[for="name"]').css('color', 'black');
        checks += 1;
    }

    //Email Validation
    if (isValidEmail(email) === false) {
        $('#mail').css('border-color', 'red');
        $('label[for="mail"]').css('color', 'red');
    } else {
        $('#mail').css('border', 'none');
        $('label[for="mail"]').css('color', 'black');
        checks += 1;
    }
    
    //Checkboxes
    checkBoxes.each(function() {
        activitesLabels.css('color', 'red');

        if (this.checked) {
            activitesLabels.css('color', 'black');
            checks += 1;
            return false;
        }
    });

    //Credit Card
    if (payment.val() === 'credit card') {
        if (isValidCredit(credit) === false) {
            $('#cc-num').css('border-color', 'red');
            $('label[for="#cc-num"]').css('color', 'red');
        } else {
            $('#cc-num').css('border', 'none');
            $('label[for="#cc-num"]').css('color', 'black');
            checks += 1;
        }

        if (checks === 4) {
            submit.attr('type', 'submit');
        }
    }

    //Submit
    if (checks === 3) {
        submit.attr('type', 'submit');
    }
});







