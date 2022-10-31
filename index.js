function validate(isTrue = false) {
	let firstName = document.getElementById("first-name").value;
	let lastName = document.getElementById("last-name").value;
	let email = document.getElementById("email").value;
	let mobile = document.getElementById("mobile").value;
	let male = document.getElementById("male").checked;
	let female = document.getElementById("female").checked;
	let others = document.getElementById("others").checked;
	let country = document.getElementById("country").value;
	let error = false;

	if (
		!firstName == "" &&
		firstName.match(/^[a-zA-Z]*$/) &&
		firstName.length > 2
	) {
		document.getElementById("first-name-invalid").style.display = "none";
		document.getElementById("first-name-valid").style.display = "block";
	} else {
		document.getElementById("first-name-valid").style.display = "none";
		document.getElementById("first-name-invalid").style.display = "block";
		error = true;
	}

	if (!lastName == "" && lastName.match(/^[a-zA-Z]*$/) && lastName.length > 2) {
		document.getElementById("last-name-invalid").style.display = "none";
		document.getElementById("last-name-valid").style.display = "block";
	} else {
		document.getElementById("last-name-valid").style.display = "none";
		document.getElementById("last-name-invalid").style.display = "block";
		error = true;
	}

	if (
		!email == "" &&
		email.includes("@") &&
		email.includes(".") &&
		email.indexOf("@") != 0 &&
		email.length - email.indexOf(".") > 2
	) {
		document.getElementById("email-invalid").style.display = "none";
		document.getElementById("email-valid").style.display = "block";
	} else {
		document.getElementById("email-valid").style.display = "none";
		document.getElementById("email-invalid").style.display = "block";
		error = true;
	}

	if (mobile.length == 10 && mobile.match(/^[0-9]*$/)) {
		document.getElementById("mobile-invalid").style.display = "none";
		document.getElementById("mobile-valid").style.display = "block";
	} else {
		document.getElementById("mobile-valid").style.display = "none";
		document.getElementById("mobile-invalid").style.display = "block";
		error = true;
	}

	if (!male == false || !female == false || !others == false) {
		document.getElementById("gender-invalid").style.display = "none";
		document.getElementById("gender-valid").style.display = "block";
	} else {
		document.getElementById("gender-valid").style.display = "none";
		document.getElementById("gender-invalid").style.display = "block";
		error = true;
	}

	if (country != "None") {
		document.getElementById("country-invalid").style.display = "none";
		document.getElementById("country-valid").style.display = "block";
	} else {
		document.getElementById("country-valid").style.display = "none";
		document.getElementById("country-invalid").style.display = "block";
		error = true;
	}

	if (isTrue && !error) {
		document.getElementById("registration-form").reset();

		let validFeedBack = document.getElementsByClassName("valid-feedback");
		for (let i = 0; i < validFeedBack.length; i++) {
			validFeedBack[i].style.display = "none";
		}

		let invalidFeedBack = document.getElementsByClassName("invalid-feedback");
		for (let i = 0; i < invalidFeedBack.length; i++) {
			invalidFeedBack[i].style.display = "none";
		}
		alert("Your details have been saved successfully!");
	}
}
