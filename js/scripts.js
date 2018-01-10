$(function() {
	$("#addNewEntry").css('display', 'none');
	$("#tabs").append('<li id="newitem_tab"><a href="#">New Item</a></li>');
	$('div.item').children().not('h4').hide();
	
	// toggles display of items
	$('div.item').css('cursor', 'pointer').click(function(e) {
		if (!$(e.target).is('textarea')) {
			$(this).children().not('h4').slideToggle();
		}
	});
	
	// add new item tab click
	
	$("#tabs li").click(function() {
		$("#tabs li").removeClass('selected');
		$(this).addClass('selected');
		
		if($(this).attr('id') == 'newitem_tab') {
			$('#todo').css('display', 'none');
			$('#addNewEntry').css('display', 'block');
		} else {
			$('#todo').css('display', 'block');
			$('#addNewEntry').css('display', 'none');			
		}
	});
	
	$("#todo div:first").children().show();
	
	// Delete entry
	
	$('a.deleteEntryAnchor').click(function() {
		var thisparam = $(this);
		thisparam.parent().parent().find('p').text('Please Wait...');
		$.ajax({
			type: "GET",
			url: thisparam.attr('href'),
			success: function() {
				thisparam.parent().parent().fadeOut('slow');
			}
		});
		return false;
	});
	
	// update description
	
	$('.editEntry').click(function() {
		var $this = $(this);
		var oldText = $this.parent().parent().find('p').text();
		var id = $this.parent().parent().find("#id").val();
		$this.parent().parent().find('p').empty().append('<textarea class="newDescription" cols="33">' + oldText + '</textarea>');
		
		$('.newDescription').blur(function() {
			var newText = $(this).val();
			$.ajax({
				type: 'POST',
				url: 'updateEntry.php',
				data: 'description=' + newText + '&id=' + id,
				
				success: function() {
					$this.parent().parent().find('p').empty().append(newText);
				}
			})
		});
		return false;
	});

});
