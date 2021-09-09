// Add Comment
const btn_upload = document.querySelector(".btn_upload");
const btn_delete = document.querySelector(".comment_delete");
const textarea = document.querySelector("textarea");
const article_comments = document.querySelector(".article_comments");
const comments_row = document.querySelector(".comments_row");
const my_id = document.querySelector(".my_id").innerText;

const uploadComment = () => {
  if (textarea.value) {
    let newSpan = document.createElement("span");
    newSpan.classList.add("user_id");
    let newP = document.createElement("p");
    let newText = document.createTextNode(textarea.value);
    let newId = document.createTextNode(my_id);
    let newHeart = document.createElement("i");
    let newTrash = document.createElement("i");
    let newDiv = document.createElement("div");
    let newCommentDiv = document.createElement("div");
    newCommentDiv.classList.add("comments_menu");
    newDiv.classList.add("comments_row");
    newHeart.classList.add("comment_like", "far", "fa-heart");
    newHeart.onclick = () => toggleLike(newHeart);
    newTrash.classList.add("comment_delete", "far", "fa-trash-alt");
    newTrash.onclick = () => deleteComment(newTrash);

    newSpan.appendChild(newId);
    newP.appendChild(newSpan);
    newP.appendChild(newText);
    newCommentDiv.appendChild(newHeart);
    newCommentDiv.appendChild(newTrash);
    newDiv.appendChild(newP);
    newDiv.appendChild(newCommentDiv);
    article_comments.appendChild(newDiv);
    textarea.value = "";
  }
};

textarea.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    uploadComment();
  }

  if (textarea.value) {
    btn_upload.style.opacity = 1;
  } else {
    btn_upload.style.opacity = 0.4;
  }
});

btn_upload.addEventListener("click", uploadComment);

//Delete Comment
const deleteComment = (el) => {
  el.parentNode.parentNode.remove();
};

// Toggle Heart
const comment_like = document.querySelector(".comment_like");
let isLiked = false;

const toggleLike = (el) => {
  isLiked = !isLiked;
  if (isLiked === true) {
    el.classList.remove("far");
    el.classList.add("fas");
    el.style.color = "#ED4956";
  } else {
    el.classList.remove("fas");
    el.classList.add("far");
    el.style.color = "rgba(0, 0, 0, 0.1)";
  }
};

// Modal Box
const btn_profile = document.querySelector(".btn_profile");
const menu_box = document.querySelector(".menu_box");
let isHidden = true;

btn_profile.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden === false) {
    menu_box.style.display = "block";
  } else {
    menu_box.style.display = "none";
  }
});

/*Search Filter*/
const searchbox = document.querySelector(".search");
const search_list = document.querySelector("ul");
const search_result_box = document.querySelector(".search_result_box");
const btn_init = document.querySelector(".btn_init");
const user_list = [
  {
    id: "up_enery_bar",
    description: "난 에너지바",
    image: "../img/energy.jpg",
  },
  {
    id: "deli_cious.pizza",
    description: "맛있는 야채 피자",
    image: "../img/pizza.jpg",
  },
  {
    id: "im.tendong_",
    description: "JMT 텐동",
    image: "../img/tendong.jpg",
  },
  {
    id: "im.yellow_peaaach",
    description: "노랑 복숭아 탄산",
    image: "../img/juice.jpg",
  },
  {
    id: "gunchim_loopy",
    description: "군침이 싹도노",
    image: "../img/cake.jpg",
  },
  {
    id: "__bingsuya",
    description: "틈헤이러 빙수",
    image: "../img/bingsu.jpg",
  },
  {
    id: "cheers_beers_",
    description: "치어스비어스 홍대 1호점",
    image: "../img/beer.jpg",
  },
];

searchbox.addEventListener("keyup", () => {
  let result = user_list.filter((user) => user.id.includes(searchbox.value));

  while (search_list.hasChildNodes()) {
    console.log(search_list.firstChild);
    search_list.removeChild(search_list.firstChild);
  }

  result.forEach((element) => {
    let newLi = document.createElement("li");
    let newProfile = document.createElement("img");
    let newRow = document.createElement("div");
    let newId = document.createElement("h5");
    let newDes = document.createElement("h5");
    newDes.classList.add("user_description");
    newProfile.classList.add("profile_s");
    newId.classList.add("user_id");
    newProfile.src = element.image;
    newId.innerText = element.id;
    newDes.innerText = element.description;

    newRow.appendChild(newId);
    newRow.appendChild(newDes);
    newLi.appendChild(newProfile);
    newLi.appendChild(newRow);
    search_list.appendChild(newLi);
  });

  /*Search Filter X button*/

  searchbox.value
    ? ((btn_init.style.display = "block"),
      (search_result_box.style.display = "block"))
    : ((btn_init.style.display = "none"),
      (search_result_box.style.display = "none"));
});
