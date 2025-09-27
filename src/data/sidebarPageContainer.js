import image from "@/images/resource/featured-image-16.jpg";
import featuredImage from "@/images/resource/featured-image-17.jpg";

export const sidebar = {
  title: "All Services",
  title2: "need Linoor help?",
  text: "Prefer speaking with a human to filling out a form? call corporate office and we will connect you with a team member who can help.",
  phone: "666 888 000",
  navItems: [
    {
      id: 1,
      title: "Website Development",
      href: "/web-development",
    },
    {
      id: 2,
      title: "Graphic Designing",
      href: "/graphic-designing",
    },
    {
      id: 3,
      title: "Digital Marketing",
      href: "/digital-marketing",
    },
    {
      id: 4,
      title: "SEO & Content Writing",
      href: "/seo",
    },
    {
      id: 5,
      title: "App Development",
      href: "/app-development",
    },
    {
      id: 6,
      title: "UI/UX Designing",
      href: "/ui-designing",
    },
  ],
};

const common = {
  image,
  text1:
    "Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  featuredTitle: "planning & strategy",
  featuredText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  featuredImage,
  features: [
    "Research beyond the business plan",
    "Marketing options and rates",
    "The ability to turnaround consulting",
    "Customer engagement matters",
  ],
  text2:
    "Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  text3:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
};

export const webDevelopment = {
  ...common,
  title: "Website Development",
};

export const graphicDesigning = {
  ...common,
  title: "Graphic Designing",
};

export const digitalMarketing = {
  ...common,
  title: "Digital Marketing",
};

export const seo = {
  ...common,
  title: "SEO & Content Writing",
};

export const appDevelopment = {
  ...common,
  title: "App Development",
};

export const uiDesigning = {
  ...common,
  title: "UI/UX Designing",
};
