! function(_bM) {
    battleMsg = function(c, t) {
        var ret = _bM(c, t);
        if (c.indexOf("winner=") > -1) {
            $("#battleclose").click();
        }
        return ret;
    }
}(battleMsg);