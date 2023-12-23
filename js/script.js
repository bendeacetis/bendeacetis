if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

document.addEventListener('DOMContentLoaded', function() {
  const changingTextElement = document.getElementById('changing-text');
  const textArray = ["uses dark mode.", "a pleasure in class.", "Taco fanatic.", "organizes his files", "his favorite noodle is rigatoni."];
  let currentIndex = 0;

  function changeText() {
    changingTextElement.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
  }

  setInterval(changeText, 2000);
});