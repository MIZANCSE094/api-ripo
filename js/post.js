function loadPost() {
     fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) => displayPost(data));
}
loadPost();

function displayPost(data) {
     const postContainer = document.getElementById("posts");
     for (const post of data) {
          //   console.log(post);
          const div = document.createElement("div");
          div.classList.add("post");
          div.innerHTML = `
         <h2>${post.id} </h2>
         <p>${post.title}</p>
         <p>${post.body}`;
          postContainer.appendChild(div);
     }
}
