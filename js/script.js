////****Global variables****\\\\
                                        
const nameInput = $('#name');
const otherText = $('#other-title');
const title = $('#title');
const design = $('#design');
const checkBoxes = $('.activities input');
const activities = $('.activities');
const activitesLegend = $('.activities legend');
const payment = $('#payment');
const credit = $('#credit-card');
const payPal = $('#payPal');
const bitCoin = $('#bitCoin');
const selectOption = $('option[value="select_method"]');
const colorSelect = $('#color');
const colorLabel = $('label[for="color"]');
const submit = $('button[type="submit"]');
let count = 0;



////****Created Elements****\\\\

const $total = $('<h3>Total: </h3>');

const $nameMessage = $('<p>Please enter your name.</p>').css('display','inline');
$nameMessage.css('color', 'red');
$nameMessage.insertAfter($('label[for="name"]'));
$nameMessage.hide();

const $emailMessage = $('<p>Please enter your emil.</p>').css('display','inline');
$emailMessage.css('color', 'red');
$emailMessage.insertAfter($('label[for="mail"]'));
$emailMessage.hide();

const $checkboxMessage = $('<p>Please choose at least one activity.</p>');
$checkboxMessage.css('color', 'red');
$checkboxMessage.insertAfter(activitesLegend);
$checkboxMessage.hide();

let $creditMessage = $('<p>Please enter a number that is between 13 and 16 digits long.</p>').css('display','inline');
$creditMessage.css('color', 'red');
$creditMessage.insertAfter($('label[for="cc-num"]'));
$creditMessage.hide();

const $zipMessage = $('<p>Please enter valid zip code.</p>').css('display','inline'); 
$zipMessage.css('color', 'red');
$zipMessage.insertAfter($('label[for="zip"]'));
$zipMessage.hide();

const $cvvMessage = $('<p>Please enter valid cvv number.</p>').css('display','inline');
$cvvMessage.css('color', 'red');
$cvvMessage.insertAfter($('label[for="cvv"]'));
$cvvMessage.hide();



////****Validators****\\\\

const isValidName = (name) => {
    return /^[a-z]+$/i.test(name);
}

const isValidEmail = (email) => {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

const isValidCredit = (credit) => {
    return /\b\d{13,16}\b/.test(credit);
}

const isValidZip = (zip) => {
    return /^[0-9]{5}$/.test(zip);
}

const isValidCvv = (cvv) => {
    return /^[0-9]{3}$/.test(cvv);
}



//Sets 'focus' on first text field
//Learned how to set 'focus' from https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
nameInput.focus();

//Hides 'other-title' text field
otherText.hide();

//Appends and hides '$total' element
activities.append($total);
$total.hide();

//Hides 'payPal' and 'bitCoin' divs
payPal.hide();
bitCoin.hide();

//Starts 'Payment' option on 'Credit Card'
payment.val('credit card');

//Disables the 'select_method' option
selectOption.prop("disabled", true);

//Hides 'color select' and label at start
colorSelect.hide();
colorLabel.hide();



////****Functions****\\\\

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



////****Event Handlers****\\\\

//Event that toggles 'other-title' text when 'other' is clicked
title.on('click', function() {
    if (this.value === 'other') {
        otherText.toggle();
    }
});


//Event that removes 'color' options on 'design' click
//Shows 'color select' and label on option select 
design.on('click', function() {
    if (this.value === 'js puns') {
        $('#color').val('cornflowerblue');
        $('option[value="tomato"]').toggle();
        $('option[value="steelblue"]').toggle();
        $('option[value="dimgrey"]').toggle();
        colorSelect.show();
        colorLabel.show();
    }

    if (this.value === 'heart js') {
        $('#color').val('tomato');
        $('option[value="cornflowerblue"]').toggle();
        $('option[value="darkslategrey"]').toggle();
        $('option[value="gold"]').toggle();
        colorSelect.show();
        colorLabel.show();
    }

    if (this.value === 'Select Theme') {
        colorSelect.hide();
        colorLabel.hide();
    }
});


//Event that disables checkboxes if conflicting conference is checked
//Adds or subtracts from 'count'and calls 'showTotal'
//Learned 'prop()' from http://api.jquery.com/prop/
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


//Event that displays correct payment 'div' according to select menu option 'clicked'
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
        payPal.hide();
    }
});


