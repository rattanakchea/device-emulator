(function () {
    
  var currentDevice = $( "select option:selected" ).val();
  console.log('currentDevice: ', currentDevice);

  var skinImages = {
  	androidPhone: 'https://creator.ionic.io/img/android-skin.png',
  	iphone: 'https://creator.ionic.io/img/iphone-skin.png',
  	ipad: 'https://creator.ionic.io/img/ipad-skin.png'
  };

  var devices = {
  	androidPhone: 'android-phone',
  	iphone: 'iphone',
  	ipad: 'ipad'
  };

  var skin = $('#app-test');

    $('select').on('change', function(){

    	var device = this.value;

    	// if (device == currentDevice){
    	// 	return;
    	// }

    	if (device == devices.iphone){    	
    		console.log('iphone skin');
    		skin.css('background-image', 'url(' + skinImages.iphone + ')' );
    	} else if (device == devices.androidPhone){
    		skin.css('background-image', 'url(' + skinImages.androidPhone + ')' );
    	} else if (device == devices.ipad){
    		skin.css('background-image', 'url(' + skinImages.ipad + ')' );
    	}
    });

})();