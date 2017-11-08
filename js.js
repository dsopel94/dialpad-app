var phoneNum = ''

function handleClick() {
	$('.btn-circle').on('click', function() {
		var number=$(this).attr("value");
		phoneNum += number;
		$('.phone-number').html(phoneNum)
	})
}

function handleClear(e) {
	$('#clear').on('click', function() {
		phoneNum = "";
		$('.phone-number').html(phoneNum)
	})
}

function handleBack() {
	$('.back').on('click', function() {
		var newNum = phoneNum.slice(0,-1)
		phoneNum = newNum
		console.log(newNum)
		$('.phone-number').html(phoneNum)
	})
}

function handleDial() {
	$('.dial').on('click', function() {
		$('.alert-success').removeClass('hidden')
		$('.alert-success').html("You dialed " + '<strong>' + phoneNum + '</strong>')
		if (phoneNum.length == 10) {
			$('.alert-success').html("You dialed " + '<strong>(' + phoneNum.substring(0,3) + ') ' +  phoneNum.substring(3,6) + '-' + phoneNum.substring(6,phoneNum.length) + '</strong>')
		}
		phoneNum = "";
		$('.phone-number').html('')
	})
}

$(document).ready(function() {
	handleClick();
	handleClear();
	handleBack();
	handleDial();
})