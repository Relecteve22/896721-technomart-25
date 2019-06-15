    var ButtonWriteUs = document.querySelector(".button-write-us");

    var popup = document.querySelector(".write-us");
    var close = popup.querySelector(".leave");

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

    form.addEventListener("submit", function (evt) {
        if (!nameSurname.value || !email.value || !textPost.value) {
            evt.preventDefault();
        } else {
            if (isStorageSupport) {
                localStorage.setItem("nameSurname", nameSurname.value);
              }
        }
      });