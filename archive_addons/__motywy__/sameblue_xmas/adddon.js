if (typeof(configFix) == "undefined") {
		configFix = true;
  document.getElementsByClassName("conf-title")[0].innerHTML += '<div id="config_bg_filler" style="position: absolute; z-index: -1; background-image: url(https://i.imgur.com/AiaCPPN.png); width: 400px; height: 300px;"></div>';}
var t = new Date(); t.setTime(t.getTime() + 365 * 24 * 60 * 60 * 1000);
if (getCookie('changeTheme') === null) setCookie('changeTheme', 'false', t);

g.loadQueue.push({
    fun: function() {
        $('<div id="checkboxTheme">Świąteczne tło</div>').appendTo('#cfg_options').click(function() {
            if ($('#checkboxTheme').attr('style') == 'background-position: 0px -22px') {
                $('#checkboxTheme').attr('style', 'background-position: 0px 0px');
                setCookie('changeTheme', 'false', t);
            } else {
                $('#checkboxTheme').attr('style', 'background-position: 0px -22px');
                setCookie('changeTheme', 'true', t);
            }
        });
        if (getCookie('changeTheme') == 'true') $('#checkboxTheme').attr('style', 'background-position: 0px -22px');
        else $('#checkboxTheme').attr('style', 'background-position: 0px 0px');
    },
    data: ''
});

if (getCookie('changeTheme') == 'true') {
    $('#checkboxTheme').attr('style', 'background-position: 0px -22px');    
                $("body").css({ background: 'url(http://sternegeschichte.blog.onet.pl/wp-content/blogs.dir/800756/files/blog_kf_4986557_7730413_sz_tlo92.gif)', position: 'center' });
} else {
    $('#checkboxTheme').attr('style', 'background-position: 0px 0px');
    $('<link rel="stylesheet" type="text/css" href="https://dl.dropbox.com/s/e4yn5l7onqshxcy/motyw.css" />').remove('Head');
}
$('<style type="text/css">.MM-big-button.MM-rank-button, .MM-big-button.MM-fight-button {background-Image: url(https://i.imgur.com/9rYOUza.png)};</style>').appendTo("head");
$("<img ctip='t_item' tip='<center><b><b class=heroic>SameBlue BN</b></b><br><B>© SMSS 2017<b><b class=heroic>public ver.</b></b></b></center><br><B>update source:</B><b class=legendary>public</b>' src='https://i.imgur.com/m89MJQq.png'>").css({position: 'absolute', top: '512px', left: '94px'}).appendTo("#panel")//   $("<img ctip='t_item' tip='<center><b><b class=heroic>NIonSI</b></b><br><B>© SMSS 2017<b><b class=heroic>ver. 1.2.2.2</b></b></b></center><br><B>update source:</B><b class=legendary>public</b>' src='https://i.imgur.com/SafYVZ1.png'>").css({position: 'absolute', top: '512px', left: '94px'}).appendTo("#panel")
$('<div style="width: 50px; height: 50px; background: url(http://a.deviantart.net/avatars/s/e/sexlessdemon.gif); position:absolute; z-index: 300;  top: 210px; right: 144px;" id="obrazek" ctip="t_item" tip="<b>Rudolf czerwononosy</b><b class=artefact>* artefakt *</b><center><i>Pamiętaj o otwieraniu okienek w kalendarzu adwentowym i zadaniach dziennych!<br><br><b>Wskazówki:</b>Kliknij na mnie - włącz kolędy.<br>Wciiśnij F5 - wyłącz kolędy.<br><br><br><b>Wesołych Świąt i szczęśliwego Nowego Roku!</b></center>"></div>').appendTo('#centerbox').click(function(){ mAlert('<center><img src="https://www.margonem.pl/obrazki/npc/mas/sanie-mikolaja.gif"><br><b>Wesołych Świąt!</b><iframe width="1" height="1" src="//www.youtube.com/embed/d3877OxKnks?=&amp;autoplay=1" frameborder="0" allowfullscreen="" autoplay="1"></iframe><br>Aby wyłączyć kolędy wciśnij F5!<center>'); });
$("#nick").css({"color": "orange",}); $("#nick").css({"text-shadow": "1px 1px 10px black",});
$('<style type="text/css">#ahselect {background-Image: url(https://i.imgur.com/tgdJK20.png)};</style>').appendTo("head");
$('<style type="text/css">#depo {background-Image: url(https://i.imgur.com/JMaCkTx.png)};</style>').appendTo("head");
$('<style type="text/css">BUTTON#depo-goldout, BUTTON#depo-goldin, BUTTON#depo-toggle, #depo-gold INPUT {background-Image: url(https://i.imgur.com/MS4JyC9.png)};</style>').appendTo("head");
$("#b_pvp, #b_recipes").remove();
$(`<div id=b__pvp tip='Miecze: zgoda na PvP<br>Tarcza: brak zgody<br>Kliknięcie prawym: recepty' onclick='hero.togglePvp()'></div>`).css({
  'background-image': 'url(https://i.imgur.com/3BlT1GV.png)',
  'background-position': '-22px 0px',
  left: '60px',
  border: 'none',
    width: '22px',
    height: '22px',
    position: 'absolute',
  top: '0px'
  }).appendTo("#buttons").rightClick(() => _g("craft&a=list"));
