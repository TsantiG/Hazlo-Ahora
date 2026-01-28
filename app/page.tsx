
import Homeview from "./components/homeview";
import FooterObserver from "./components/observers/Footer.observer";

export default function Home() {

  return (
    <main className=" grid flex-col w-full min-h-screen p-5">
      <Homeview />
      <FooterObserver />
    
    </main>
  );
}


