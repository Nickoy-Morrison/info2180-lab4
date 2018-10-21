window.onload = main;
var flag = 0;
function main(){
		//Exercise 1
		document.getElementById("boundary1").addEventListener("mouseover", part1);

		//Exercise 2
		var Boundary = document.querySelectorAll(".boundary");
		for (var i = 0; i < Boundary.length-1; i++) {
				Boundary[i].addEventListener("mouseover", part2);
		}

		//Exercise 3
		part3();
}

//Exercise 1
function part1(){
		this.setAttribute("class","boundary youlose");
}

//Exercise 2
function part2(){
	var Boundary = document.querySelectorAll(".boundary");
	for(var i = 0; i < Boundary.length; i++){
			Boundary[i].className = "boundary youlose";
			flag = 1;
	}
	//part5(flag);
}

//Exercise 3
function part3(){
	var End = document.getElementById("end");

		End.addEventListener("mouseover", function(){
			if (document.getElementsByClassName("boundary youlose").length == 0){
				alert("You Win!!");
			}
		});
}
