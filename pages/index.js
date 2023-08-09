import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/component/Nav";
import Footer from "@/component/Footer";
import Main from "@/component/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Nav />
      <main className="wrapper">
        <Main/>
        <Footer />
      </main>
    </div>
  );
}
