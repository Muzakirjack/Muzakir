function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const responseDiv = document.getElementById('formResponse');

  // Validasi sederhana
  if (name === '' || email === '' || message === '') {
      responseDiv.innerHTML = 'Semua kolom harus diisi!';
      responseDiv.style.color = 'red';
      return false; // Mencegah pengiriman form
  }

  // Simulasi pengiriman sukses
  responseDiv.innerHTML = 'Pesan Anda telah terkirim!';
  responseDiv.style.color = 'green';

  // Reset form
  document.getElementById('contactForm').reset();

  return false; // Mencegah pengiriman form
}
