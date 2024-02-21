import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useHeroImageReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: -800,
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: "power1.out",
      }
    );
  }, [el, delay]);
};
export const useSocialReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        x: 800,
      },
      {
        x: 0,
        duration: 2,
        delay,
        ease: "power1.out",
      }
    );
  }, [el, delay]);
};

export const useGsapTitleRevealLeft = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        x: -800,
      },
      {
        x: 0,
        duration: 2,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

export const useGsapTitleRevealRight = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        x: 800,
      },
      {
        x: 0,
        duration: 2,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

export const useGsapNavReveal = (els, delay = 0) => {
  useEffect(() => {
    const el = els.map((el) => el.current);
    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [els, delay]);
};

export const useBioReveal = (els, delay = 0) => {
  useEffect(() => {
    const el = els.current;
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 2,
        delay,
        stagger: 0.2,
        ease: "power4.out",
      }
    );
  }, [els, delay]);
};

export const useSectionTitleReveal = (els, delay = 0) => {
  useEffect(() => {
    const el = els.current;
    gsap.fromTo(
      el,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [els, delay]);
};

export const useProjectLeftRightReveal = (els, delay = 0) => {
  useEffect(() => {
    const el = els.map((el) => el.current);
    gsap.fromTo(
      el,
      {
        y: 550,
      },
      {
        y: 0,
        delay,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [els, delay]);
};

export const useSkillLineReveal = (els, delay = 0) => {
  useEffect(() => {
    els.forEach((el) =>
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          onEnter() {
            el.classList.add("reveal");
          },
        },
      })
    );
  }, [els, delay]);
};

export const useSkillTextReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [el, delay]);
};

export const useFooterReveal = (els, delay = 0) => {
  useEffect(() => {
    const el = els.current;
    gsap.fromTo(
      el,
      {
        y: -200,
      },
      {
        y: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [els, delay]);
};

export const useFormControlReveal = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((el) => el.current);
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        delay,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [arr, delay]);
};
