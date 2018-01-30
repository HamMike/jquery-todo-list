


$(document).ready(function() {
	$("#submitbutton").on("click", function(e) {
		e.preventDefault();
		var inputText = $("#formbox").val();
		$("ul").append( $('<li>' + inputText + ' <button type="button">remove</botton></li>'));
		$("#formbox").val('');
		$("#formbox").focus();
		
		
	});

	$("ul").on("click", "li", function() {
		$(this).remove();
	});


});



 