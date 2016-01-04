// javascript:(function(){function getScript(url,success){var head=document.getElementsByTagName("head")[0],done=false;var script=document.createElement("script");script.src=url;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;success();}};head.appendChild(script);}var v="1.3.2";if(window.jQuery===undefined||window.jQuery.fn.jquery<v){getScript("http://ajax.googleapis.com/ajax/libs/jquery/"+v+"/jquery.min.js",initMyBookmarklet);}else{initMyBookmarklet();}function initMyBookmarklet(){$("#header, #t365, div.ad1, div.ad2, #footer, div.datal").remove();$("body").css("background-color","black");}})();

(function() {
    function getScript(url, success){
        var head = document.getElementsByTagName("head")[0], done = false;
        var script = document.createElement("script");
        script.src = url;

        // Attach handlers for all browsers
        script.onload = script.onreadystatechange = function(){
            if ( !done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") ) {
                done = true;
                success();
            }
        };

        head.appendChild(script);
    }

    // check prior inclusion and version
    var v = "1.3.2";
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
        getScript("http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js", initMyBookmarklet);
    } else {
        initMyBookmarklet();
    }

    function initMyBookmarklet() {
        $("#header, #t365, div.ad1, div.ad2, #footer, div.datal").remove();
        $("body").css("background-color", "black");
    }

})();
