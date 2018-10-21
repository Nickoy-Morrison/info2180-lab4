window.onload = main;
var flag = 0;
function main(){
		//Exercise 1
		document.getElementById("boundary1").addEventListener("mouseover", part1);

		//Exercise 2
		var boundary = document.querySelectorAll(".boundary");
		for (var i = 0; i < boundary.length-1; i++) {
				boundary[i].addEventListener("mouseover", part2);
		}

}

//Exercise 1
function part1(){
		this.setAttribute("class","boundary youlose");
}

//Exercise 2
function part2(){
	var boundary = document.querySelectorAll(".boundary");
	for(var i = 0; i < boundary.length; i++){
			boundary[i].className = "boundary youlose";
			flag = 1;
	}
	part5(flag);
}
