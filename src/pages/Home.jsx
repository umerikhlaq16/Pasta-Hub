import React from "react";


// Sections
import HeroSection from "../components/HeroSection";
import MainstayMenu from "../components/MainstayMenu";
import FeaturedDish from "../components/FeatureCards";
import ProductGrid from "../components/ProductGrid";
import TopPicks from "../components/TopPicks";
import ReservationSection from "../components/Booking";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductGrid />
      <MainstayMenu/>
      <FeaturedDish/>
      <TopPicks/>
      <ReservationSection/>
      <Footer/>
    </>
  );
}
