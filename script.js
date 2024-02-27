const scores=[1,2,3,4,5,6,"w"]

function updateScores() {
    // Get selected scores for India and Pakistan

    
    const indiaScore = document.querySelector('input[name="indiaScore"]:checked');
    const pakistanScore = document.querySelector('input[name="pakistanScore"]:checked');
  
    // Update scores if a selection is made
    if (indiaScore && pakistanScore) {
        alert(India Score: ${indiaScore.value}\nPakistan Score: ${pakistanScore.value});
    } else {
        alert("Please select scores for both teams.");
    }
  }
  
  function resetScores() {
    // Reset selected scores
    const scoreRadios = document.querySelectorAll('input[type="radio"]');
    scoreRadios.forEach(radio => radio.checked = false);
  }