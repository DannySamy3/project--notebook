import Image from "next/image";
import Nav from "./Components/nav";
import HomePage from "./Components/HomePage";

export default function Home() {
  return (
    <main className="flex">
      <Nav></Nav>
      <HomePage />
    </main>
  );
}
