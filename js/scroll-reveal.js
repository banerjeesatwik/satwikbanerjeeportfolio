if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
    document.querySelectorAll(".section-3, #Experience, #Education").forEach((section) => {
        section.classList.add("scroll-reveal-ready");

        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                section.classList.toggle("is-visible", entry.isIntersecting);
            },
            { threshold: 0.15 }
        );

        sectionObserver.observe(section);
    });
}
