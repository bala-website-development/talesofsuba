import image from "@/images/resource/news-7.jpg";

export const blogPage = {
  title: "Delivering the best digital marketing",
  text: "There are many variations of passages of available but majority have alteration in some by inject humour or random words. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
  videoId: "Get7rqXYrbQ",
  newsData: [
    {
      id: 1,
      image: "news-7.jpg",
      date: "20 Mar",
      admin: "Admin",
      comments: 2,
      title: "basic rules of running web agency business",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    },
    {
      id: 2,
      image: "news-8.jpg",
      date: "20 Mar",
      admin: "Admin",
      comments: 2,
      showVideo: true,
      title: "Delivering the best digital marketing",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    },
    {
      id: 3,
      image: "news-9.jpg",
      date: "20 Mar",
      admin: "Admin",
      comments: 2,
      title: "Introducing the latest linoor features",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    },
  ],
};

export const sidebar = {
  categories: [
    {
      id: 1,
      title: "Business",
      href: "/blog",
    },
    {
      id: 2,
      title: "Introductions",
      href: "/blog",
    },
    {
      id: 3,
      title: "One Page Template",
      href: "/blog",
    },
    {
      id: 4,
      title: "Parallax Effects",
      href: "/blog",
    },
    {
      id: 5,
      title: "New Technologies",
      href: "/blog",
    },
    {
      id: 6,
      title: "Video Backgrounds",
      href: "/blog",
    },
  ],
  tags: [
    {
      id: 1,
      title: "Business",
      href: "#",
    },
    {
      id: 2,
      title: "Agency",
      href: "#",
    },
    {
      id: 3,
      title: "Technology",
      href: "#",
    },
    {
      id: 4,
      title: "Parallax",
      href: "#",
    },
    {
      id: 5,
      title: "Innovative",
      href: "#",
    },
    {
      id: 6,
      title: "Professional",
      href: "#",
    },
    {
      id: 7,
      title: "Experience",
      href: "#",
    },
  ],
  comments: [
    {
      id: 1,
      text: "A Wordpress Commenter on Launch New Mobile App",
    },
    {
      id: 2,
      text: "John Doe on Template: \n Comments",
    },
    {
      id: 3,
      text: "A Wordpress Commenter on Launch New Mobile App",
    },
    {
      id: 4,
      text: "John Doe on Template: \n Comments",
    },
  ],
  posts: [
    {
      id: 1,
      title: "EXPERIENCES THAT CONNECT WITH PEOPLE",
      image: "news-thumb-1.jpg",
    },
    {
      id: 2,
      title: "WE BUILD AND ACTIVATE BRANDS INSIGHT",
      image: "news-thumb-2.jpg",
    },
    {
      id: 3,
      title: "A DEEP UNDERSTANDING OF OUR AUDIENCE",
      image: "news-thumb-3.jpg",
    },
  ],
};

export const blogDetails = {
  image,
  date: "20 Mar",
  admin: "Admin",
  title: "basic rules of running web agency business",
  text1: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  text2: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.",
  tags: ["Book Reviews", "Blogs"],
  category: ["Book Reviews", "Blogs"],
  posts: ["Book Reviews", "Blogs"],
  comments: [
    {
      id: 1,
      image: "author-7.jpg",
      name: "Jessica Brown",
      date: "20 May, 2020 . 4:00 pm",
      text: "Lorem Ipsum is simply dummy free text of the available printing and typesetting been the industry standard dummy text ever sincer condimentum purus.",
    },
    {
      id: 2,
      image: "author-8.jpg",
      name: "David Martin",
      date: "20 May, 2020 . 4:00 pm",
      text: "Lorem Ipsum is simply dummy free text of the available printing and typesetting been the industry standard dummy text ever sincer condimentum purus.",
    },
  ],
  inputs: [
    {
      name: "username",
      placeholder: "Your Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      placeholder: "Email Address",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      placeholder: "Phone Number",
      type: "text",
      required: true,
    },
    {
      name: "subject",
      placeholder: "Subject",
      type: "text",
      required: true,
    },
    {
      name: "message",
      placeholder: "Your Comments",
      required: true,
    },
  ],
};
