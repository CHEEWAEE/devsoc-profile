const sky = document.getElementById('sky');

const files = [
  'assets/cloud1.png','assets/cloud2.png','assets/cloud3.png',
  'assets/moon1.png','assets/moon2.png','assets/moon3.png','assets/moon4.png','assets/moon5.png'
];

function placeSprites() {
  sky.innerHTML = '';
  const w = window.innerWidth, h = window.innerHeight;
  files.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.className = 'sprite';
    const left = Math.random() * (w - 180);
    const top  = Math.random() * (h - 180);
    img.style.left = left + 'px';
    img.style.top  = top + 'px';
    img.style.animationDelay = (Math.random()*2).toFixed(2) + 's';
    img.style.width = (120 + Math.random()*80) + 'px';
    sky.appendChild(img);
  });
}

placeSprites();
window.addEventListener('resize', () => { placeSprites(); });
