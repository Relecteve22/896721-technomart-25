    var buttonWriteUs = document.querySelector(".button-write-us");
    var buttonMap = document.querySelector(".mini-map");
    // var ButtonBuy = document.querySelector("[href=buy.html]");

    var popup = document.querySelector(".write-us");
    var map = document.querySelector(".main-map");
    var buttonBuyInCart = document.querySelector(".buy-in-cart-modal");
    var close = popup.querySelector(".leave");
    var mapClose = map.querySelector(".leave");
    var menuItemAddedToCart = document.querySelector(".menu-item-added-to-cart");

    var form = popup.querySelector("form");
    var nameSurname = popup.querySelector("[name=name-surname]");
    var email = popup.querySelector("[name=email]");
    var textPost = popup.querySelector("[name=text-post]");

    if (popup) {
      buttonWriteUs.addEventListener("click", function (evt) {
          evt.preventDefault();
          popup.classList.add("modal-show");
          nameSurname.focus();
      });
    };




    buttonMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        map.classList.add("modal-show");
        
    });

    buttonBuyInCart.addEventListener("click", function (evt) {
      evt.preventDefault();
      menuItemAddedToCart.classList.add("modal-show");
    });

    if (close) {
      close.addEventListener("click", function (evt) {
          evt.preventDefault();
          popup.classList.remove("modal-show");
      });
    }
    mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        map.classList.remove("modal-show");
    });

    form.addEventListener("submit", function (evt) {
        if (!nameSurname.value || !email.value || !textPost.value) {
            evt.preventDefault();
        } else {
            if (isStorageSupport) {
                localStorage.setItem("nameSurname", nameSurname.value);
              }
        }
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
          }
        }
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (map.classList.contains("modal-show")) {
            map.classList.remove("modal-show");
          }
        }
      });