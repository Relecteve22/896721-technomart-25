    var buttonWriteUs = document.querySelector(".button-write-us");
    var buttonMap = document.querySelector(".mini-map");
    // var ButtonBuy = document.querySelector("[href=buy.html]");

    var writeUs = document.querySelector(".write-us");
    var map = document.querySelector(".main-map");
    var menuItemAddedToCart = document.querySelector(".menu-item-added-to-cart");

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
      });

      form.addEventListener("submit", function (evt) {
        if (!nameSurname.value || !email.value || !textPost.value) {
            evt.preventDefault();
        }
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (writeUs.classList.contains("modal-show")) {
            writeUs.classList.remove("modal-show");
          }
        }
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

    var buttonBuyInCart = document.querySelectorAll(".buy");
    buttonBuyInCart.addEventListener("click", function (evt) {
      evt.preventDefault();
      menuItemAddedToCart.classList.add("modal-show");
    });


  if (menuItemAddedToCart) {

    var closeMenuItemAddedToCart = menuItemAddedToCart.querySelector(".leave");
    var continueShopping = menuItemAddedToCart.querySelector(".continue-shopping");
    // buttonBuyInCart.addEventListener("click", function (evt) {
    //   evt.preventDefault();
    //   menuItemAddedToCart.classList.add("modal-show");
    // });

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