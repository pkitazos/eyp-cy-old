const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  { threshold: 0 }
);

const hiddenLeft = document.querySelectorAll(".hide-left");
hiddenLeft.forEach((el) => observer.observe(el));

const hiddenRight = document.querySelectorAll(".hide-right");
hiddenRight.forEach((el) => observer.observe(el));

// TODO: create separate observer for UpcomingEventcards that has a positive rootMargin of X to be able to load all potentially visible cards