function init(){
    var div = document.getElementById('controlAddIn');
    div.innerHTML += '<div class="contenedor">' + 
                     '    <div id="app"></div>' +
                     '</div>';
    var appUrl = Microsoft.Dynamics.NAV.GetImageResource('app.js');
    appUrl = appUrl.replace('app.js','images/app.js');
    var runtimeScript = document.createElement('script');
    runtimeScript.src = appUrl;
    document.head.appendChild(runtimeScript);
 }

function HelloWorld(){
    //alert("Hello world");
}