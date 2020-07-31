$("#corners>img[src='img/border-u.png']").attr("src", "https://i.imgur.com/WsmDhcW.png");
$("#corners>img[src='img/border-d.png']").attr("src", "https://i.imgur.com/u9KtqAt.pngg");
$("#corners>img[src='img/border-r.png']").attr("src", "https://i.imgur.com/0KiWJpa.png");
$("#corners>img[src='img/border-l.png']").attr("src", "https://i.imgur.com/YoBZRbU.png");

$('.ld-hor, .ld-ver, .rt-hor, .rt-ver, .rd-hor, .rd-ver, .lt-hor, .lt-ver, #leorn1, #leorn2').remove()

$('<link rel="stylesheet" type="text/css" href="https://dl.dropboxusercontent.com/s/0i05fx4ve8nhg7j/sameblue2.css" />').appendTo('head')

function NIonSI_expbar() {
if(hero.ttl<1){  $("#exp2").css({ background: 'url("https://i.imgur.com/ze5DkPO.png")' });
} else { $("#exp2").css({ background: 'url("https://i.imgur.com/0yuI3os.png")' })};
};
setInterval(NIonSI_expbar,1); 

if (typeof(configFix) == "undefined") {
		configFix = true;
  document.getElementsByClassName("conf-title")[0].innerHTML += '<div id="config_bg_filler" style="position: absolute; z-index: -1; background-image: url(https://i.imgur.com/64wRtKp.png); width: 400px; height: 300px;"></div>';}
var t = new Date(); t.setTime(t.getTime() + 365 * 24 * 60 * 60 * 1000);
if (getCookie('changeTheme') === null) setCookie('changeTheme', 'false', t);
(function () {
	var style = "<style>#config{background:url(https://i.imgur.com/64wRtKp.png) no-repeat bottom center}</style>";
	$(style).appendTo("Head");
  } )();