import { useEffect } from "react";

export const useCustomCursor = (innerCursorRef, outerCursorRef) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
      let x = e.clientX;
      let y = e.clientY;

      innerCursorRef.current.style.left = `${x}px`;
      innerCursorRef.current.style.top = `${y}px`;
      outerCursorRef.current.style.left = `${x}px`;
      outerCursorRef.current.style.top = `${y}px`;

      const links = Array.from(document.querySelectorAll("a"));

      links.forEach((link) => {
        link.addEventListener("mousemove", () => {
          innerCursorRef.current.classList.add("grow");
        });

        link.addEventListener("mouseleave", () => {
          innerCursorRef.current.classList.remove("grow");
        });
      });
    }
  }, [innerCursorRef, outerCursorRef]);
};
