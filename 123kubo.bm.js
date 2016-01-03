// javascript:(function(){function getScript(url,success){var head=document.getElementsByTagName("head")[0],done=false;var script=document.createElement("script");script.src=url;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;success();}};head.appendChild(script);console.log('test');}var v="1.3.2";if(window.jQuery===undefined||window.jQuery.fn.jquery<v){getScript("http://ajax.googleapis.com/ajax/libs/jquery/"+v+"/jquery.min.js",initMyBookmarklet);}else{initMyBookmarklet();}function initMyBookmarklet(){$("iframe, div.header, div.menu, div.top, div.datal, div.playl, div.playr, #custom1, #stad, div.footer, div.FF tr:nth-child(1), div.FF tr:nth-child(2), object ~ *").remove();$("body").css("background-color","black");}})();

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
        $("iframe, div.header, div.menu, div.top, div.datal, div.playl, div.playr, #custom1, #stad, div.footer, div.FF tr:nth-child(1), div.FF tr:nth-child(2), object ~ *").remove();
        $("body").css("background-color", "black");
    }

})();
