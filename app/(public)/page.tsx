import HeroSection from '@/components/home/HeroSection';
import AIFeatures from '@/components/home/AIFeatures';
import PopularCourses from '@/components/home/PopularCourses';
import LearningCategories from '@/components/home/LearningCategories';
import CareerStatistics from '@/components/home/CareerStatistics';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CallToAction from '@/components/home/CallToAction';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AIFeatures />
      <PopularCourses />
      <LearningCategories />
      <CareerStatistics />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Newsletter />
    </>
  );
}
