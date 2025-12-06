import { Hero } from "@/components/hero"
import { LevelsSection } from "@/components/levels-section"
import { ConsultingSection } from "@/components/consulting-section"
import { SolversGrid } from "@/components/solvers-grid"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTA } from "@/components/final-cta"

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen pt-24 page-fade">
      <Hero />
      <LevelsSection />
      <ConsultingSection />
      <SolversGrid />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </div>
  )
}
