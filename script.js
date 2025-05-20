// Mengubah background navbar ketika halaman di-scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#000'; // background hitam pekat saat scroll
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; // warna semi transparan awal
  }
});

// Menambahkan interaksi pada card
const cards = document.querySelectorAll('.card');
const displayedImage = document.getElementById('displayed-image');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const imageUrl = card.getAttribute('data-image');
    displayedImage.src = imageUrl;
    displayedImage.style.display = 'block'; // Show the image
  });
});
