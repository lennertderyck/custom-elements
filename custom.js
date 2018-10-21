addCSS('style.css');

// Include CSS file
function addCSS(filename){
    var head = document.getElementsByTagName('head')[0];

    var style = document.createElement('link');
    style.href = 'https://lennertderyck.github.io/custom-elements/elements.css';
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
}

function collapse(div) {
    var className = div.getAttribute("class");
    if(className=="collapse-area") {
      div.className = "collapse-area-active";
    }
    else{
      div.className = "collapse-area";
    }
  }