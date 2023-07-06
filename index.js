Contacts.forEach((contact) => {
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
});
