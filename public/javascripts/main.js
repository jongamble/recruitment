(function(window, document, $) {
	"use strict";

	$(document).on('submit','.recruitment-form', function(e){
		e.preventDefault();
		var formData = $(this).serialize();
		$.ajax({
			url: '/recruit',
			data: formData,
			dataType: 'json',
			method: 'POST',
			success: function(data, status, xhr){
				if(data.error === false){
					$('.recruitment-form').fadeOut();
					$('.recruitment-thankyou').delay(300).fadeIn();
  			}else{
          window.alert(data.message);
        }
      }
		});
	});

}(this, this.document, this.jQuery));
