var button = document.querySelector(".search-button"); 
var form = document.querySelector(".search-form");

var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");

button.addEventListener("click", function(evt) {
	evt.preventDefault();
	form.classList.toggle("switch");
	arrival.focus();
});

form.addEventListener("submit", function (evt) {
	if (!arrival.value || !departure.value) {
		evt.preventDefault();
		alert("Пожалуйста, введите даты");
	}
});