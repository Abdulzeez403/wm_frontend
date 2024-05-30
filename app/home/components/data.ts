export interface ICarouselProps {
  id?: number;
  image: any;
  courseTitle: string;
  profile: any;
  name: string;
}

export const Domedata: ICarouselProps[] = [
  {
    id: 1,
    image: "/assests/carousel1.png",
    courseTitle: "Data Analytics with SQL",
    profile: "/assests/blog.png",
    name: "John Doe",
  },
  {
    id: 2,
    image: "/assests/blog.png",
    courseTitle: "Data Analytics with SQL",
    profile: "/assests/blog.png",
    name: "John Doe",
  },
  {
    id: 3,
    image: "/assests/carousel2.png",
    courseTitle: "Data Analytics with SQL",
    profile: "/assests/Logo.png",
    name: "John Doe",
  },
  {
    id: 4,
    image: "/assests/carousel3.png",
    courseTitle: "Data Analytics with SQL",
    profile: "/assests/Logo.png",
    name: "John Doe",
  },
  {
    id: 5,
    image: "/assests/carousel4.png",
    courseTitle: "Data Analytics with SQL",
    profile: "/assests/Logo.png",
    name: "John Doe",
  },
  {
    id: 6,
    image: "/assests/blog.png",
    courseTitle: "Photography Editing with Adobe Lightroom",
    profile: "/assests/Logo.png",
    name: "John Doe",
  },

  {
    id: 7,
    image: "/assests/blog.png",
    courseTitle: "Data Analytics with SQL",
    profile: "/assests/Logo.png",
    name: "John Doe",
  },
  {
    id: 8,
    image: "/assests/blog.png",
    courseTitle: "Data Analytics with SQL",
    profile: "/assests/Logo.png",
    name: "John Doe",
  },
];

export interface IStepData {
  id: number;
  title: string;
  desc: string;
  number: string;
  img: any;
  show: boolean;
}

export const stepsData = [
  {
    id: 1,
    title: "Login",
    desc: "Start your Walkmetru journey by logging into your account",
    number: "1",
    img: "/assests/login.png",
    show: true,
  },

  {
    id: 2,
    title: "Login",
    desc: "Start your Walkmetru journey by logging into your account",
    number: "2",
    img: "/assests/Search.png",
    show: true,
  },
];

export const stepsData1 = [
  {
    id: 1,
    title: "Create Your Profile",
    desc: "Showcase your expertise by creating a detailed profile. Let others know what skills you have to offer",
    number: "1",
    img: "/assests/profile.png",
    show: true,
  },

  {
    id: 2,
    title: "Open Your Calendar",
    desc: "Make your availability known by opening your calendar. This allows learners to easily book a slot with you.",
    number: "2",
    img: "/assests/calender.png",
    show: true,
  },

  {
    id: 3,
    title: "Start Receiving Bookings",
    desc: "Once your profile is set up, watch your calendar fill up as eager learners book 1-to-1 sessions to learn from your expertise.",
    number: "3",
    img: "/assests/booking.png",
    show: true,
  },
  {
    id: 4,
    title: "Create a Class",
    desc: "Take it a step further by creating classes. Share your knowledge with a broader audience through live 1-to-1 sessions within a class setting.",
    number: "4",
    img: "/assests/classes.png",
    show: true,
  },
];
