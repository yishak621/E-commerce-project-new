const selectDrop = document.getElementById('countries');
const url = 'https://restcountries.com/v2/all';

window.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch(url);
  const data = await response.json();

  let output = '';
  data.forEach((countries) => {
    output += `<option value="${countries.name}">${countries.name}</option>`;
    selectDrop.innerHTML = output;
  });
});

export default window;