//Event that checks that all form element are correctly filled out when 'Submit' is clicked
submit.on('click', function () {
    let checks = 0;
    const name = $('#name').val();
    const email = $('#mail').val();
    const credit = $('#cc-num').val();
    const zip = $('#zip').val();
    const cvv = $('#cvv').val();

    //Changes Submit button to type 'button' to stop from submiting at start of event
    submit.attr('type', 'button');

    //If 'name' validation is true, border and Label are turned black, message is hidden, and adds 1 to checks counter
    //Else, border and label are turned red and message is shown
    if (isValidName(name)) {
        $('#name').css('border-color', 'black');
        $('label[for="name"]').css('color', 'black');
        $nameMessage.hide();
        checks += 1;
    } else {
        $('#name').css('border-color', 'red');
        $('label[for="name"]').css('color', 'red');
        $nameMessage.show();
    }

    //If 'email' validation is true, border and Label are turned black, message is hidden, and adds 1 to checks counter
    //Else, border and label are turned red and message is shown
    if (isValidEmail(email)) {
        $('#mail').css('border-color', 'black');
        $('label[for="mail"]').css('color', 'black');
        $emailMessage.hide();
        checks += 1;
    } else {
        $('#mail').css('border-color', 'red');
        $('label[for="mail"]').css('color', 'red');
        $emailMessage.show();
    }
    
    //Loops over all check boxes to check that one is checked and hides message
    //or 'legend' turns red and message is shown
    checkBoxes.each(function() {
        activitesLegend.css('color', 'red');
        $checkboxMessage.show();

        if (this.checked) {
            activitesLegend.css('color', 'black');
            $checkboxMessage.hide();
            checks += 1;
            return false;
        }
    });

    //If 'credit card' is chosen, checks validation
    if (payment.val() === 'credit card') {
        //If 'credit' validation is true, border and Label are turned black, message is hidden, and adds 1 to checks counter
        //Else if, credit card input is blank, message is changed
        //Else, border and label are turned red and message is shown
        if (isValidCredit(credit)) {
            $('#cc-num').css('border-color', 'black');
            $('label[for="cc-num"]').css('color', 'black');
            $creditMessage.hide();
            checks += 1;
        } else if ($('#cc-num').val() === '') {
            $creditMessage.text('Please enter a credit card number.');
            $('#cc-num').css('border-color', 'red');
            $('label[for="cc-num"]').css('color', 'red');
            $creditMessage.show();
        } else {
            $creditMessage.text('Please enter a number that is between 13 and 16 digits long.');
            $('#cc-num').css('border-color', 'red');
            $('label[for="cc-num"]').css('color', 'red');
            $creditMessage.show();
        }

        //If 'zip' validation is true, border and Label are turned black, message is hidden, and adds 1 to checks counter
        //Else, border and label are turned red and message is shown
        if (isValidZip(zip)) {
            $('#zip').css('border-color', 'black');
            $('label[for="zip"]').css('color', 'black');
            $zipMessage.hide();
            checks += 1;
        } else {
            $('#zip').css('border-color', 'red');
            $('label[for="zip"]').css('color', 'red');
            $zipMessage.show();
        }

        //If 'cvv' validation is true, border and Label are turned black, message is hidden, and adds 1 to checks counter
        //Else, border and label are turned red and message is shown
        if (isValidCvv(cvv)) {
            $('#cvv').css('border-color', 'black');
            $('label[for="cvv"]').css('color', 'black');
            $cvvMessage.hide();
            checks += 1;
        } else {
            $('#cvv').css('border-color', 'red');
            $('label[for="cvv"]').css('color', 'red');
            $cvvMessage.show();
        }
    }

    //If 'credit' is chosen AND 'check' are 6, Submit button is changed to 'submit' type
    if (payment.val() === 'credit card' && checks === 6) {
        submit.attr('type', 'submit');
    }

    //If 'credit' is Not chosen AND 'check' are 3, Submit button is changed to 'submit' type
    if (payment.val() !== 'credit card' && checks === 3) {
        submit.attr('type', 'submit');
    }
});







