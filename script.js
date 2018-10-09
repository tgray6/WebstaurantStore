//Tyler Gray Solution


//variables to target the different options of the drop down list on the form.
//NOT the way we wanted to do it afterall, but keeping it on here for discussion of my mistakes.

// let chicken = document.getElementById("meatType").options[1].text;
// let primeRib = document.getElementById("meatType").options[2].text;
// let topBottomRound = document.getElementById("meatType").options[3].text;
// let brisket = document.getElementById("meatType").options[4].text;
// let porkRoast = document.getElementById("meatType").options[5].text;
// let turkey = document.getElementById("meatType").options[6].text;
// let lamb = document.getElementById("meatType").options[7].text;



let dailyWeight;
let dailyPrice;
let totalSpent;
let dailySavings;
let weeklySavings;
let monthlySavings;
let yearlySavings;
let paysForSelf;

let weightPerDayF = function() {
	dailyWeight = document.getElementById("weightPerDay").value;
}

let pricePerPoundF = function() {
	dailyPrice = document.getElementById("pricePerPound").value;
}

let calculations = function() {
	totalSpent = dailyWeight * dailyPrice;
	dailySavings = totalSpent * yieldPercentage;
	console.log(totalSpent);
	console.log(dailySavings);
}



//the weightPerDay(100) for chicken example input field value is multiplied by the pricePerPound ($5) for chicken example field value, which gives us the totalSpent value ($500) for chicken example, which we then multiple by the meat variable (which is .23, aka 23%) for chicken example, which gives us the savedPerDay variable, which is $115 for chicken example.





/*Variable to target innerhtml of the Increased Yield %
We then return this value in the below meatYield function to set yieldPercentage equal to its value.
*/
let increasedYield = document.getElementById("increasedYield");

let yieldSet = function() {
	return increasedYield.innerHTML = yieldPercentage;
}


let sel = document.getElementById("meatType");
let yieldPercentage;
let opt;




//function to get selected meat option on the form so we can return the value and set it global.
function getSelectedOption() {
    for ( var i = 0, len = sel.options.length; i < len; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    return opt;
}



//function determining the getSelectedOptions text value for the selected field and mutating the yieldPercentage global variable
let meatYield = function() {
	if (opt.text === "Chicken") {
		yieldPercentage = .23;
	}

	else if (opt.text === "Prime Rib") {
		yieldPercentage = .25;
	}

	else if (opt.text === "Top/Bottom Round") {
		yieldPercentage = .21;
	}

	else if (opt.text === "Brisket" || opt.text === "Pork Roast" || opt.text === "Lamb") {
		yieldPercentage = .15;
	}

	else if (opt.text === "Turkey") {
		yieldPercentage = .18;
	}
	return yieldPercentage;
}








//function to calculate all savings
let savingsCalculations = function() {
	weeklySavings = addCommas((dailySavings * 7).toFixed(2));
	monthlySavings = addCommas((dailySavings * 30.416).toFixed(2));
	yearlySavings = addCommas((dailySavings * 365).toFixed(2));
	let roundUpPaysForSelf = (2599 / dailySavings) / 30.416;
	let paysForSelfBefore = Math.ceil(roundUpPaysForSelf * 10) / 10;
	paysForSelf = addCommas(paysForSelfBefore.toFixed(2));
}




//render calculations for savings and pays for self
let renderCalculations = function() {
	document.getElementById("paysForSelf").innerHTML = paysForSelf;
	document.getElementById("dailySavings").innerHTML = `$${dailySavings}`;
	document.getElementById("weeklySavings").innerHTML = `$${weeklySavings}`;
	document.getElementById("monthlySavings").innerHTML = `$${monthlySavings}`;
	document.getElementById("yearlySavings").innerHTML = `$${yearlySavings}`;
}








//final submit function to run other functions to perform calculations and render to dom
let calcButton = document.getElementById("calculateBtn");

calcButton.addEventListener("click", function(){
	getSelectedOption();
	event.preventDefault();
	pricePerPoundF();
    weightPerDayF();
    meatYield();
    calculations();
    savingsCalculations();
    setTimeout(yieldSet, 500);
    setTimeout(renderCalculations, 500);
    setTimeout(fadeEffects, 600);
});








//simple fadein effects on the innerHTML for the savings IDs
let fadeEffects = function() {
	document.getElementById("paysForSelf").style.color = "#333333";
	document.getElementById("dailySavings").style.color = "#333333";
	document.getElementById("weeklySavings").style.color = "#333333";
	document.getElementById("monthlySavings").style.color = "#333333";
	document.getElementById("yearlySavings").style.color = "#333333";
	document.getElementById("increasedYield").style.color = "#333333";
}






//add commas
function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}