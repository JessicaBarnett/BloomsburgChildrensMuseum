
	var checkRadio = document.getElementById("useCheck");
	var cardRadio = document.getElementById("useCard");

	var sameAddressRadio = document.getElementById("sameAddress");
	var diffAddressRadio = document.getElementById("diffAddress");

	var cardInfo = document.getElementById("cardInfo");
	var checkInfo = document.getElementById("checkInfo");

	var billAddress = document.getElementById("billingAddress");

	var billAddress1 = document.getElementById("billAddress1");
	var billAddress2 = document.getElementById("billAddress2");
	var billCity = document.getElementById("billCity");
	var billState = document.getElementById("billState");
	var billZip = document.getElementById("billZip");

	var address1 = document.getElementById("address1");
	var address2 = document.getElementById("address2");
	var city = document.getElementById("city");
	var state = document.getElementById("state");
	var zip = document.getElementById("zip");

	hideAll();

	function hideAll(){
		cardInfo.style.display="none";
		checkInfo.style.display="none";
		billAddress.style.display="none";
	}

	function showCardStuff(){
		checkInfo.style.display="none";
		cardInfo.style.display="block";
	}

	function showCheckStuff(){
		checkInfo.style.display="block";
		cardInfo.style.display="none";
	}


	function togglePayMethod() {
		if (checkRadio.checked){
			showCheckStuff();
		}
		else if (cardRadio.checked){
			showCardStuff();
		}
	}


	function toggleBillAddress() {
		if (sameAddressRadio.checked){
			sameBillAddress();
		}
		else if (diffAddressRadio.checked){
			diffBillAddress();
		}
		showBillAddress();
		console.log("toggled");
	}


	function showBillAddress(){
		billAddress.style.display="block";
	}

	function sameBillAddress(){
		billAddress1.placeholder = address1.value;
		billAddress2.placeholder = address2.value;
		billCity.placeholder = city.value;
		billState.placeholder = state.value;
		billZip.placeholder = zip.value;
	}

	function diffBillAddress(){
		billAddress1.placeholder = "address 1";
		billAddress2.placeholder = "address 2";
		billCity.placeholder = "city";
		billState.placeholder = "state";
		billZip.placeholder = "zip";
	}


