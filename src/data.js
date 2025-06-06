import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/flutter.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/html.png";
import Tools8 from "/assets/tools/python.png";
import Tools9 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/ai.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Flutter",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "HTML",
    ket: "Markup Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Python",
    ket: "Language",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Github",
    ket: "Repository",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Portofolio",
    desk: "Portofolio Pribadi",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website SakuIn",
    desk: "Website untuk mengelola keuangan, baik pemasukan maupun pengeluaran",
    tools: ["MySQL", "Laravel", "Bootstrap"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Pemilu",
    desk: "Website untuk mengelola pemilihan umum",
    tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Aplikasi Food Delivery",
    desk: "Aplikasi untuk Pemesanan dan Pengiriman Makanan",
    tools: ["Flutter", "Dart", "Firebase"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Website FoodGo",
    desk: "Website yang terintegrasi dari aplikasi Food Delivery yang dibuat untuk pengelolaan pengiriman dan pemesanan makanan",
    tools: ["Laravel", "Firebase", "PHP"],
    dad: "400",
  },
];
