"use strict";
(function() {
  window.addEventListener("load", init);

  function init() {
    id("code").addEventListener("click", click);
  }

  function click() {
    let button = document.getElementById('code');
    button.style.position = "absolute";
    button.style.left = 100+'px';
    setTimeout(function(){
      button.style.left = 70+'px';
      setTimeout(function(){
        button.style.left = 40+'px';
        setTimeout(function(){
          button.style.left = 10+'px';
        }, 500);
      }, 500);
    }, 500);
  }


  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
   function id(id) {
    return document.getElementById(id);
  }
})();