import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ExcitingTours from "./components/ExcitingTours";
import Cards from "./components/Cards";
import PopularTours from "./components/PopularTours";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
function App() {
  return (
    <div className="w-full relative mx-auto h-full border md:p-7">
      <Navbar />
      <Header />
      <main>
        <ExcitingTours />
        <Cards/>
        <PopularTours/>
        <Testimonials/>
        <Booking/>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
