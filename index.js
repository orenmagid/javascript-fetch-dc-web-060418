const app = "I don't do much.";

const token = 'ba2a177f07a758fd503751558d122a76b8b362b7'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));