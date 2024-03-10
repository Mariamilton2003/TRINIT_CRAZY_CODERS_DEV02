import {
  DetailsSection,
  FeaturesCourseSection,
  HeroSection,
  NavBar,
} from "../Components";

const LandingPage = () => {
  return (
    <div className="w-full">
      <div className="fixed top-0 w-full z-10">
        <NavBar />
      </div>
      <div className="w-full h-full p-3 mt-12 bg-linearPrimary">
        <HeroSection />
      </div>
      <div className="w-full relative scrollbar-hide">
        <DetailsSection />
      </div>
      <div className="w-full relative top-[100vh] mt-12 scrollbar-hide">
        <FeaturesCourseSection />
      </div>
    </div>
  );
};

export default LandingPage;
