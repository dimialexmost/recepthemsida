function calculateIngredients() {
  const portions = document.getElementById("portions").value;
  const ingredient1 = portions * 3;
  const ingredient2 = portions * 0.5;
  const ingredient3 = portions * 4;
  const ingredient4 = portions * 4;

  document.getElementById("ingredient1").textContent = ingredient1;
  document.getElementById("ingredient2").textContent = ingredient2;
  document.getElementById("ingredient3").textContent = ingredient3;
  document.getElementById("ingredient4").textContent = ingredient4;
}

function addComment() {
  const commentText = document.getElementById("comment").value;
  const commenterName = document.getElementById("name").value;
  const commentList = document.getElementById("comments-list");
  const commentItem = document.createElement("div");

  commentItem.textContent = commenterName + ": " + commentText;

  commentList.appendChild(commentItem);
  document.getElementById("comment").value = "";
  document.getElementById("name").value = "";

  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push({
    name: commenterName,
    text: commentText
  });
  localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
  const commentList = document.getElementById("comments-list");
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.forEach(function (comment) {
    const commentItem = document.createElement("div");
    commentItem.textContent = comment.name + ": " + comment.text;
    commentList.appendChild(commentItem);
  });

}

document.getElementById("add-comment").addEventListener("click", addComment);
window.addEventListener("load", loadComments);

document.getElementById("add-comment").addEventListener("click", addComment);

window.addEventListener("load", loadComments);

document.addEventListener("DOMContentLoaded", function () {
  const portionsInput = document.getElementById("portions");
  portionsInput.addEventListener("input", calculateIngredients);

  const addCommentButton = document.getElementById("add-comment");
  addCommentButton.addEventListener("click", addComment);
});
