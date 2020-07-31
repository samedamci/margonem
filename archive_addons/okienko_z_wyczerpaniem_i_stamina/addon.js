// poprawione przez Pręciaż (Baka Ave)

$('<div id="expAsist-wyczerpanie"></div>').appendTo('#centerbox');
$('<div id="expAsist-stamina"></div>').appendTo('#centerbox');

$(`<style>
#expAsist-wyczerpanie,  #expAsist-stamina {
    position: absolute;
    width: 70px;
    height: 20px;
    left: 434px;
    top: 2px;
    background: #273032;
    text-align: center;
    border-radius: 7px;
    border: double #596c70;
	font: 15px Tahoma;
	color: #d7cccc;
	z-index: 300;
}
#expAsist-stamina {
    top: 29px;
}
</style>`).appendTo('head');

(pI => {
	parseInput = function (a, b, c) {
  		let stamina;
		if (isset(a.h) && isset(a.h.stamina_ts) && (stamina = Math.min(50, Math.floor((((new Date()).getTime() / 1000) - a.h.stamina_ts) / 60)), $("#expAsist-stamina").text(stamina), stamina < 50))
			(s_ts => {

				const stamina_loop = setInterval(s_ts => {
						const stamina = Math.floor((((new Date()).getTime() / 1000) - s_ts) / 60);
						if (stamina >= 50)
							clearInterval(stamina_loop);
						else
							$("#expAsist-stamina").text(stamina);

					}, 1000 * 60, s_ts);

			})(a.h.stamina_ts);

		if (isset(a.h) && isset(a.h.ttl))
			$("#expAsist-wyczerpanie").text(a.h.ttl);
		pI(a, b, c);
	}
})(parseInput);