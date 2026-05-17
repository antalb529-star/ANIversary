document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.idea-item');
  const specialSection = document.getElementById('special-message');
  const specialText = document.getElementById('special-text');

  items.forEach(item => {
    item.addEventListener('click', async () => {
      const exampleNum = item.getAttribute('data-example'); // e.g. "EXAMPLE 1"
      const fileNum = exampleNum.slice(-1); // gets "1", "2", or "3"
      const filename = `idea${fileNum}.txt`;

      try {
        const response = await fetch(filename);
        if (!response.ok) throw new Error("File not found");
        
        const text = await response.text();
        
        specialText.innerHTML = text.replace(/\n/g, '<br><br>');
        specialSection.classList.add('show');
        
        specialSection.scrollIntoView({ 
          behavior: "smooth",
          block: "center"
        });
      } catch (error) {
        specialText.textContent = "Could not load the message. Make sure idea" + fileNum + ".txt exists.";
        specialSection.classList.add('show');
      }
    });
  });
});

function daysUntil(targetDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const target = new Date(targetDate);
    target.setHours(0, 0, 0, 0);
    
    const diffTime = (target - today) * -1;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

// Example: Change this date to your anniversary
const anniversaryDate = "2023-05-09";   // ←←← CHANGE THIS

document.addEventListener('DOMContentLoaded', () => {
    const days = daysUntil(anniversaryDate);
    
    // Update any element with id="days-until"
    const daysElement = document.getElementById('days-until');
    if (daysElement) {
        daysElement.textContent = days;
    }
});