setTimeout(function(){
	let answer = document.getElementById('answer');

	$("#zero").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#one").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#two").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#three").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#four").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#five").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#six").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#seven").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#eight").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#nine").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#plus").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#minus").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#multiply").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#division").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#decimal").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    function calculate() {
    	let question = document.getElementById('answer').innerHTML;
    	let calcAnswer = eval(question);
    	question.innerHTML = calcAnswer;
    	answer.innerHTML = calcAnswer;
    }
    $("#equals").click(function (event) {
		calculate();
    });
    $("#clear").click(function (event) {
		$("#answer").html("");
    });
    $("#bracketLeft").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    $("#bracketRight").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
    });
    let funcMenu = document.getElementById('functionsMenu');
    funcMenu.style.visibility = "hidden";
    $("#functions").click(function (event) {
		funcMenu.style.visibility = "initial";
    });
    $("#closeFunc").click(function (event) {
		funcMenu.style.visibility = "hidden";
    });
    $("#exponent").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
		funcMenu.style.visibility = "hidden";
    });
    $("#sqrt").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
		funcMenu.style.visibility = "hidden";
    });
    $("#sine").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
		funcMenu.style.visibility = "hidden";
    });
    $("#cosine").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
		funcMenu.style.visibility = "hidden";
    });
    $("#tangent").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
		funcMenu.style.visibility = "hidden";
    });
    $("#asine").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
		funcMenu.style.visibility = "hidden";
    });
    $("#acosine").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
		funcMenu.style.visibility = "hidden";
    });
    $("#atangent").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
		funcMenu.style.visibility = "hidden";
    });
    $("#logx").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
		funcMenu.style.visibility = "hidden";
    });
    $("#logten").click(function (event) {
		let html = answer.innerHTML;
		$("#answer").html(html+event.target.innerHTML);
		funcMenu.style.visibility = "hidden";
    });
    let solveMenu = document.getElementById('solveMenu');
    solveMenu.style.visibility = "hidden";
    $("#solve").click(function (event) {
		solveMenu.style.visibility = "initial";
    });
    $("#solveClose").click(function (event) {
		solveMenu.style.visibility = "hidden";
    });
    $("#quadratic").click(function (event) {
    	solveMenu.style.visibility = "hidden";
		let solveFor = window.prompt('Solve For (a,b,c,x)');
		if (solveFor === "a") {
			let b = window.prompt('Enter b');
			let c = window.prompt('Enter c');
			let x = window.prompt('Enter x');
			let a = -(+b*(+x) + (+c))/((+x)**2);
			answer.innerHTML = a;
		} else if (solveFor === "b") {
			let a = window.prompt('Enter a');
			let c = window.prompt('Enter c');
			let x = window.prompt('Enter x');
			let b = (-(+a)*(+x)**2 - (+c))/(+x);
			answer.innerHTML = b;
		} else if (solveFor === "c") {
			let a = window.prompt('Enter a');
			let b = window.prompt('Enter b');
			let x = window.prompt('Enter x');
			let c = -(+a)*(+x)**2 - (+b)*(+x);
			answer.innerHTML = c;
		} else if (solveFor === "x") {
			let a = window.prompt('Enter a');
			let b = window.prompt('Enter b');
			let c = window.prompt('Enter c');
			let xBase = Math.sqrt((+b)**2 - 4*(+a)*(+c));
			let x1 = (-(+b) + (+xBase))/(2*(+a));
			let x2 = (-(+b) - (+xBase))/(2*(+a));
			answer.innerHTML = "x1 = " + x1 + " x2 = " + x2 + "";
		} else {
			answer.innerHTML = "ERROR. Invalid Variable";
		}
    });
    $("#linear").click(function (event) {
    	solveMenu.style.visibility = "hidden";
		let solveFor = window.prompt('Solve For (y,m,x,b)');
		if (solveFor === "y") {
			let m = window.prompt('Enter m');
			let x = window.prompt('Enter x');
			let b = window.prompt('Enter b');
			let y = (+m)*(+x) + (+b);
			answer.innerHTML = y;
		} else if (solveFor === "m") {
			let y = window.prompt('Enter y');
			let x = window.prompt('Enter x');
			let b = window.prompt('Enter b');
			let m = ((+y)-(+b))/(+x);
			answer.innerHTML = m;
		} else if (solveFor === "x") {
			let y = window.prompt('Enter y');
			let m = window.prompt('Enter m');
			let b = window.prompt('Enter b');
			let x = ((+y)-(+b))/(+m);
			answer.innerHTML = x;
		} else if (solveFor === "b") {
			let y = window.prompt('Enter y');
			let m = window.prompt('Enter m');
			let x = window.prompt('Enter x');
			let b = (+y) - (+m)*(+x);
			answer.innerHTML = b;
		} else {
			answer.innerHTML = "ERROR. Invalid Variable";
		}
    });
    $("#cubic").click(function (event) {
    	solveMenu.style.visibility = "hidden";
		let solveFor = window.prompt('Solve For (a,b,c,d,x)');
		if (solveFor === "a") {
			let b = window.prompt('Enter b');
			let c = window.prompt('Enter c');
			let d = window.prompt('Enter d');
			let x = window.prompt('Enter x');
			let a = (-(+b)*(+x)**2 - (+c)*(+x) - (+d))/(+x)**3;
			answer.innerHTML = a;
		} else if (solveFor === "b") {
			let a = window.prompt('Enter a');
			let c = window.prompt('Enter c');
			let d = window.prompt('Enter d');
			let x = window.prompt('Enter x');
			let b = (-(+a)*(+x)**3 - (+c)*(+x) - (+d))/(+x)**2;
			answer.innerHTML = b;
		} else if (solveFor === "c") {
			let a = window.prompt('Enter a');
			let b = window.prompt('Enter b');
			let d = window.prompt('Enter d');
			let x = window.prompt('Enter x');
			let c = (-(+a)*(+x)**3 - (+b)*(+x)**2 - (+d))/(+x);
			answer.innerHTML = c;
		} else if (solveFor === "d") {
			let a = window.prompt('Enter a');
			let b = window.prompt('Enter b');
			let c = window.prompt('Enter c');
			let x = window.prompt('Enter x');
			let d = -(+a)*(+x)**3 - (+b)*(+x)**2 - (+c)*(+x);
			answer.innerHTML = d;
		} else if (solveFor === "x") {
			let a = window.prompt('Enter a');
			let b = window.prompt('Enter b');
			let c = window.prompt('Enter c');
			let d = window.prompt('Enter d');
			let factor;
			let qArray = [];
			let pArray = [];
			let p = Math.abs(+d); //p/q = dividy numbers
			let q = Math.abs(+a);
			if (p === 0) {
				pArray = ['1','2','3','4','5','6','7','8','9','10','1/2','1/3','1/4','1/5','1/6','1/7','1/8','1/9','1/10','2/3','2/4','2/5','2/6','2/7','2/8','2/9','2/10','3/4','3/5','3/6','3/7','3/8','3/9','3/10','4/5','4/6','4/7','4/8','4/9','4/10','5/6','5/7','5/8','5/9','5/10','6/7','6/8','6/9','6/10','7/8','7/9','7/10','8/9','8/10','9/10'];
			}
			for (let i = 1; i <= p; i++) {
				if(p % i == 0) {
					pArray.push(i);
					pArray.push(-i);
				}
			}
			//console.log("PARRAY" + pArray);
			for (let i = 1; i <= q; i++) {
				if(q % i == 0) {
					qArray.push(i);
					qArray.push(-i);
				}
			}
			//console.log("QARRAY" + qArray);
			let dividyNumbers = [];
			let dividyOne;
			for (let i = 0; i <= pArray.length - 1; i++) {
				for(let z = 0; z <= qArray.length - 1; z++) {
					dividyOne = eval(pArray[i]);
					//console.log(dividyOne);
					dividyTwo = eval(qArray[z]);
					if (dividyOne === 0) {
						dividyOne = 1;
					}
					if (dividyTwo === 0) {
						dividyTwo = 1;
					}
					//console.log(dividyTwo);
					dividyNumbers.push((+dividyOne)/(+dividyTwo));
					//console.log(dividyNumbers);
				}
			}
			let newA;
			let newB;
			let newC;
			let newD;
			//console.log('CUBIC DOESNT WORK IF D=0');
			function factorCubic() {
				let realFactor = -(+factor);
				newA = a;
				let subB = (+newA)*(+realFactor);
				//console.log("newA " + newA);
				//console.log("realFactor " + realFactor);
				//console.log("subB " + subB);
				newB = (+b) + (+subB);
				//console.log("newB " + newB);
				let subC = (+newB)*(+realFactor);
				//console.log("subC " + subC);
				newC = (+c) + (+subC);
				//console.log("newC " + newC);
				let subD = (+newC)*(+realFactor);
				newD = (+d) + (+subD);
				//console.log('NEW D' + newD);
				//console.log('FACTORED: ' + newA + 'x2 ' + newB + 'x ' + newC);
				let xBase = Math.sqrt((+newB)**2 - 4*(+newA)*(+newC));
				if (newD <= 0.05 && newD >= -0.05) {
					let x1 = realFactor;
					let x2 = (-(+newB) + (+xBase))/(2*(+newA));
					let x3 = (-(+newB) - (+xBase))/(2*(+newA));
					answer.innerHTML = 'x<sub>1</sub> = ' + x1 + " x<sub>2</sub> = " + x2 + " x<sub>3</sub> = " + x3 + "";
				}
			}
			let dividyNum;
			let numberFactorThing;
			let diff;
			let stop = false;
			let dividyNumberIdx = 0;
			let negdividyNum;
			//console.log(dividyNumbers);
			while (stop != true) {
				if (dividyNumberIdx === dividyNumbers.length) {
					stop = true;
				}
				dividyNum = dividyNumbers[dividyNumberIdx];
				dividyNumberIdx = +dividyNumberIdx + 1;
				//console.log('dividyNum:' + dividyNum);
				negdividyNum = -(+dividyNum);
				numberFactorThing = (+a)*((negdividyNum)**3) + (+b)*((negdividyNum)**2) + (+c)*(negdividyNum) + (+d);
				//console.warn(numberFactorThing);
				diff = Math.abs(numberFactorThing);
				if (diff < 0.05) {
					factor = (dividyNum);
					//console.log(factor);
					factorCubic();
					if (newD <= 0.05 && newD >= -0.05) {
						break;
						stop = true;
					} else {
						console.log('Factored wrong. TRYING AGAIN...');
					}
				}
			}
 		} else {
			answer.innerHTML = "ERROR. Invalid Variable";
		}
    });
	$("#exponential").click(function (event) {
    	solveMenu.style.visibility = "hidden";
		let solveFor = window.prompt('Solve For (a,b,c,x)');
		if (solveFor === "a") {
			let b = window.prompt('Enter b');
			let c = window.prompt('Enter c');
			let x = window.prompt('Enter x');
			let a = 
			answer.innerHTML = a;
		} else if (solveFor === "b") {
			let a = window.prompt('Enter a');
			let c = window.prompt('Enter c');
			let x = window.prompt('Enter x');
			answer.innerHTML = b;
		} else if (solveFor === "c") {
			let a = window.prompt('Enter a');
			let b = window.prompt('Enter b');
			let x = window.prompt('Enter x');
			answer.innerHTML = c;
		} else if (solveFor === "x") {
			let a = window.prompt('Enter a');
			let b = window.prompt('Enter b');
			let c = window.prompt('Enter c');
			answer.innerHTML = x;
		} else {
			answer.innerHTML = "ERROR. Invalid Variable";
		}
    });
}, 1000);
//\pi, ℏ, c, g, R, N<sub>A</sub>, 