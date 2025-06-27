const input = document.getElementById("quantity");
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");

decrementBtn.addEventListener("click", () => {
  const currentValue = parseInt(input.value) || 0;
  if (currentValue > 0) {
    input.value = currentValue - 1;
  }
});

incrementBtn.addEventListener("click", () => {
  const currentValue = parseInt(input.value) || 0;
  input.value = currentValue + 1;
});


document.getElementById('scrollTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});