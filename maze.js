window.onload = main;
var flag = 0;
function main(){
		document.getElementById("start").addEventListener("mouseover", function(){
			document.getElementById("status").textContent = "Game In Session";
		});

		//Exercise 1
		document.getElementById("boundary1").addEventListener("mouseover", part1);

		//Exercise 2
		var Boundary = document.querySelectorAll(".boundary");
		for (var i = 0; i < Boundary.length-1; i++) {
				Boundary[i].addEventListener("mouseover", part2);
		}

		//Exercise 3
		//part3();

		//Exercise 4
		part4();

		//Exercise 6
		part6();
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
			document.getElementById("status").textContent = "You Lose! \n Click on the S to restart the game.";
			flag = 1;
	}
	//Exercise 5
	part5(flag);
}

//Exercise 3
/*function part3(){
	var End = document.getElementById("end");

		End.addEventListener("mouseover", function(){
			if (document.getElementsByClassName("boundary youlose").length == 0){
				alert("You Win!!");
			}
		});
}*/

//Exercise 4
function part4(){

	document.getElementById("start").addEventListener("click", function(){
  var boundary = document.querySelectorAll(".boundary");
	for (var i = 0; i < boundary.length-1; i++) {
			boundary[i].className = "boundary";
	}
  document.getElementById("status").textContent = "Game In Session";
  flag = 0;
	//Exercise 5
  part5(flag);
});

}

//Exercise 5
function part5(set){
	var status = document.getElementById("status");
	document.getElementById("end").addEventListener("mouseover", function(){
		if(set == 0){
			status.textContent = "You win!";
		}else{
			status.textContent = "You Lose!";
		}
	});
}

//Exercise 6
function part6(){
	var boundary = document.querySelectorAll(".boundary");
	document.getElementById("start").addEventListener("mouseout", function(){
		document.getElementById("maze").addEventListener("mouseleave", function(){
			for(var i = 0; i < boundary.length; i++){
				part2();
			}
		});
	});
}
