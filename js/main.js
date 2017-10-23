// https://www.piliapp.com/syntax-check/es6/
(() => {
    
    "use strict";
    
    /*
    sw ... screen-width
    w ... window
    */
    
    let head, 
        link, 
        sw, 
        w, 
        checkScreen;
    
    link = document.createElement("link");
    link.rel = "stylesheet";
    
    head = document.querySelector("head");
    head.appendChild(link);
  
    w = window;
    
    checkScreen = (e) => {
        
        sw = e.currentTarget.innerWidth;
        
        switch (true) {
            case (sw < 560): link.href = "https://basehold.it/16";
                break;
            case (sw >= 560) && (sw < 960): link.href = "https://basehold.it/24";
                break;
            case (sw >= 960): link.href = "https://basehold.it/36";
                break;
            default: alert("Couldn't read the screen-size!");
        }
    };
    
    w.addEventListener("load", checkScreen);
    w.addEventListener("resize", checkScreen);
    
})();
