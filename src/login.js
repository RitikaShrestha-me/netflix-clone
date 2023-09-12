let LoginButton = document.getElementById("js__login__button");

LoginButton.addEventListener("click", () => gotoHome());

function gotoHome() {
	let EmailInput = document.getElementById("js__id__email");
	let PasswordInput = document.getElementById("js__id__password");
	let InputErrMsg = document.getElementById("js__input__error");

	// Comparing email regex
	if (String(EmailInput.value).toLowerCase().match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	)) {
		// Comparing Password Regex
		if (String(PasswordInput.value).toLowerCase().match(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
		)) { window.location.href = '/home.html'; }
		else {
			InputErrMsg.textContent = "Invalid Password"
		}
	}
	else {
		InputErrMsg.textContent = "Invalid Email"
	}


}