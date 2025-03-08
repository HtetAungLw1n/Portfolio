import randomly from "../assets/randomly.png";
import minisocialmedia from "../assets/minisocialmedia.png";
import coffeebar from "../assets/coffeebar.png";
import medicart from "../assets/medicart.png";
import jujutsukaisen from "../assets/jujutsukaisen.png";
import taiju from "../assets/taiju.png";

export const projects = [
  {
    id: 1,
    name: "Randomly",
    description:
      "React.js နဲ့ Node.js သုံးပြီး Full-stack ဆောက်ထားတဲ့အပြင် deployment ပါလုပ်ထားတဲ့ News Website.",
    demolink: "https://randomly.netlify.app/",
    githublink: "https://github.com/HtetAungLw1n/Randomly.git",
    tech: ["React", "Tailwind Css", "Vite", "Node.js"],
    image: randomly,
  },
  {
    id: 2,
    name: "Mini Soical Media",
    description: " PHP နဲ့ MySql သုံးထား တဲ့ Mini Social Media Website.",
    demolink: null,
    githublink: "https://github.com/HtetAungLw1n/mini-social-media.git",
    tech: ["Php", "Tailwind Css", "MySql", "Xampp"],
    image: minisocialmedia,
  },
  {
    id: 3,
    name: "Taiju",
    description:
      "  မိမိ acc တစ်ခုထဲနဲ့ တစ်ခြားသော platform တွေက acc တွေကို Link အဖြစ်နဲ့စုပေးထားနိုင်တဲ့ Website.",
    demolink: null,
    githublink: "https://github.com/HtetAungLw1n/Taiju.git",
    tech: ["React", "Tailwind Css", "Firebase", "Vite"],
    image: taiju,
  },

  {
    id: 4,
    name: "Coffee Bar",
    description:
      "Coffee ချစ်သူတွေ ကိုယ်တိုင်ကော်ဖီတစ်ခွက် ပြုလုပ်နိုင်ဖို့ Recipes တွေရှိတဲ့ Blog.",
    demolink: null,
    githublink: "https://github.com/HtetAungLw1n/coffee-bar.git",
    tech: ["Html", "Tailwind Css", "Javascript", "Vite"],
    image: coffeebar,
  },
  {
    id: 5,
    name: "Medi-Cart",
    description:
      "React Redux အသုံးပြုထားတဲ့ ဆေးတွေကို Cart system နဲ့ မှာယူလို့ရတဲ့ Project.",
    demolink: null,
    githublink: "https://github.com/HtetAungLw1n/medi-cart.git",
    tech: ["React", "React Redux", "Tailwind Css", "Vite"],
    image: medicart,
  },
  {
    id: 6,
    name: "Jujutsu Kaisen",
    description: "Aesthetic responsive Jujutsu kaisen fan-made website.",
    demolink: "https://htetaunglw1n.github.io/jujutsu-kaisen/",
    githublink: "https://github.com/HtetAungLw1n/jujutsu-kaisen.git",
    tech: ["Html", "Css", "Javascript"],
    image: jujutsukaisen,
  },
];
