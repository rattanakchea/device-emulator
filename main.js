(function() {

    var currentDevice = $("select option:selected").val();
    var appFrame = $('div#app-frame');
    var appWrapper = $('div#app-wrapper');
 
    var skinImages = {
        androidPhone: '../img/android-skin.png',
        iphone: '../img/iphone-skin.png',
        ipad: '../img/ipad-skin.png'
    };

    var devices = {
        androidPhone: 'android-phone',
        iphone: 'iphone',
        ipad: 'ipad'
    };

    var skin = $('#app-wrapper');

    $('select').on('change', function() {
        var device = this.value;

        if (device == devices.iphone) {
            skin.css('background-image', 'url(' + skinImages.iphone + ')');
            appFrame.css('height', '530px');

        } else if (device == devices.androidPhone) {
            skin.css('background-image', 'url(' + skinImages.androidPhone + ')');
            appFrame.css('height', '505px');

        } else if (device == devices.ipad) {
            skin.css('background-image', 'url(' + skinImages.ipad + ')');
            appFrame.css('height', '570px');
        }
    });

})();
