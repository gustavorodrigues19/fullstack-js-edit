async function fetchData() {
  let response = await fetch("https://random-data-api.com/api/v2/users");
  let data = await response.json();
  console.log(data);
}
fetchData();
