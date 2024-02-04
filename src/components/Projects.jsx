import Project from "./Project";
import SectionTitle from "./SectionTitle";
const data = [
  {
    id: 1,
    title: "TORQUE XRREME-A CAR REPAIR SERVICES",
    img1: "https://res.cloudinary.com/dbuszqydh/image/upload/v1706022886/Personal-portfolio2/FreshCart-eCommerce-HTML-Template-600x450_ujjxmm.webp",
    img2: "https://res.cloudinary.com/dbuszqydh/image/upload/v1706022884/Personal-portfolio2/Booking-Multipurpose-Online-Booking-Theme-600x450_g10jaz.webp",
    description:
      "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lore mauris. Cum sociis natoque penatibus et just preceding the sea of the sea was the most convenient",
    tools: [
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "ReactJS",
      "Firebase",
      "Tailwindcss",
    ],
    liveLink: "https://github.com/",
    frontEndLink: "https://github.com/",
    backEndLink: "https://github.com/",
  },
  {
    id: 2,
    title: "TORQUE XRREME-A CAR REPAIR SERVICES",
    img1: "https://res.cloudinary.com/dbuszqydh/image/upload/v1706022886/Personal-portfolio2/FreshCart-eCommerce-HTML-Template-600x450_ujjxmm.webp",
    img2: "https://res.cloudinary.com/dbuszqydh/image/upload/v1706022884/Personal-portfolio2/Booking-Multipurpose-Online-Booking-Theme-600x450_g10jaz.webp",
    description:
      "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lore mauris. Cum sociis natoque penatibus et just preceding the sea of the sea was the most convenient",
    tools: [
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "ReactJS",
      "Firebase",
      "Tailwindcss",
    ],
    liveLink: "https://github.com/",
    frontEndLink: "https://github.com/",
    backEndLink: "https://github.com/",
  },
  {
    id: 3,
    title: "TORQUE XRREME-A CAR REPAIR SERVICES",
    img1: "https://res.cloudinary.com/dbuszqydh/image/upload/v1706022886/Personal-portfolio2/FreshCart-eCommerce-HTML-Template-600x450_ujjxmm.webp",
    img2: "https://res.cloudinary.com/dbuszqydh/image/upload/v1706022884/Personal-portfolio2/Booking-Multipurpose-Online-Booking-Theme-600x450_g10jaz.webp",
    description:
      "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lore mauris. Cum sociis natoque penatibus et just preceding the sea of the sea was the most convenient",
    tools: [
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "ReactJS",
      "Firebase",
      "Tailwindcss",
    ],
    liveLink: "https://github.com/",
    frontEndLink: "https://github.com/",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40 " id="project">
      <SectionTitle title={"projects"} />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
