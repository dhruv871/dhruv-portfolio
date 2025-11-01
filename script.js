
function openModal(src){
  const modal = document.getElementById('modal');
  const img = document.getElementById('modalImg');
  const link = document.getElementById('downloadLink');
  img.src = src;
  link.href = src;
  modal.style.display = 'flex';
}
function closeModal(e){
  if(e.target.id === 'modal' || e.target.classList.contains('download')){
    document.getElementById('modal').style.display = 'none';
  }
}
// Smooth scroll for nav links
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click', function(e){
    if(this.hash){ e.preventDefault(); document.querySelector(this.hash).scrollIntoView({behavior:'smooth'}); }
  });
});
// 🌙 Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Toggle icon change
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }

  // Save mode in local storage
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load previous theme
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }
});

