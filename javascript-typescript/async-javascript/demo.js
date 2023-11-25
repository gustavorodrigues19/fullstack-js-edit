// Run with node 18 or later
async function getUsers() {
  const resp = await fetch("https://random-data-api.com/api/v2/users?size=2");
  const data = await resp.json();
  console.log(data);
}

getUsers();
