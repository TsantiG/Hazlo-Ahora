import CheckIcon from "@/public/icon/icon_components";
import Image from "next/image";

export default function nav() {
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-emerald-400 text-white rouded-lg shadow-lg mb-8">
      <section className="flex items-center space-x-2">
        <Image
          src="/icon/sin_fondo.png"
          alt="Logo"
          width={80}
          height={80}
        />
        <h1 >Hazlo hoy</h1>
      </section>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