g.loadQueue.push({fun: () => $("#b__pvp").data("bp", hero.pvp ? "0px 0px" : "-0px -22px").css("backgroundPosition", hero.pvp ? "0px 0px" : "0px -22px"), data: ''});
hero.togglePvp = function() {
        this.pvp = this.pvp ? 0 : 1;
        _g("setpvp&mode=" + this.pvp);
        $("#b__pvp").data("bp", hero.pvp ? "0px 0px" : "-0px -22px").css("backgroundPosition", hero.pvp ? "0px 0px" : "0px -22px")
}
$("#panel").css({background: 'url(https://i.imgur.com/ynCUNGp.png)'}); 
$("#shop").css({background: 'url(https://i.imgur.com/zt7Cb6A.png)'}); 
$('<style type="text/css">#shop_close, #shop_accept {background-Image: url(https://i.imgur.com/UucuvzH.png)};</style>').appendTo("head");
$('<style type="text/css">#gold_shop_banner, #sl_shop_banner {background-Image: url(https://i.imgur.com/IKywX6i.png)};</style>').appendTo("head");
$('#leorn1').attr('src','http://i.imgur.com/mnls00g.gif'); 
$('#leorn2').attr('src','http://i.imgur.com/dUVClAF.gif');
$("#bottombar").css({background: 'url(https://i.imgur.com/53D1kvm.png)'});
$('<style type="text/css">#chat.left, #chattabs.left, #chat.left #chattabs s {background-Image: url(https://i.imgur.com/hUlq6KD.png)};</style>').appendTo("head");
$('<style type="text/css">#chat, #chattabs, #chat #chattabs s {background-Image: url(http://i.imgur.com/IwVHHeo.png)};</style>').appendTo("head");
$('#inpchat').css('background-image','url(https://i.imgur.com/53D1kvm.png)');
$("#skillSwitch").css({ backgroundImage: 'url("https://i.imgur.com/7JFXd0p.gif")' }); 
$('.MM-battleset-switch-button').css('background-image','url(https://i.imgur.com/NzVWUKR.png)');
$("#stats").css({background: 'url(http://i.imgur.com/es2dETW.png)'});
$('#buttons, #b_quests, #b_clans, #b_config, #b_map, #b_skills, #b_friends, #b_addons, #b_recipes, #bchat, #b_help, #b_matchmaking, #logoutbut ').css('background-image','url(https://i.imgur.com/ynF6296.png)');
$('<style type="text/css">#premiumshop, #premiumshop .promocode_button, #premiumshop .item_bg, #premiumshop .premiumItem, #premiumshop .buymore_ps, #premiumshop .closebutton_ps {background-Image: url(https://i.imgur.com/VJuVcZN.png)};</style>').appendTo("head");
$('#premiumbut').css('background-image','url(https://i.imgur.com/lAcKGUS.png)');
$("#clanmenu").css({background: 'url(http://i.imgur.com/dTh6BID.png)'}); 
$('#mappanel').css('background-image','url(http://i.imgur.com/NoRsL9v.jpg)');
$('#addonspanel').css('background-image','url(http://i.imgur.com/Ye58PYS.jpg)'); 
$('#battlepanelback, #battlehelp, #battleclose, #battlepanel.big, #battlehelp:hover').css({backgroundImage: 'url(https://i.imgur.com/TuSWxnW.png)'});
$('.border-b').css({backgroundImage: 'url(https://i.imgur.com/TuSWxnW.png)'});
$('#bm_advent').css({backgroundImage: 'url(https://i.imgur.com/9smX7CF.png)'}); 
$('<style>#loots{background:url(https://i.imgur.com/1Guwg8O.png);}#loots_l, #loots_r, #loots .loot, #loots B.yes, #loots B.no, #loots_counter, #loots_button, #loots B.need {background-image:url(https://i.imgur.com/6Z2UUjJ.png);background-color:transparent;}</style>').appendTo('head');
$('<style type="text/css">#startbutton, #shufflebutton, #hdbutton {background-Image: url(https://i.imgur.com/f0msYnM.png)};</style>').appendTo("head"); 
(function () {
	var style = "<style>#config{background:url(https://i.imgur.com/64wRtKp.png) no-repeat bottom center}</style>";
	$(style).appendTo("Head");
  } )();
$('<style type="text/css">#config .save{background-Image: url(https://i.imgur.com/zQxf03Z.png )};</style>').appendTo("head");
$('<style type="text/css">#config .cancel {background-Image: url(https://i.imgur.com/j0wToXf.png)};</style>').appendTo("head"); 
$('<style type="text/css">#cfg_options DIV {background-Image: url(https://i.imgur.com/NNTv0ez.png)};</style>').appendTo("head"); 