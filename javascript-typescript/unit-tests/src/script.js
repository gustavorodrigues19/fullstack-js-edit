export function sum(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function operation(a, b, op) {
  switch (op) {
    case "+":
      return sum(a, b);
    case "-":
      return sub(a, b);
    default:
      throw new Error("Operation not supported");
  }
}

export async function fetchData() {
  const response = await fetch("https://random-data-api.com/api/v2/users");
  const data = await response.json();

  return { city: data.address.city };
}
