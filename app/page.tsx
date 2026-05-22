import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ProblemSplit } from '@/components/sections/ProblemSplit';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { AuthorityBlock } from '@/components/sections/AuthorityBlock';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSplit />
      <ProcessSteps />
      <AuthorityBlock />
      <ServicesGrid />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
