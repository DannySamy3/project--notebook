import Image from "next/image";
import Nav from "./Components/nav";
import HomePage from "./Components/HomePage";
import AddProject from "./Components/AddProject";

export default function Home() {
  return (
    <main className="flex">
      <Nav />
      <AddProject />
    </main>
  );
}
