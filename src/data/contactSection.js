export const contactSection = {
  inputs: [
    {
      name: "username",
      type: "text",
      placeholder: "Your Name",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Phone Number",
      required: true,
    },
    {
      name: "subject",
      type: "text",
      placeholder: "Subject",
      required: true,
    },
    {
      name: "message",
      placeholder: "Write Message",
      required: true,
    },
  ],
  title: "Contact Us",
  contacts: [
    {
      id: 1,
      name: "Tales of SuBa",
      youtube: "https://www.youtube.com/@talesofsuba",
      email: "talesofsuba@gmail.com",
      whatsapp: "",
      instagram: "https://www.instagram.com/talesofsuba/",
      iconins: "fab fa-instagram",
      iconyt: "fab fa-youtube",
      iconemail: "fab fa-envelope",
    },
    {
      id: 2,
      name: "SSN Digital Media Services",
      youtube: "https://www.youtube.com/@ssndigitalmediaservices",
      email: "ssndigitalmediaservices@gmail.com",
      whatsapp: "",
      instagram: "https://www.instagram.com/ssndigitalmedia/",
      iconins: "fab fa-instagram",
      iconyt: "fab fa-youtube",
      iconemail: "fab fa-envelope",
    },
  ],
};

export const contactSectionTwo = {
  title: "Write us any message",
  text: "Lorem Ipsum is simply proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.",
  socials: ["fab fa-twitter", "fab fa-facebook", "fab fa-pinterest-p", "fab fa-instagram"],
};

export const contactInfoTwo = [
  {
    id: 1,
    icon: "fa fa-map-marker-alt",
    text: "66 Broklyn Street, USA",
  },
  {
    id: 2,
    icon: "fa fa-envelope",
    text: "needhelp@linoor.com",
    email: true,
  },
  {
    id: 3,
    icon: "fa fa-phone",
    text: "+92 666 888 0000",
    phone: true,
  },
];
