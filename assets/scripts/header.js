// document.addEventListener("scroll", function () {
//   const header = document.querySelector(".site-header");

//   if (window.scrollY > 20) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

// window.addEventListener("load", function () {
//   const header = document.querySelector(".site-header");

//   // Only get sections that exist
//   const sections = {};
//   const links = {};

//   // List of your section IDs
//   ["documents", "team", "about"].forEach(id => {
//     const sectionEl = document.getElementById(id);
//     const linkEl = document.querySelector(`a[href*="#${id}"]`);
//     if (sectionEl && linkEl) {
//       sections[id] = sectionEl;
//       links[id] = linkEl;
//     }
//   });

//   function updateOnScroll() {
//     // Header scroll effect
//     if (window.scrollY > 20) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }

//     // Active link highlight
//     let current = null;
//     const scrollPos = window.scrollY + 350; // adjust for fixed header

//     for (const id in sections) {
//       const section = sections[id];
//       if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
//         current = id;
//       }
//     }

//     for (const id in links) {
//       links[id].classList.remove("active");
//     }

//     if (current) {
//       links[current].classList.add("active");
//     }
//   }

//   window.addEventListener("scroll", updateOnScroll);
//   updateOnScroll(); // trigger on page load
// });

window.addEventListener("load", function () {
  const header = document.querySelector(".site-header");

  const sections = {};
  const links = {};

  ["about", "documents", "team"].forEach(id => {
    const sectionEl = document.getElementById(id);
    const linkEl = document.querySelector(`a[href*="#${id}"]`);
    if (sectionEl && linkEl) {
      sections[id] = sectionEl;
      links[id] = linkEl;
    }
  });

  function updateOnScroll() {
    const scrollPos = window.scrollY + header.offsetHeight + 80; // account for fixed header + buffer
    let current = null;

    for (const id in sections) {
      const section = sections[id];
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        current = id;
      }
    }

    for (const id in links) {
      links[id].classList.remove("active");
    }

    if (current) {
      links[current].classList.add("active");

      // Update URL hash without reloading the page
      history.replaceState(null, null, `#${current}`);
    } else {
      // No section is active — remove the hash
      history.replaceState(null, null, window.location.pathname);
    }

    // Optional: header scrolled effect
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateOnScroll);
  updateOnScroll(); // trigger on page load
});



