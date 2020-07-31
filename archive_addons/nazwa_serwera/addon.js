$('<div id="nameSerwer"></div>').appendTo('#panel');

g.loadQueue.push({fun:function(){
    $("#nameSerwer").text(g.worldname);
}})

$(`<style>
#nameSerwer {
    position: absolute;
    width: 70px;
    height: 20px;
    left: 135px;
    top: 472px;
    background: #273032;
    text-align: center;
    border-radius: 7px;
    border: double #596c70;
	font: 15px Tahoma;
	color: #d7cccc;
	z-index: 300;
}
</style>`).appendTo('head');