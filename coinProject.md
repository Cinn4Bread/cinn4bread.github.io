---
layout: project
title: CoinPunk
tagline: "<a href='https://itch.io/jam/coolmath-game-jam-2026'> The 20k Coolmath Game Jam</a> Submission"   
type: Team (7 members)
duration: "May 2026 → June 2026"
role: "Designer, Programmer"
itch: "https://seamus122405.itch.io/coin-punk"
selfLink: "./coinProject.html"
---   

<div style="text-align: center">
  <h2 style="margin: 10px 0 5px;">Controls</h2>
  <p>
    Left Click - Select and place components <br>
    Right Click - Deselect and remove components <br>
    Enter - Swap lever and component panels <br>
    R - Restart level (when in SIMULATION mode)
  </p>
</div>

<div id="game-container" style="margin: 0 auto; width: 800px; height: 600px; position: relative; cursor: pointer;" onclick="loadGame()">
  <img src="assets/images/coinProject/coinGameThumb.png" style="width: 100%; height: 100%; object-fit: cover; border: 2px solid rgba(255,255,255,0.3); border-radius: 6px;">
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 48px; color: white; background: rgba(0,0,0,0.85); padding: 15px 30px; border-radius: 8px;">▶ Play</div>
</div>

<script>
function loadGame() {
  document.getElementById('game-container').innerHTML = '<div style="margin: 0 auto; width: 515px;"><iframe src="games/coinpunk/index.html" width="800" height="600" scrolling="no" style="border: 2px solid rgba(255,255,255,0.3); border-radius: 6px;"></iframe></div>';
}
</script>

<hr style="margin-top: 25px;">

<div style="text-align: center; margin: 0px 35px;">
  <h1 style="font-size: 30px; margin-bottom: 20px;">Project Summary</h1>
  <p> 
    summary
  </p>
</div>

<hr>

<div style="text-align: center; margin: 0px 35px;">
  <h1 style="font-size: 30px; margin-bottom: 20px;">My Contributions</h1>
  <p>
    contributions
  </p>
</div>

<hr>

<div style="text-align: center; margin: 0px 35px;">
  <h1 style="font-size: 30px; margin-bottom: 20px;">What I Learned</h1>
  <p>
    learned
  </p>
</div>



