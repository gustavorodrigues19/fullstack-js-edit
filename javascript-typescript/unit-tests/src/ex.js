export function calculate(a, b, signal) {
  if (signal === "+") {
    return a + b;
  }
  return a - b;
}

export async function fetchData() {
  let response = await fetch("https://random-data-api.com/api/v2/users");
  let data = await response.json();
  return data;
}

export function throwError(arg) {
  if (arg === null) {
    throw new Error("Invalid argument");
  }
  return arg;
}
