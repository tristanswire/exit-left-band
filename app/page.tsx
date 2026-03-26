import Hero from "@/components/Hero";
import Shows from "@/components/Shows";
import About from "@/components/About";
import Listen from "@/components/Listen";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Shows />
      <About />
      <Listen />
      <Gallery />
      <BookingForm />
    </main>
  );
}
