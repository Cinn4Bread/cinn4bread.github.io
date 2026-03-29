---
layout: project
title: AstroSynchronous↗
tagline: Game Studio 1 Project
type: Team (6 members)
duration: February 2026 → March 2026
role: Visual Designer & Programmer
itch: https://seamus122405.itch.io/astrosynchronous
selfLink: ./astroProject.html
---

<div style="text-align: center">
  <h2 style="margin: 10px 0 5px;">Controls</h2>
  <p>
    WASD or Arrow Keys to move<br>
    ; or Space to fire weapon<br>
    Hold Enter during the intro to skip it
  </p>
</div>

<div id="game-container" style="margin: 0 auto; width: 512px; height: 768px; position: relative; cursor: pointer;" onclick="loadGame()">
  <img src="assets/images/astroGameThumb.png" style="width: 100%; height: 100%; object-fit: cover; border: 2px solid rgba(255,255,255,0.3); border-radius: 6px;">
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 48px; color: white; background: rgba(0,0,0,0.85); padding: 15px 30px; border-radius: 8px;">▶ Play</div>
</div>

<script>
function loadGame() {
  document.getElementById('game-container').innerHTML = '<div style="margin: 0 auto; width: 515px;"><iframe src="games/astrosynchronous/index.html" width="512" height="768" scrolling="no" style="border: 2px solid rgba(255,255,255,0.3); border-radius: 6px;"></iframe></div>';
}
</script>

<hr>

<div style="text-align: center; margin: 0px 35px;">
  <h1 style="font-size: 30px; margin-bottom: 20px;">Project Summary</h1>
  <p> 
    AstroSynchronous is a chaotic, bullet-hell style shoot 'em up with a twist: To deal damage, you must store and discharge energy by allowing your ship to get hit by bullets! Using this unique ability, you must destroy the threat that seeks to devour the Sun—the Cosmic Jellyfish—by absorbing and weaponizing the blasts of energy it fires at you.
  </p>
  <ul style="padding-left: 0px;"><img src="assets/images/astroImage1.png"></ul>
  <p> 
    This project was a collaborative effort between myself, 2 designers, 2 artists, and one sound designer. Over approximately one month, we followed a scrum workflow across 4 sprints to create a game built around the design verbs "connect" and "rush". Overall, the development of AstroSynchronous gave me valuable experience in working across disciplines and keeping a team aligned on a shared vision.     
  </p>
</div>

<hr>

<div style="text-align: center; margin: 0px 35px;">
  <h1 style="font-size: 30px; margin-bottom: 20px;">My Contributions</h1>
  <p>
  </p>
</div>

<hr>

<div style="text-align: center; margin: 0px 35px;">
  <h1 style="font-size: 30px; margin-bottom: 20px;">What I Learned</h1>
  <p></p>
</div>

