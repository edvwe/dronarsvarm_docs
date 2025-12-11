---
layout: default
title: Startsida
permalink: /
body_class: home
---

<!-- Header style (cetnered) -->
<style>
body {
  text-align: center;
}
</style>

<!-- Hero video spanning behind header -->
<div class="hero-video">
  <a href="{{ site.baseurl }}/videos/trailerVideo" target="_blank">
    <video autoplay muted loop playsinline>
      <source src="{{ site.baseurl }}/videos/heroVideo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </a>
</div>

<style>
/* Make hero video span full width and behind header */
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;  /* same height as before */
  overflow: hidden;
  z-index: -1;
}

.hero-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* cover */
  object-position: center;
  display: block;
}
</style>

<style>
body {
  padding-top: 350px; /* same as hero height to avoid content overlap */
}
</style>

<!-- Hero image spanning behind header
<div class="hero-image">
  <img src="{{ site.baseurl }}/images/drone-2635699_1920.jpg" alt="Full width">
</div>

<style>
/* Make hero image span full width and behind header */
.hero-image {
  position: absolute;      /* place it above content */
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;           /* adjust height */
  overflow: hidden;
  z-index: -1;             /* send behind header */
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;       /* crop nicely */
  object-position: top;
  display: block;
}
</style> -->

<style>
body {
  padding-top: 350px; /* same as hero height */
}
</style>

<!-- ABOUT-SECTION -->
<div id="about">

  <!-- Grid specification -->
  <style>
  .three-column {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem; /* spacing between columns */
    align-items: start;
  }
  .three-column img {
    max-width: 100%;
    height: auto;
  }

  .three-column p {
    text-align: justify;
  }
  .three-column h2 {
    text-align: justify;
    text-align-last: center;
    margin-bottom: 0px;
    margin-top: 6px;
  }
  </style>

  <div class="three-column">
    <div>
      <img src="{{ site.baseurl }}/images/RRT_img.png" alt="">
      <h2>Navigation</h2>
      <!-- <p>Using the RRT* pathfinding algortihm the swarm
      is capable of calculating the route to its target autonomously.</p> -->
      <p>
      Global paths are generated using the RRT* algorithm over a 3D map. The planner samples continuous space, connecting nodes through large collision-free segments and optimizing path length. Resulting trajectories are discretized into waypoints and assigned to each drone prior to execution.
      </p>
    </div>

    <div>
      <img src="{{ site.baseurl }}/images/form_img2.png" alt="">
      <h2>Formation</h2>
      <!-- <p>Wether standing still or on the move, the swarm can hold
      several different formations.</p> -->
      <p>
      Two formation modes are supported. In geometric formations, drones track fixed offsets to a virtual anchor moving along the global path in a constant velocity model following the RRT* way points. In Boids mode, agents adjust motion based on separation, cohesion, and alignment with nearby drones. Both methods maintain formation structure and enable local obstacle avoidance.
      </p>
    </div>

    <div>
      <img src="{{ site.baseurl }}/images/search_img.png" alt="">
      <h2>Search</h2>
      <!-- <p>Define an area for the swarm to patrol and let them handle the division.
      If a tagret is spotted, the drone will follow it.</p> -->
      <p>
      Area search is conducted through the user interface where the operator defines a region by specifying a polygon. Each drone in the swarm is then assigned a spline and a corresponding grid segment within this region. The area is allocated dynamically using Voronoi partitioning or an equivalent method for spatial division, which distributes the search responsibility across the swarm in an efficient and coordinated manner.
      </p>
    </div>
  </div>

  <!-- For the special segment -->
  <style>
  .image-text-section {
    display: flex;
    align-items: flex-start; /* align image with top of text */
    gap: 20px;               /* spacing between image and text */
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .image-text-section img {
    width: auto;            /* or any size you want */
    height: 160px;
    padding: 12px 0;
  }

  .image-text-section .text-content h2 {
    margin-top: 0;
    margin-bottom: 0px;
    text-align: left;
  }

  .image-text-section .text-content p {
    margin-top: 0px;
    text-align: justify;
  }

  </style>

  <div class="image-text-section">
    <img src="{{ site.baseurl }}/images/visionen.png" alt="Example image">

    <div class="text-content">
      <h2>Visualization in Visionen</h2>
      <!-- <p>Project the simulation onto the floor of the research arena Visionen and let
      real drones follow the simulated ones.</p> -->
      <p>
      The system was implemented in Unity for full three dimensional swarm simulation with modular control on each agent and grid based spatial reasoning. This simulation environment was then integrated with Arena Visionen for physical execution, where Crazyflie drones replicated the motion of their simulated counterparts and served as a physical shadow of the virtual swarm in real time.
      </p>
    </div>
  </div>

  <div class="image-text-section">
    <img src="{{ site.baseurl }}/images/gui.png" alt="Example image">

    <div class="text-content">
      <h2>Mission planning</h2>
      <!-- <p>Plan a mission and let the swarm carry it out autonomously. Choose a starting location,
      define an area to search and start the sequence.</p> -->
      <p>
      Missions are defined centrally and decomposed into goals assigned to all individual agents. Each drone receives a precomputed trajectory and a formation role. Autonomy is achieved through modular state management and control logic executed onboard, enabling launch, path following, and reconfiguration without external commands. The initial commands are given through the user interface. 
      </p>
    </div>
  </div>
</div>

<!-- DOCUMENTS-SECTION -->
<div id="documents">
  <h2>Documents</h2>
  <p>Download the projects documents by clicking on the links</p>

  <style>
  /* Grid container */
  .custom-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-content: center;
    margin-top: 40px;
    text-align: center;
  }

  /* Item styling */
  .grid-item {
    padding: 10px;
  }
  .grid-item h3 {
    margin: 0;
    font-size: 1.2em;
  }
  .grid-item p {
    margin: 5px 0 0;
    font-size: 1em;
    color: #555;
  }
  </style>

  <div class="custom-grid">
    <div class="grid-item">
      <h3><a href="{{ site.baseurl }}/files/Användarmanual_drönarsvärm.pdf" target="_blank">Användarmanual</a></h3>
      <p>PDF</p>
    </div>

    <div class="grid-item">
      <h3><a href="{{ site.baseurl }}/files/Designspecifikation_drönarsvärm.pdf" target="_blank">Designspecifikation</a></h3>
      <p>PDF</p>
    </div>

    <div class="grid-item">
      <h3><a href="">Efterstudie</a></h3>
      <p>PDF</p>
    </div>

    <div class="grid-item">
      <h3><a href="{{ site.baseurl }}/files/Kravspecifikation_drönarsvärm.pdf" target="_blank">Kravspecifikation</a></h3>
      <p>PDF</p>
    </div>

    <div class="grid-item">
      <h3><a href="{{ site.baseurl }}/files/Projektplan_drönarsvärm.pdf" target="_blank">Projektplan</a></h3>
      <p>PDF</p>
    </div>

    <div class="grid-item">
      <h3><a href="{{ site.baseurl }}/files/Testplan_drönarsvärm.pdf" target="_blank">Testplan</a></h3>
      <p>PDF</p>
    </div>

    <div class="grid-item">
      <h3><a href="">Teknisk rapport</a></h3>
      <p>PDF</p>
    </div>
  </div>
