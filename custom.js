function collapse(div) {
    var className = div.getAttribute("class");
    if(className=="collapse-area") {
      div.className = "collapse-area-active";
    }
    else{
      div.className = "collapse-area";
    }
  }