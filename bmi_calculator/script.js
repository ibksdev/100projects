const btn = document.querySelector("#calculateBtn");
const result = document.querySelector("#show");

btn.addEventListener("click",bmiCalculate)

function  bmiCalculate (e) {
	e.preventDefault();
	let weight = document.querySelector("#weightInput").value;
	let height = document.querySelector("#heightInput").value ;

	//validate Input
	if( weight === "" || isNaN(weight))
	{
	return 	alert("Provide Valid Weight");
	}
	else if( height === "" || isNaN(height) ){
	return 	alert("Provide Valid Height");
	}
	else
	{
		let bmi = (weight / Math.pow(height,2) .toFixed(2));
	}

}