// ==UserScript==
// @name         NIonSI
// @updateURL    http://samedamci.github.io/NIonSI/motyw/script.user.js
// @version      0.1
// @description  Motyw do gry Margonem.
// @author       Samedamci
// @match        http://*.margonem.pl/
// @grant        none
// ==/UserScript==

$('<link rel="stylesheet" type="text/css" href="https://samedamci.github.io/NIonSI/motyw/style.css"/>').appendTo('head');

$("#corners>img[src='img/border-r.png']").attr("src", "https://i.imgur.com/w3VqvMK.png");
$("#corners>img[src='img/border-l.png']").attr("src", "https://i.imgur.com/u2h0JUO.png");
$("#corners>img[src='img/border-u.png']").attr("src", "https://i.imgur.com/As45XaN.png");
$("#corners>img[src='img/border-d.png']").attr("src", "https://i.imgur.com/vzENYIa.png");
$('.ld-hor, .ld-ver, .rt-hor, .rt-ver, .rd-hor, .rd-ver, .lt-hor, .lt-ver, #leorn1, #leorn2, .golden-text, #recipes .recipe-header, DIV#b_help, #mytr_value, #tr2_value ').remove();

$("#gold_shop_banner, #sl_shop_banner").remove()

function NIonSI_expbar() {
if(hero.ttl<1){  $("#exp2").css({ background: 'url("https://i.imgur.com/ze5DkPO.png")' });
} else { $("#exp2").css({ background: 'url("https://i.imgur.com/0yuI3os.png")' })};
};
setInterval(NIonSI_expbar,1000);

g.loadQueue.push({fun:function(){
$('#pvpmode').mouseover();
$('#pvpmode').mouseout();
  $("#tip-o1, #tip-o2").remove();
$("#tip").css({background: 'url(http://i.imgur.com/PUG3Ps7.png)', borderRadius: "15x"}); },data:''});

(function () {
	var style = "<style>#config{background:url(https://i.imgur.com/4EjqCwo.png) no-repeat bottom center}</style>";
	$(style).appendTo("Head");
  } )();
(function () {
	var style = "<style>#match-details-wnd{background:url(https://i.imgur.com/TlW9Whg.png) no-repeat bottom center}</style>";
	$(style).appendTo("Head");
  } )();

g.loadQueue.push({fun: function() {
showDialog = function(d,a){var grafaq='https://i.imgur.com/Gq657Ac.png',grafas='https://i.imgur.com/Gq657Ac.png',c=d.lastIndexOf("."),b=d.length-c;if(c>0&&(b==4||b==5)){$("#dlgwin .w2").css("backgroundImage","url("+(d=='quests-title.png'?grafaq:(d=='help-title.png'?grafas:"img/"+d))+")").html(a);$("#dlgtitle").empty()}else{$("#dlgwin .w2").css("backgroundImage","url(img/empty-title.png)").html(a);$("#dlgtitle").html(d)}$("#dlgwin").absCenter().fadeIn("fast");$("#dlgwin .w1").css("backgroundPosition","0 "+($("#dlgwin .w1").height()-28)+"px");g.lock.add("dialogalert")};
}});

if (typeof(configFix) == "undefined") {
		configFix = true;
  document.getElementsByClassName("conf-title")[0].innerHTML += '<div id="config_bg_filler" style="position: absolute; z-index: -1; background-image: url(https://i.imgur.com/CCeLKjd.png); width: 400px; height: 300px;"></div>';}

g.tutor = 0;
$("#tutorial").remove();
reCenter();

$("#b_addons").css({
    position: 'absolute',
    left: 120,
    top: 512,
    background: 'url(https://i.imgur.com/EFPfIVj.png)',
    width: 68,
    height: 20,
    'background-position': '0px 0px',
    'cursor': 'pointer'
}).appendTo("#panel");
$("#b_addons").hover(function() {
    $("#b_addons").css({
        'background-position': '0px 20px'
    });
}, function() {
    $("#b_addons").css({
        'background-position': '0px 0px'
    });
});