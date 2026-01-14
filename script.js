const tableBody = document.getElementById("tableBody");

function PromiseAPI1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/posts")
        .then(res => res.json())
        .then(data => {
          data.posts.forEach(post => {
            tableBody.innerHTML += `
              <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
              </tr>
            `;
          });
          resolve();
        });
    }, 1000);
  });
}

function PromiseAPI2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
          data.products.forEach(product => {
            tableBody.innerHTML += `
              <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
              </tr>
            `;
          });
          resolve();
        });
    }, 2000);
  });
}

function PromiseAPI3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/todos")
        .then(res => res.json())
        .then(data => {
          data.todos.forEach(todo => {
            tableBody.innerHTML += `
              <tr>
                <td>${todo.id}</td>
                <td>${todo.todo}</td>
              </tr>
            `;
          });
          resolve();
        });
    }, 3000);
  });
}

document.getElementById("loadBtn").addEventListener("click", () => {
  tableBody.innerHTML = "";

  PromiseAPI1()
    .then(() => PromiseAPI2())
    .then(() => PromiseAPI3());
});
