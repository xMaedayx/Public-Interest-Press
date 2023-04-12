const newPostBtn = document.getElementById("pstBtn");
const modal = document.getElementById("myModal1");
const closeBtn = document.getElementsByClassName("close"[0]);
const savePostBtn = document.getElementById("save-post-btn");
const newPostText = document.getElementById("new-post-text");

newPostBtn.addEventListener("click", () => {
    //  Show the modal when the button is clicked
    modal.style.display = "block";
})

