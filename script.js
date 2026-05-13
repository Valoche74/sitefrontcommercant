const reviewButton = document.querySelector("#reviewButton");
const claimButton = document.querySelector("#claimButton");
const mysteryCard = document.querySelector("#mysteryCard");
const couponForm = document.querySelector("#couponForm");
const demoScreens = [...document.querySelectorAll("[data-demo-screen]")];
const heroSlides = [...document.querySelectorAll(".showcase-slide")];
const heroDots = [...document.querySelectorAll(".showcase-dot")];
const showcaseTitle = document.querySelector("#showcaseTitle");
const journeyTimeline = document.querySelector(".journey-timeline");
const journeySteps = [...document.querySelectorAll(".timeline-step")];

let activeJourneyStep = 0;
let activeHeroSlide = 0;

function updateJourneyTimeline(index) {
  if (!journeyTimeline || journeySteps.length === 0) return;

  const clampedIndex = index % journeySteps.length;
  const progress = (clampedIndex / (journeySteps.length - 1)) * 100;

  journeyTimeline.style.setProperty("--timeline-progress", `${progress}%`);
  journeySteps.forEach((step, stepIndex) => {
    step.classList.toggle("is-active", stepIndex === clampedIndex);
    step.classList.toggle("is-done", stepIndex < clampedIndex);
  });
}

function showDemoScreen(name) {
  demoScreens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.demoScreen === name);
  });
}

function showHeroSlide(index) {
  if (heroSlides.length === 0) return;

  activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeHeroSlide);
  });
  heroDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeHeroSlide);
  });

  if (showcaseTitle) {
    showcaseTitle.textContent = heroSlides[activeHeroSlide].dataset.title || "Demo produit";
  }
}

if (journeySteps.length > 0) {
  updateJourneyTimeline(activeJourneyStep);

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion) {
    window.setInterval(() => {
      activeJourneyStep += 1;
      updateJourneyTimeline(activeJourneyStep);
    }, 1800);
  }
}

if (heroSlides.length > 0) {
  showHeroSlide(activeHeroSlide);

  heroDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showHeroSlide(Number(dot.dataset.heroTarget || 0));
    });
  });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion) {
    window.setInterval(() => {
      showHeroSlide(activeHeroSlide + 1);
    }, 3200);
  }
}

reviewButton?.addEventListener("click", () => {
  showDemoScreen("game");
});

mysteryCard?.addEventListener("click", () => {
  mysteryCard.classList.add("is-flipped");
  claimButton?.classList.remove("is-hidden");
  claimButton?.classList.add("is-visible");
});

claimButton?.addEventListener("click", () => {
  showDemoScreen("form");
});

couponForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  couponForm.querySelector("button").textContent = "Gain envoye";
});

document.querySelectorAll("details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    document.querySelectorAll("details").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
