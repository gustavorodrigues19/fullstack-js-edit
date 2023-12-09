window.onload = () => {
  let counter = 0;
  const counterElement: HTMLElement | null = document.getElementById("counter");

  if (!counterElement) return;

  const incrementButton: HTMLElement | null =
    document.getElementById("increment");
  if (incrementButton) {
    incrementButton.onclick = () => {
      counter++;
      counterElement.textContent = counter.toString();
    };
  }

  const decrementButton: HTMLElement | null =
    document.getElementById("decrement");
  if (decrementButton) {
    decrementButton.onclick = () => {
      counter--;
      counterElement.textContent = counter.toString();
    };
  }
};
