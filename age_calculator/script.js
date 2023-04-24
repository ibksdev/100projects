const dob = document.querySelector("#dob");
const current_date = document.querySelector("#current_date");
const btn = document.querySelector(".btn");
const months=[31,28,31,30,31,30,31,31,30,31,30,31];

btn.addEventListener("click",calculateAge);

function calculateAge (e) {
	e.preventDefault();
	let dobInput = new Date(dob.value);
	let curDateInput = new Date(current_date.value);
	let birthDay, birthMonth, birthYear;
	let birthDetails = {
		date: dobInput.getDate(),
		month: dobInput.getMonth() + 1,
		year: dobInput.getFullYear(),
	};
	let currentDay = curDateInput.getDay();
	let currentMonth = curDateInput.getMonth() + 1;
	let currentYear = curDateInput.getFullYear();

	if(
		birthDetails.year > currentYear ||
		(birthDetails.month > currentMonth && birthDetails.date == currentDay) ||
		(birthDetails.date > currentDay && birthDetails.month == currentMonth && birthDetails.year == currentYear)
	)
	{
		alert("Invalid Date");
		return;
	}
	birthYear = currentYear - birthDetails.year;
	if(currentMonth >= birthDetails.month){
		birthMonth = currentMonth - birthDetails.month;
	}
	else
	{
		birthYear --;
		birthMonth = 12 + currentMonth - birthDetails.month;
	}

	if(currentDay >= birthDetails.date)
	{
		birthDay = currentDay - birthDetails.date;
	}
	else
	{
		birthMonth --;
		let days = months[currentMonth - 2];
		birthDay = days + currentMonth - birthDetails.date ;
		if (birthMonth > 0)
		{
			birthMonth = 11;
			birthYear --;
		}
	}
	displayResult(birthDay,birthMonth,birthYear);
	function displayResult (bDate,bMonth,bYear) {
		document.querySelector(".age-year").textContent = bYear;
		document.querySelector(".age-month").textContent = bMonth;
		document.querySelector(".age-day").textContent = bDate;

	}


}
