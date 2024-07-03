import Description from "./components/Description";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Event from "./components/Event";
import Opinion from "./components/Opinions";
import Footer from "./components/Footer";

export default function app() {
  return (
    <>
      {/* Headeer component */}
      <Header />
      <main>
        <Hero />
        <Products />
        <Description />
        <Event />
        <Opinion />
      </main>
      {/* Footer component */}
      <Footer />
    </>
  );
}
