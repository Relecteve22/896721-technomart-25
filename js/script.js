    var buttonWriteUs = document.querySelector(".button-write-us");
    var buttonMap = document.querySelector(".mini-map");
    var writeUs = document.querySelector(".write-us");
    var map = document.querySelector(".main-map");
    var menuItemAddedToCart = document.querySelector(".menu-item-added-to-cart");
    var buttonBuyInCart = document.querySelectorAll(".buy");
    var basket = document.querySelector(".basket");
    var quantitItem = document.querySelector(".quantit-item");
    var buttonInCart = document.querySelectorAll(".in-cart");
    var bookmarks = document.querySelector(".bookmarks");
    var quantitItemInBookmarks = document.querySelector(".quantit-item-in-bookmarks");

    if (writeUs) {
      var form = writeUs.querySelector("form");
      var nameSurname = writeUs.querySelector("[name=name-surname]");
      var email = writeUs.querySelector("[name=email]");
      var textPost = writeUs.querySelector("[name=text-post]");
      var close = writeUs.querySelector(".leave");
      buttonWriteUs.addEventListener("click", function (evt) {
          evt.preventDefault();
          writeUs.classList.add("modal-show");
          nameSurname.focus();
      });

      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        writeUs.classList.remove("modal-show");
        writeUs.classList.remove("modal-error");        
      });

      form.addEventListener("submit", function (evt) {
        if (!nameSurname.value || !email.value || !textPost.value) {
            evt.preventDefault();
            writeUs.classList.remove("modal-error");
            writeUs.offsetWidth = writeUs.offsetWidth;
            writeUs.classList.add("modal-error");
        }
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (writeUs.classList.contains("modal-show")) {
            writeUs.classList.remove("modal-show");
          }
        }
        writeUs.classList.remove("modal-error");  
      });
    };

    if (map) {
      var mapClose = map.querySelector(".leave");
      buttonMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        map.classList.add("modal-show");
      });

      mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        map.classList.remove("modal-show");
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (map.classList.contains("modal-show")) {
            map.classList.remove("modal-show");
          }
        }
      });
    };

    [].forEach.call(buttonBuyInCart, function(btn) {
      btn.addEventListener("click", function (evt) {
      evt.preventDefault();
      menuItemAddedToCart.classList.add("modal-show");
      basket.classList.add("active-cart");
      quantitItem.textContent = +quantitItem.textContent + 1;
      });
      });

      [].forEach.call(buttonInCart, function(btn) {
        btn.addEventListener("click", function (evt) {
        evt.preventDefault();
        quantitItemInBookmarks.textContent = +quantitItemInBookmarks.textContent + 1;
        });
        });
  if (menuItemAddedToCart) {
    var closeMenuItemAddedToCart = menuItemAddedToCart.querySelector(".leave");
    var continueShopping = menuItemAddedToCart.querySelector(".continue-shopping");

    closeMenuItemAddedToCart.addEventListener("click", function (evt) {
      evt.preventDefault();
      menuItemAddedToCart.classList.remove("modal-show");
    });

    continueShopping.addEventListener("click", function (evt) {
      evt.preventDefault();
      menuItemAddedToCart.classList.remove("modal-show");
    });
    
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (menuItemAddedToCart.classList.contains("modal-show")) {
          menuItemAddedToCart.classList.remove("modal-show");
        }
      }
    });
  };