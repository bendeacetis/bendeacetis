if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

document.addEventListener('DOMContentLoaded', function() {
  const changingTextElement = document.getElementById('changing-text');
  const textArray = ["Benjamin DeAcetis, uses dark mode.", "Benjamin DeAcetis, a pleasure in class.", "Benjamin DeAcetis, Taco fanatic.", "Benjamin DeAcetis, organizes his files.", "Benjamin DeAcetis, his favorite noodle is rigatoni.", "Benjamin DeAcetis, likes dogs more than cats.", "Benjamin DeAcetis, loves long walks."];
  let currentIndex = 0;

  function changeText() {
    changingTextElement.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
  }

  setInterval(changeText, 2000);
});