</div>



<!-- TEAM-SECTION -->
<div id="team">
  <h2>The Team</h2>

  <style>
  /* Grid container */
  .custom-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-content: center;
    margin-top: 10px;
    text-align: center;
  }
  .grid-item {
    padding: 10px;
  }
  .grid-item h3 {
    margin: 0;
    font-size: 1.2em;
  }
  .grid-item p {
    margin: 5px 0 0;
    font-size: 1em;
    color: #555;
  }
  .grid-item img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%; /* make it circular */
    margin-bottom: 10px;
    filter: grayscale(100%);
  }
  </style>

  <div class="custom-grid">

    <div class="grid-item">
      <img src="{{ site.baseurl }}/images/heads/Adam.JPG" alt="">
      <h3>Project Lead</h3>
      <p>Adam Mejri</p>
    </div>

    <div class="grid-item">
      <img src="{{ site.baseurl }}/images/heads/Edvard2.jpg" alt="">
      <h3>Software Lead</h3>
      <p>Edvard Wetind</p>
    </div>

    <div class="grid-item">
      <img src="{{ site.baseurl }}/images/heads/Isac_bild.jpg" alt="">
      <h3>Document Manager</h3>
      <p>Isac Widendahl</p>
    </div>

    <div class="grid-item">
      <img src="{{ site.baseurl }}/images/heads/linus2.jpg" alt="">
      <h3>Information Manager</h3>
      <p>Linus Gustafsson</p>
    </div>

    <div class="grid-item">
      <img src="{{ site.baseurl }}/images/heads/Ruskis.PNG" alt="">
      <h3>Simulation Manager</h3>
      <p>Oskar Haapaniemi</p>
    </div>

    <div class="grid-item">
      <img src="{{ site.baseurl }}/images/heads/oskar.jpeg" alt="">
      <h3>Testing Manager</h3>
      <p>Oskar Herling</p>
    </div>

    <div class="grid-item">
      <img src="{{ site.baseurl }}/images/heads/William.jpg" alt="">
      <h3>Design Lead</h3>
      <p>William Olsson</p>
    </div>
  </div>
</div>