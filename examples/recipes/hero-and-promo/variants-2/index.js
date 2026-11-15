// Flat placeholder until the documentation illustration set is in place.
const hills = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect width="320" height="180" fill="#f3c27a"/><circle cx="230" cy="70" r="26" fill="#fbe3b4"/><path d="M0 140 L70 70 L130 125 L190 60 L260 120 L320 85 L320 180 L0 180 Z" fill="#7a5a8c"/><path d="M0 160 L90 110 L170 150 L250 115 L320 145 L320 180 L0 180 Z" fill="#4b3a5c"/></svg>');
document.querySelectorAll('.photo').forEach((el) => { el.style.backgroundImage = `url("${hills}")`; });
