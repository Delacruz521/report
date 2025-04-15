function openMenu() {
    document.getElementById("menu-bar").style.width = "250px";
  }
  
  function closeMenu() {
    document.getElementById("menu-bar").style.width = "0";
  }
  
  // Typewriter 1
  const text1 = "Human Flourishing in Progress and De-development A Brief Report on Jason Hickel's Framework";
  let i1 = 0;
  const typingElement1 = document.getElementById("typing-texts");
  
  function typeWriter1() {
    if (i1 < text1.length) {
      typingElement1.innerHTML += text1.charAt(i1);
      i1++;
      setTimeout(typeWriter1, 40);
    }
  }

  
  // Run them on page load
  window.onload = function () {
    typeWriter1();
  };
  