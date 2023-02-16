const form = document.querySelector('#guest-form');
form.addEventListener('submit', (event) => {
  console.log('hi');
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const count = document.querySelectorAll('input[type="checkbox"]:checked').length;
  alert(`${name}님, 저와 ${count}개의 취향이 같으시네요!`);

  document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
    checkbox.checked = false;
  });
  document.querySelector('#name').value = '';
});
