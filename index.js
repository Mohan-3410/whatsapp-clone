Contacts.forEach((contact, index) => {
  const div = document.createElement("div");
  div.className = "box";
  const divContent = `
            <div class="profilePhoto profile-photo">
            <img src=${contact.contactProfile} alt="" />
            </div>
            <div class="name">
              <h3>${contact.contactName}</h3>
              <h4>${contact.contactMessage}</h4>
            </div>
            <div class="time">
              <h4>${contact.contactMessageTime}</h4>
            </div>
                `;
  div.innerHTML = divContent;
  document.querySelector(".mainchat .bottom").appendChild(div);

  div.onclick = function () {
    document.querySelector(".active").className = "box";
    div.className = "box active";
  };

  let list = document.querySelectorAll(".list");
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
      let j = 0;
      while (j < list.length) {
        list[j++].className = "list";
      }
      list[i].className = "list active1";
    };
  }
});
