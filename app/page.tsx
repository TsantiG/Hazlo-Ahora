import nav from "./components/nav.user";
import Homeview from "./components/home.view";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-5">
      <div>
        <Homeview />
      </div>

    </main>
  );
}
