$('<link rel="stylesheet" type="text/css" href="https://samedamci.github.io/SameGray/style.css"/>').appendTo('head');

$('#leorn1').attr('src', 'https://i.imgur.com/Cy5p7Ux.png');
$('#leorn2').attr('src', 'https://i.imgur.com/t38z8Gt.png');

$(".ld-hor, .ld-ver, .rt-hor, .rt-ver, .rd-hor, .rd-ver, .lt-hor, .lt-ver, DIV#b_help").hide();

$(`<div id="pasek"><div id="wycz"></div></div><div id="pole"></div>`).appendTo(`#panel`);

$("#b_addons").hover(function() {
	$("#b_addons").css({
		'background-position': '0px 20px'
	});
	}, function() {
	$("#b_addons").css({
		'background-position': '0px 0px'
	});
});

setInterval(function obliczanieprocentu(){
  var procentwyczerpania = Math.floor(hero.ttl / 3.6) + "%";
  document.getElementById("wycz").style.width = procentwyczerpania;
  
}),10000;