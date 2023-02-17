
// Particles Js Code
// Copied
particlesJS('particles-js',  
  {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 300,
        },
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0","#EF5B0C","#3330E4","#FF9F29","#570A57","#40DFEF","#E9D5DA","#A6D1E6","#BFFFF0"],
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#fff",
        },
        polygon: {
          nb_sides: 10,
        },
        image: {
          src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
          width: 100,
          height: 100,
        },
      },
  
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 100,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 15,
          size_min: 2,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 80,
        color: "#808080",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 10,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: -1000,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 70,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect:true,
  }

);

