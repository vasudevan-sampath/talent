var i = 13;

function createImg2()
{
		var y = document.createElement("td");
		var z = document.createElement("img");
		y.appendChild(z);
		y.id = "x";

	  	var c = document.getElementById("images");
	  	c.appendChild(y);
	  	z.id = "img2";
	  	z.style ="height:250px;object-fit:cover;";
}

function createImg3()
{
		var y = document.createElement("td");
		var z = document.createElement("img");
		y.appendChild(z);
		y.id = "xx";

	  	var c = document.getElementById("images");
	  	c.appendChild(y);
	  	z.id = "img3";
	  	z.style ="height:250px;object-fit:cover;";
}


function validate()
{

	document.getElementById("Answer").value = document.getElementById("Answer").value.toUpperCase();
	if(document.getElementById("Answer").value == vasu[i-1]) 
	{	
		document.getElementById("out").innerHTML = "CORRECT ANSWER!!!";
	  	i++;
	  	document.getElementById("sub").style.display = "none";
	  	document.getElementById("next").style.display = "block";
	 }
	else
	{   
		document.getElementById("out").innerHTML = "Wrong Answer. Try Again!!!!";
		document.getElementById("Answer").value ="";
		document.getElementById("Answer").focus();
	 }
}

function nextqn()
{

	document.getElementById("Answer").value ="";
	document.getElementById("next").style.display = "none";
  	document.getElementById("sub").style.display  = "block";
	document.getElementById("out").innerHTML = "";
	document.getElementById("Answer").focus();
	switch(i)
	{ 
	  case  1:  document.getElementById("img1").src = "src/cric.jpg";
	  			createImg2();
	  			document.getElementById("img2").src = "src/god.png";
	  		  	break;
	  case 2:  	document.getElementById("x").remove();
  	  			document.getElementById("img1").src = "src/20032010.jpg";
	  		  	break;
	  case 3: 	document.getElementById("img1").src = "src/paris.jpg";
	  			createImg2();
	  			document.getElementById("img2").src = "src/b.jpg";
	  		  	break;
  	  case 4:  	document.getElementById("x").remove();
  	  			document.getElementById("img1").src = "src/mava.jpg"; 
  	  			makeimg1();  	  
	  		  	break;
   	  case 5:  	remimg1();
	  			document.getElementById("img1").src = "src/gm.png";
	  			process1();
	  		  	break;
	  case 6:  	unprocess1();
	  			document.getElementById("img1").src = "src/thala.jpg";
	  			document.getElementById("Answer").placeholder = "home";
	  		  	break;
	  case 7:   document.getElementById("img1").src = "src/thumbsup.jpg";
	  			document.getElementById("img1").title = "I Will CC you";
	  		  	document.getElementById("Answer").placeholder = "";
	  		  	break;
	  case 8:   document.getElementById("img1").title = "";
	            document.getElementById("Title1").innerHTML ="12.949823, 77.699843";
	  			document.getElementById("img1").src = "src/ilu.jpg";
	  		  	break;
	  case 9:  	document.getElementById("img1").src = "src/ma.jpg";
	  		  	break;
	  case 10:  document.getElementById("img1").src = "src/chakra.jpg";
	  			createImg2();
	  			document.getElementById("img2").src = "src/ind.png";
	  			createImg3();
	  			document.getElementById("img3").src = "src/chess.jpg";
	  		  	break; 
	  case 11:  document.getElementById("x").remove();
  	  			document.getElementById("xx").remove();
  	  			document.getElementById("img1").src = "src/espr.jpg";
	  			break;
  	  case 12:  document.getElementById("img1").src = "src/fullbrain.jpg";
	  			createImg2();
	  			document.getElementById("img2").src = "src/brain.jpg";
	  			createImg3();
	  			document.getElementById("img3").src = "src/white.jpg";
	  			break;
	  case 13:  thankyoupage();
	            break; 
      default:  break;
	  		  }
}

//var vasu=[1,2,3,4,5,6,7,8,9,10,11,12];
var vasu =["SACHIN DANIEL OOMMEN","SHALINI","LAKSHMI PATHY S N","NIHARIKA SINHA","CINDY SALAZAR","ANUBHAV APURVA","AJIT MARUTHI KARALE","DEEPAK MAHENDRAKER","ILAVALUTHY MAHENDRAN","ASHOK VISWANATHAN","VASUDEVAN SAMPATH","VASUDEVAN SAMPATH"];   

function process1()
{
	var i = document.getElementById("img1");
	var a = document.createElement("a");
	var t = document.getElementById("td1");
	i.remove();
	t.appendChild(a);
	a.appendChild(i);
	a.href = "ITellYouWhereCONFAUXis";
	a.target = "_blank";
}

function unprocess1()
{
	var i = document.getElementById("img1");
	var a = document.createElement("a");
	var t = document.getElementById("td1");
	a.remove();
	t.appendChild(i);
}

function Premam()
{
  document.getElementById('img1').src = "src/cak.jpg";
}
function unPremam()
{
  document.getElementById('img1').src = "src/mava.jpg";
}
function zooPremam()
{

}
function makeimg1()
{
	document.getElementById('img1').onmouseover = Premam;
	document.getElementById('img1').onmouseout = unPremam;
}

function remimg1()
{
	document.getElementById('img1').onmouseover = sand;
	document.getElementById('img1').onmouseout  = sand;
}
function sand()
{
}
function page1()
{
	document.getElementById("c").style.display = "block";
	document.getElementById("h").style.display = "none";
	document.getElementById("k").style.display = "none";
	nextqn();
}
function thankyoupage()
{
	document.getElementById("h").style.display = "none";
	document.getElementById("k").style.display = "none";
    document.getElementById("c").innerHTML = "Thank you ALL <br /> <br /> Have a Nice Day!!!";
    document.getElementById("c").style = "margin-top:200px;font-size:40px;";
}