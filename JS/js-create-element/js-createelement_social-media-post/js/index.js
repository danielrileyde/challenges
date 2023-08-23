console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const post = document.createElement("article");
post.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent = "OMG, I can do it in class but not by myself.";

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const username = document.createElement("span");
username.classList.add("post__username");
username.textContent = "@zungenbogen";

const heartButton = document.createElement("button");
likeButton.classList.add("post__button");
heartButton.textContent = "♥ Like";

document.body.append(post);
post.append(postContent);
post.append(footer);
footer.append(username);
footer.append(heartButton);
heartButton.addEventListener("click", handleLikeButtonClick);
