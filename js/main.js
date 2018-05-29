console.log(data);

let mainContainer = document.getElementById("mainContainer");

let modal = document.createElement("div");
modal.setAttribute("class", "modal");

// hanlde broken image
function imgError(image) {
  image.onerror = "";
  image.src = "../img/JPEG/default.jpg";
  return true;
}

function spanOnClick() {
  modal.style.display = "none";
  modal.innerHTML = "";
}

function arrayData() {}

//imgClick
function imgClick(img) {
  let id = img.id;
  modal.style.display = "block";

  let modalInnerHTML = `
    <!-- The Close Button -->
    <span class="close" onclick="spanOnClick()" >&times;</span>
    <div class="modal-container">
      <img class="modal-content" src="./img/JPEG/${data[id].src}"
      onerror="imgError(this)"
      >

      <!-- Modal Caption (Image Text) -->
      <div id="caption">
        <div class="name-title">
          <h1>${data[id].firstName}</h1>
        </div>
        <div class="info-content">
          <p><span>Title:</span> ${data[id].title}</p>
          <p><span>Nationality:</span> ${data[id].nationality}</p>
          <p><span>Skills:</span> ${data[id].skills.join(", ")}</p>
          <p><span>Why a software developer:</span> ${
            data[id].whySofterDeveloper
          }</p>
          <p><span>Vision:</span> ${data[id].longTermVision}</p>
          <p><span>Motivation:</span> ${data[id].motivatesMe}</p>
          <p><span>Quote:</span> ${data[id].favoriteQuote}</p>
          <p><span>Join on:</span> ${data[id].joinedOn}</p>
        </div>
      </div>
    </div>

  `;
  modal.innerHTML = modalInnerHTML;
  mainContainer.appendChild(modal);
}

//Render Data

function renderData() {
  for (let i = 0; i < data.length; i++) {
    let item = document.createElement("div");
    item.className = "item";
    let cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    let card = document.createElement("div");
    card.className = "card";
    let img = document.createElement("img");
    img.setAttribute("src", `./img/JPEG/${data[i].src}`);
    img.setAttribute("onerror", "imgError(this)");
    img.setAttribute("id", `${i}`);
    img.addEventListener("click", function(e) {
      console.log(e.target);
      imgClick(e.target);
    });
    card.appendChild(img);
    cardContainer.appendChild(card);
    item.appendChild(cardContainer);
    mainContainer.appendChild(item);
  }
}

renderData();
// Get the modal
// var modal = document.getElementById("myModal");
//
// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("item-img");
// console.log(img);
// var modalImg = document.getElementById();
// var captionText = document.getElementById("caption");
// div.onclick = function() {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   // captionText.innerHTML = this.alt;
// };

// Get the <span> element that closes the modal
