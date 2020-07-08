var getpassword=document.getElementById('pass');

getpassword.onfocus=function(){
	document.getElementById('mess').style.display='block';
}

getpassword.onblur=function(){
	document.getElementById('mess').style.display='none';
}


function password(){
	if (getpassword.value.match(/[A-Z]/g)) {
	document.getElementById("upper").style.color='green';
	}
	else{
	document.getElementById("upper").style.color='grey';	
	}

	if (getpassword.value.match(/[a-z]/g)) {
	document.getElementById("lower").style.color='green';
	}
	else{
	document.getElementById("lower").style.color='grey';
    }

    if (getpassword.value.match(/[0-9]/g)) {
	document.getElementById("digit").style.color='green';
	}
	else{
	document.getElementById("digit").style.color='grey';	
	}

	if (getpassword.value.match(/[^a-zA-Z\d]/g)) {
	document.getElementById("special").style.color='green';
	}
	else{
	document.getElementById("special").style.color='grey';	
	}

	if (getpassword.value.length>=8) {
	document.getElementById("len").style.color='green';
	document.getElementById("icon").style.color='green';
	}
	else{
	document.getElementById("len").style.color='grey';	
	document.getElementById("icon").style.color='red';
	} 

	
}