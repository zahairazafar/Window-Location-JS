
// Change heading on the specific page of custom widgets -----
jQuery(document).ready(function($) {
	if(window.location.href.indexOf("/websites-for-accountants/") > -1){
		$('.inner-request-formcol .text1').text('Request a Quote for Your Accounting Website');
	}
});
