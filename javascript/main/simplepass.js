'use strict';

function pwdCheck() {
	//configuration
	var a = "GGPb5629"

	//Cache DOM
	var pwd = document.getElementById("pwd").value;

	if(pwd==a) {
		document.location.href=pwd+".html";
	} else {
		alert("Try again");
	}
}