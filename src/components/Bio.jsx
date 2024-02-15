import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);
  useBioReveal(bioRef, 2.4);
  return (
    <div className="container mx-auto mt-20 overflow-hidden">
      <p ref={bioRef}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, sit
        voluptates perspiciatis ut ipsum vel! Neque cum quibusdam accusamus
        iusto laboriosam corporis doloribus iure natus, suscipit unde harum
        dolorem quod nam rerum quia? Perspiciatis, repellat nesciunt repudiandae
        veritatis quasi iste soluta facilis qui tempore delectus nulla, velit ea
        dolore, eius rem laudantium quidem eum! Adipisci non sapiente vero. Iure
        dignissimos debitis numquam asperiores ex quibusdam maiores? Sunt nobis
        dolore quidem, provident quis animi, incidunt quaerat qui natus ea ipsum
        vero a sint eligendi voluptates minima ad velit veritatis ipsa eius
        atque, minus beatae nostrum nulla. Eos odit debitis praesentium quidem?
      </p>
    </div>
  );
};

export default Bio;
