window.addEventListener("load", function () {
  function animateOdometer(el, value, duration = 1200) {
    const od = new Odometer({
      el: el,
      value: 0,
      format: '(,ddd)',
      duration: duration
    });
    od.update(value);
  }

  const counters = [
    { selector: ".F-odometer", value: 4023 },
    { selector: ".R-odometer", value: 5234 },
    { selector: ".G-odometer", value: 138 }
  ];

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        const counter = counters.find(c => entry.target.matches(c.selector));
        if (counter) {
          animateOdometer(entry.target, counter.value);
          obs.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 1.0 });

  counters.forEach(counter => {
    const el = document.querySelector(counter.selector);
    observer.observe(el);
  });
});

//UNIMPORTANT//
const secretCode = "DEADHEADING";
let typed = "";

document.addEventListener("keydown", (e) => {
  typed += e.key.toUpperCase();
  if (typed.length > secretCode.length) typed = typed.slice(-secretCode.length);

  if (typed === secretCode) {
    // Redirect to your chosen URL
    window.location.href = "https://example.com"; 
    typed = "";
  }
});