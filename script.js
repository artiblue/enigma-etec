const passwordBox = document.getElementById('password-box');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');
const resultBox = document.getElementById('result-box');

submitButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value;
  if (enteredPassword === 'enigmaetec') {
    passwordBox.style.display = 'none';
    resultBox.textContent = 'Código binário: 01100001 01100010 11011111 10000101 01100010 01101111 01110010 01100001'; // Código binário da palavra "abóbora"
    resultBox.style.display = 'block';
  } else {
    alert('Senha incorreta. Tente novamente.');
  }
});
