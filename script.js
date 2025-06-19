function shuffleImages() {
  const box = document.querySelector('.box');
  const allImages = Array.from(box.querySelectorAll('li'));

  // Fade out
  box.style.opacity = 0;

  setTimeout(() => {
    // Shuffle array
    for (let i = allImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allImages[i], allImages[j]] = [allImages[j], allImages[i]];
    }

    // Clear and re-append in shuffled order
    box.innerHTML = '';

    const topRow = document.createElement('ul');
    topRow.classList.add('row');
    const bottomRow = document.createElement('ul');
    bottomRow.classList.add('row');

    allImages.slice(0, 3).forEach(li => topRow.appendChild(li));
    allImages.slice(3).forEach(li => bottomRow.appendChild(li));

    box.appendChild(topRow);
    box.appendChild(bottomRow);

    // Fade back in
    box.style.opacity = 1;
  }, 400);
}

// Call initially and then every 3 seconds
shuffleImages();
setInterval(shuffleImages, 3000);
