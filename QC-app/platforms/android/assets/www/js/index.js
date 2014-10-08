$(document).ready(function() {
    $('button').click(function() {
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");
        scanner.scan( function (result) {$('#QR').append("<p>"+result.text+"</p>");})})
        });