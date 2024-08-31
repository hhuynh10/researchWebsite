import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Members from "@/components/Members";



export default function Home() {
  return (
    <main className="relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Members />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
