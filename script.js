document.addEventListener('DOMContentLoaded', () => {
  // Optional: Add hover sound or animation later
  const cards = document.querySelectorAll('.game-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });

  // Future-ready: Add search, filters, or music toggle here
});
