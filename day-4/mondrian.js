$(document).ready(function () {

	let background = "none"

	$(".backgrounds").on("click", function () {
		background = $(this).css('background-image');
		})

		$('.box').on('click', function () {
		$(this).css("background-image", background );
		});
	});

	function clearAll() {
		background = 'none'
		$('.box').css("background-image", background);
	}

	function copy() {
		var copyText = document.getElementById("copy");
	
		navigator.clipboard.writeText("Blainthomas12@gmail.com");
	
		alert("Copied the email Blainthomas12@gmail.com");
	}