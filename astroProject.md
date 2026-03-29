---
layout: project
title: AstroSynchronous↗
tagline: Game Studio 1 Project
type: Team (6 members)
duration: February 2026 → March 2026
role: Designer, Programmer, Technical Artist
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
  <img src="assets/images/astroProject/astroGameThumb.png" style="width: 100%; height: 100%; object-fit: cover; border: 2px solid rgba(255,255,255,0.3); border-radius: 6px;">
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 48px; color: white; background: rgba(0,0,0,0.85); padding: 15px 30px; border-radius: 8px;">▶ Play</div>
</div>

<script>
function loadGame() {
  document.getElementById('game-container').innerHTML = '<div style="margin: 0 auto; width: 515px;"><iframe src="games/astrosynchronous/index.html" width="512" height="768" scrolling="no" style="border: 2px solid rgba(255,255,255,0.3); border-radius: 6px;"></iframe></div>';
}
</script>

<hr style="margin-top: 25px;">

<div style="text-align: center; margin: 0px 35px;">
  <h1 style="font-size: 30px; margin-bottom: 20px;">Project Summary</h1>
  <p> 
    AstroSynchronous is a chaotic, bullet-hell style shoot 'em up with a twist: To deal damage, you must store and discharge energy by allowing your ship to get hit by bullets! Using this unique ability, you must destroy the threat that seeks to devour the Sun—the Cosmic Jellyfish—by absorbing and weaponizing the blasts of energy it fires at you.
  </p>
  <ul style="padding-left: 0px;"><img src="assets/images/astroProject/astroImage1.png"></ul>
  <p> 
    This project was a collaborative effort between myself, 2 designers, 2 artists, and one sound designer. Over approximately one month, we followed a scrum workflow across 4 sprints to create a game built around the design verbs "connect" and "rush". Overall, the development of AstroSynchronous gave me valuable experience in working across disciplines and keeping a team aligned on a shared vision.     
  </p>
</div>

<hr>

<div style="text-align: center; margin: 0px 35px;">
  <h1 style="font-size: 30px; margin-bottom: 20px;">My Contributions</h1>
  <p>
    During development, the bulk of my contributions consisted of the implementation of the game's visual effects---the ship's turning sprites, variable thruster animations, energy absorb effect, and ship explosion---as well as the design of the UI and main menu. Though I view myself as more of a designer/programmer, I also took on the role of a technical artist; as the intro, boss death, warning strip, win/lose, and transitionary animations between the main menu and game were all done by me through Unity's keyframe animation tool.   
  </p>
  
  <div style="display: flex; gap: 10px; justify-content: center; text-align: center;">
  <div style="width: 48%;">
    <img src="assets/images/astroProject/intro-anim.gif" alt="Intro animation" style="width: 100%; height: 580px;">
    <p><em>Intro animation</em></p>
  </div>
  <div style="width: 48%;">
    <img src="assets/images/astroProject/boss-anim.gif" alt="Boss death animation" style="width: 100%; height: 580px;">
    <p><em>Boss death animation</em></p>
  </div>
</div>

  <p>
    I also designed and implemented a system that dynamically switches the boss's attack patterns. This required me to randomize which color bullet was active for that phase (and change their sprites/collisions based on that), what frequency (amount on screen) each of the three bullet types had, and update the UI accordingly to reflect the changes. Additionally, the system is modular---providing designers a straightforward pipeline for creating and implementing new attack patterns, as both systems live solely within the Inspector (no code required). 
  </p>

{% highlight csharp %}
public void ActivateRandomBulletPattern()
{
    Debug.Log("Bullet pattern started");
    if(TutorialActive.tutorialActive)
    {
        return;
    }

    if (activePattern != null)
    {
        activePattern.SetActive(false);
    }

    int randomIndex = UnityEngine.Random.Range(0, bulletPatterns.Length);
    activePattern = bulletPatterns[randomIndex];
    activePattern.SetActive(true);
    activePattern.GetComponent<BulletPattern>().UpdateSpawnerColors();
    activePattern.GetComponent<BulletPattern>().ActivateSpawners();
}
{% endhighlight %}

<p>
  ActivateRandomBulletPattern() selects from a list of designer-created patterns and cascades down through that pattern's bullet spawners to activate each, as well as update the color bullets they're firing.
</p>



<p>
  ough....
</p>
  
</div>

<hr>

<div style="text-align: center; margin: 0px 35px;">
  <h1 style="font-size: 30px; margin-bottom: 20px;">What I Learned</h1>
  <p></p>
</div>

