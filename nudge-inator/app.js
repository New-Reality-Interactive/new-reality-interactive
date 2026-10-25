(() => {
  const stage = document.getElementById("stage");
  const slides = [...stage.querySelectorAll(".slide")];
  const n = slides.length;
  const captionEls = [...document.querySelectorAll("#captions .caption")];
  const captions = captionEls.map((el) => [el.querySelector("h2").textContent]);
  const dotsBox = document.getElementById("dots");
  let index = 0;   // the screen in front
  let drag = 0;    // live drag, in screens

  const dots = captions.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "dot"; b.setAttribute("aria-label", `Screen ${i + 1}: ${captions[i][0]}`);
    b.addEventListener("click", () => go(i));
    dotsBox.appendChild(b);
    return b;
  });

  const mod = (a) => ((a % n) + n) % n;
  // Shortest signed distance from the front, so the ring wraps both ways.
  const offset = (i) => { let d = i - index - drag; d = mod(d + n / 2) - n / 2; return d; };
  const slideWidth = () => slides[0].offsetWidth;

  // The screens sit on a ring. The one in front is full size; the rest are small and far back,
  // turned only a little so they still face you, and each grows as it swings into focus.
  const sizeAt = [1, 0.36, 0.24, 0.2];
  const fadeAt = [1, 0.85, 0.5, 0];
  const lerp = (table, a) => {
    const k = Math.min(Math.floor(a), table.length - 2), t = Math.min(a - k, 1);
    return table[k] + (table[k + 1] - table[k]) * t;
  };
  function layout() {
    const w = slideWidth();
    const step = (2 * Math.PI) / n;
    // Wide enough to spread the ring, narrow enough that the side screens stay on a phone.
    const half = stage.clientWidth / 2;
    const rx = Math.min(w * 1.05, (half - w * 0.2) / Math.sin(step));
    const rz = w * 1.6;
    slides.forEach((el, i) => {
      const d = offset(i), a = Math.abs(d), angle = d * step;
      const x = rx * Math.sin(angle);
      const z = rz * (Math.cos(angle) - 1);
      el.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${-d * 18}deg) scale(${lerp(sizeAt, a)})`;
      el.style.opacity = String(lerp(fadeAt, a));
      el.style.filter = a < 0.05 ? "none" : `brightness(${1 - 0.18 * Math.min(a, 2)})`;
      el.style.zIndex = String(100 - Math.round(a * 10));
      const front = i === index && drag === 0;
      el.setAttribute("aria-hidden", front ? "false" : "true");
    });
    dots.forEach((b, i) => b.setAttribute("aria-current", i === index ? "true" : "false"));
  }

  function caption() {
    captionEls.forEach((el, i) => el.setAttribute("aria-hidden", i === index ? "false" : "true"));
  }

  function go(i) { index = mod(i); drag = 0; layout(); caption(); }

  document.getElementById("prev").addEventListener("click", () => go(index - 1));
  document.getElementById("next").addEventListener("click", () => go(index + 1));
  stage.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1); }
  });

  // Swipe or drag: the ring follows the finger, then settles on the nearest screen.
  let startX = null, startY = 0, moved = false, pid = null;
  stage.addEventListener("pointerdown", (e) => {
    startX = e.clientX; startY = e.clientY; moved = false; pid = e.pointerId;
  });
  stage.addEventListener("pointermove", (e) => {
    if (startX === null || e.pointerId !== pid) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (!moved) {
      if (Math.abs(dx) < 6 || Math.abs(dx) < Math.abs(dy)) return;
      moved = true; stage.classList.add("dragging");
      try { stage.setPointerCapture(pid); } catch (_) {}
    }
    drag = -dx / (slideWidth() * 1.1);
    layout();
  });
  function end(e) {
    if (startX === null || e.pointerId !== pid) return;
    stage.classList.remove("dragging");
    if (moved) {
      const fling = Math.abs(drag) > 0.15 && Math.abs(drag) < 0.5 ? Math.sign(drag) : 0;
      go(Math.round(index + drag) + (Math.round(drag) === 0 ? fling : 0));
    } else {
      // A tap on a screen at the side brings it to the front.
      const hits = slides.filter((el) => {
        const r = el.getBoundingClientRect();
        return el.style.opacity !== "0" && e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      });
      if (hits.length) go(slides.indexOf(hits.reduce((a, b) => (+a.style.zIndex > +b.style.zIndex ? a : b))));
    }
    startX = null; pid = null;
  }
  stage.addEventListener("pointerup", end);
  stage.addEventListener("pointercancel", (e) => { if (e.pointerId === pid) { stage.classList.remove("dragging"); drag = 0; layout(); startX = null; pid = null; } });
  window.addEventListener("resize", layout);

  // Open with the first screen growing into place from the back.
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    stage.classList.add("dragging");
    drag = -0.9; layout();
    requestAnimationFrame(() => requestAnimationFrame(() => { stage.classList.remove("dragging"); drag = 0; layout(); }));
  } else layout();
})();
