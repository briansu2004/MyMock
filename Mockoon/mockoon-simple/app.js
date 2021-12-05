import fetch from "node-fetch";

import dotenv from "dotenv";
dotenv.config();

/*
console.log("The following is from the mock (by mockoon)");

fetch(process.env.GITHUB_API + "users/briansu2004", {
  method: "get",
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((json) => {
    // we received our user object!
    console.log(json);
  });

console.log("The following is from the real GitHub user API)");

const GITHUB_API = "https://api.github.com/";

fetch(GITHUB_API + "users/briansu2004", {
  method: "get",
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((json) => {
    // we received our user object!
    console.log(json);
  });
*/

const GITHUB_API = "https://api.github.com/";
const MOCK_GITHUB_API = process.env.GITHUB_API;
const GITHUB_USER = "users/briansu2004";
const HEADERS = {
  method: "get",
  headers: { "Content-Type": "application/json" },
};

async function mock_github_user_api() {
  const url = MOCK_GITHUB_API + GITHUB_USER;
  const res = await fetch(url, HEADERS);
  const data = await res.json();
  console.log("The following is from the mock (by mockoon) -");
  console.log(data);
}

async function github_user_api() {
  const url = GITHUB_API + GITHUB_USER;
  const res = await fetch(url, HEADERS);
  const data = await res.json();
  console.log("The following is from the real GitHub user API -");
  console.log(data);
}

mock_github_user_api();

github_user_api();
