document.addEventListener("DOMContentLoaded", function () {
  const postIdInput = document.getElementById("postIdInput");
  const searchPostBtn = document.getElementById("searchPostBtn");
  const postContainer = document.getElementById("post-container");
  const postInfo = document.getElementById("post-info");
  const getCommentsBtn = document.getElementById("getCommentsBtn");
  const commentsContainer = document.getElementById("comments-container");

  searchPostBtn.addEventListener("click", function () {
    const postId = postIdInput.value;

    if (postId >= 1 && postId <= 100) {
      getPost(postId).then(displayPost).catch(handleError);
    } else {
      alert("Введіть ID від 1 до 100");
    }
  });

  getCommentsBtn.addEventListener("click", function () {
    const postId = postIdInput.value;

    getComments(postId).then(displayComments).catch(handleError);
  });

  function getPost(postId) {
    return new Promise((resolve, reject) => {
      const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  function getComments(postId) {
    return new Promise((resolve, reject) => {
      const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  function displayPost(post) {
    postInfo.innerHTML = `
      <p><strong>Title:</strong> ${post.title}</p>
      <p><strong>Body:</strong> ${post.body}</p>
    `;

    postContainer.style.display = "block";
  }

  function displayComments(comments) {
    commentsContainer.innerHTML = "<h3>Коментарі</h3>";

    if (comments.length > 0) {
      comments.forEach((comment) => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `
          <p><strong>Name:</strong> ${comment.name}</p>
          <p><strong>Email:</strong> ${comment.email}</p>
          <p><strong>Body:</strong> ${comment.body}</p>
        `;
        commentsContainer.appendChild(commentElement);
      });
    } else {
      commentsContainer.innerHTML = "<p>Коментарі відсутні.</p>";
    }
  }

  function handleError(error) {
    console.error("Помилка:", error);
    alert("Помилка при отриманні даних. Будь ласка, спробуйте ще раз.");
  }
});
