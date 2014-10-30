cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/uk.co.ilee.nativetransitions/www/nativetransitions.js",
        "id": "uk.co.ilee.nativetransitions.NativeTransitions",
        "clobbers": [
            "nativetransitions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "uk.co.ilee.nativetransitions": "0.1.4",
    "org.apache.cordova.splashscreen": "0.3.4"
}
// BOTTOM OF METADATA
});