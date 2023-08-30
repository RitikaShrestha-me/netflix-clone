let FAQBlock = document.getElementsByClassName("js__FAQ__title");
let RegisterButton = document.getElementById("js__signin__button");

RegisterButton.addEventListener("click", function () {
	window.location.href = '/login.html';
});

for (let i = 0;i < FAQBlock.length;i++) {
	FAQBlock[i].addEventListener("click", function () {
		if (this.childNodes[1].classList.contains("fa-plus")) {
			this.childNodes[1].classList.remove("fa-plus");
			this.childNodes[1].classList.add("fa-times");
		} else {
			this.childNodes[1].classList.remove("fa-times");
			this.childNodes[1].classList.add("fa-plus");
		}

		let content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

function gotoHome() {
	let EmailInput = document.getElementById("js__email__input");
	let EmailInputErrMsg = document.getElementById("js__email__input__error");

	// Comparing email regex
	if (String(EmailInput.value).toLowerCase().match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	)) { window.location.href = '/home.html'; }
	else {
		EmailInputErrMsg.textContent = "Invalid Email"
	}
}