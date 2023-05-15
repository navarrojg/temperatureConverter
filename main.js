const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const change = () => {
	if (one.textContent === "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
		result.textContent = "";
	} else {
		one.textContent = "°C";
		two.textContent = "°F";
		result.textContent = "";
	}
};

const toF = () => {
	tempF = converter.value * 1.8 + 32;
	result.textContent = `${converter.value}°C to ${tempF.toFixed(1)}°F`;
	converter.value = "";
};

const toC = () => {
	tempC = (converter.value - 32) / 1.8;
	result.textContent = `${converter.value}°F to ${tempC.toFixed(1)}°C`;
	converter.value = "";
};

const fOrC = () => {
	if (converter.value !== "") {
		if (one.textContent === "°C") {
			toF();
		} else {
			toC();
		}
	} else {
		result.textContent = "musisz podać jakąś wartość";
	}
};

const reset = () => {
	result.textContent = "";
	converter.value = "";
};

changeBtn.addEventListener("click", change);
convBtn.addEventListener("click", fOrC);
resetBtn.addEventListener("click", reset);
