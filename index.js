Contacts.forEach((contact, index) => {
  const div = document.createElement("div");
  div.className = "box";
  const divContent = `
            <div class="mobile"></div>
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

    document.getElementById("dp").src = contact.contactProfile;
    document.querySelector("main .name h3").innerHTML = contact.contactName;
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

let mobile = document.querySelectorAll(".mobile");
for (let i = 0; i < mobile.length; i++) {
  mobile[i].onclick = function () {
    document.querySelector("main").style.display = "grid";
    document.querySelector(".mainchat").style.display = "none";
  };
}

let back = document.querySelector(".back");
back.onclick = function () {
  document.querySelector("main").style.display = "none";
  document.querySelector(".mainchat").style.display = "grid";
};
