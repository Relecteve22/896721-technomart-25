    var ButtonWriteUs = document.querySelector(".button-write-us");
    var ButtonMap = document.querySelector(".mini-map");
    // var ButtonBuy = document.querySelector("[href=buy.html]");

    var popup = document.querySelector(".write-us");
    var map = document.querySelector(".main-map");
    var close = popup.querySelector(".leave");
    var mapClose = map.querySelector(".leave");

    var form = popup.querySelector("form");
    var nameSurname = popup.querySelector("[name=name-surname]");
    var email = popup.querySelector("[name=email]");
    var textPost = popup.querySelector("[name=text-post]");

    var isStorageSupport = true;
    var storage = "";
    var storage1 = "";
    
    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }  

    try {
        storage1 = localStorage.getItem("email");
      } catch (err) {
        isStorageSupport = false;
      }  

    ButtonWriteUs.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        nameSurname.focus();
    });

    ButtonMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        map.classList.add("modal-show");
    });


    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");

        if (storage) {
            nameSurname.value = storage;
            email.focus();
        } else {
            nameSurname.focus();
        }
        
        if (storage1) {
            email.value = storage1;
            nameSurname.focus();
        } else {
            email.focus();
        }
    });

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