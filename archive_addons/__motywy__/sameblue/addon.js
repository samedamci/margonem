$('#leorn1').attr('src','http://i.imgur.com/mnls00g.gif'); 
$('#leorn2').attr('src','http://i.imgur.com/dUVClAF.gif');

$('<link rel="stylesheet" type="text/css" href="https://dl.dropboxusercontent.com/s/v6a8v8reyqtunar/skrypt_sameblue.css" />').appendTo('head')

if (typeof(configFix) == "undefined") {
		configFix = true;
  document.getElementsByClassName("conf-title")[0].innerHTML += '<div id="config_bg_filler" style="position: absolute; z-index: -1; background-image: url(https://i.imgur.com/64wRtKp.png); width: 400px; height: 300px;"></div>';}
var t = new Date(); t.setTime(t.getTime() + 365 * 24 * 60 * 60 * 1000);
if (getCookie('changeTheme') === null) setCookie('changeTheme', 'false', t);
(function () {
	var style = "<style>#config{background:url(https://i.imgur.com/64wRtKp.png) no-repeat bottom center}</style>";
	$(style).appendTo("Head");
  } )();