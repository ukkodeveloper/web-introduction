const initRendering = () => {
  const movieTitles = document.querySelectorAll('.title');
  const checkboxLabels = document.querySelectorAll('.checkbox-label');

  checkboxLabels.forEach((label, index) => {
    label.innerHTML = movieTitles[index].innerHTML;
  });

  addFormEvent();
};

const addFormEvent = () => {
  const form = document.querySelector('#guest-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.querySelector('#name');
    const checkboxesChecked = document.querySelectorAll('input[type="checkbox"]:checked');

    const message = checkboxesChecked.length
      ? `저와 ${checkboxesChecked.length}개의 취향이 같으시네요! 😜`
      : '저랑 영화 취향만큼은 다른 걸로... 🥲 ';
    alert(`${userName.value}님! ${message}`);

    checkboxesChecked.forEach((checkbox) => {
      checkbox.checked = false;
    });
    userName.value = '';
  });
};

initRendering();
