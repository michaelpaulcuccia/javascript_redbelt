//callbacks

const post = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post Two", body: "This is Post Two" },
];

let output = "";

function getPosts() {
  setTimeout(() => {
    post.forEach((post) => {
      output += post.title;
    });
  }, 1000);
}

getPosts();

console.log(output);
