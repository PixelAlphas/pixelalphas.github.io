var socialMediaElement = `<br>
  <p class="social-media-label-normal">My social medias and Creator pages.</pi>
  <br><br>
  <div class="social-media-icons">
    <a href="https://www.planetminecraft.com/member/arxance/"><img src="../../assets/icons/planetminecraft.png" height="32px" title="PlanetMinecraft" style="image-rendering: pixelated;padding: 0 2px"></a>
    <a href="https://mcpedl.com/user/arxance/"><img src="../../assets/icons/mcpedl.png" height="32px" title="MCPEDL" style="image-rendering: pixelated;padding: 0 2px"></a>
    <a href="https://www.youtube.com/channel/UCVyQ-cBYZBGfRcRY78wrRPw"><img src="../../assets/icons/youtube.png" height="32px" title="Youtube" style="image-rendering: pixelated;padding: 0 2px"></a>
    <a href="https://bsky.app/profile/arxance.bsky.social"><img src="../../assets/icons/bluesky.png" height="32px" title="Bluesky" style="image-rendering: pixelated;padding: 0 2px"></a>
    <a href="https://twitter.com/PixelHarlow"><img src="../../assets/icons/twitter.png" height="32px" title="Twitter (X)" style="image-rendering: pixelated;padding: 0 2px"></a>
    <a href="https://discord.com/invite/ZPAZvtprYa"><img src="../../assets/icons/discord.png" height="32px" title="Discord (Arxance's workstation)" style="image-rendering: pixelated;padding: 0 2px"></a>
    <a href="https://github.com/PixelAlphas"><img src="../../assets/icons/github.png" height="32px" title="Github" style="image-rendering: pixelated;padding: 0 2px"></a>
    <a href="https://www.curseforge.com/members/arxance/projects"><img src="../../assets/icons/curseforge.png" title="Curseforge" height="32px" style="image-rendering: pixelated;padding: 0 2px"></a>
  </div>
  <p class="social-media-label">This website made by ARXANCE under the GPL-3.0 license.</p>`;
var collapseuiTabElement = `
    <a href="../../index.html"><img src="../../assets/logo_white.png" height="32px" title="Arxance" style="image-rendering: pixelated;padding: 0 2px"></a>
    <input type="checkbox" id="sidebar-active">
    <label for="sidebar-active" class="open-sidebar-button">
      <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </label>
    <label id="overlay" for="sidebar-active"></label>
    <div class="links-container">
      <label for="sidebar-active" class="close-sidebar-button">
        <SVG xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        <img src="../../assets/images/collapseui/collapseui_title.png" height="30px" style="padding: 12px 0 0 12px"> 
      </label>
      <label class="home-link"></label>
      <a href="main.html">Main</a>
      <a href="installation.html">Installation</a>
      <a href="qa.html">Q&A</a>
      <a href="changelog.html">Changelog</a>
      <pi class="close-sidebar-button">Collapse-UI and this website made by ARXANCE (@Arcdustry on discord) under the GPL-3.0 license</pi>
    </div>`;
document.getElementById("socialMediaFooter").innerHTML += socialMediaElement;
document.getElementById("collapseuiTabElement").innerHTML += collapseuiTabElement;