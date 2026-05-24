const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const value = input.value.trim();
  nameOutput.textContent = value || 'Anonymous';
});