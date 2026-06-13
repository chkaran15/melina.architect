
import { getSession } from "@/server/better-auth/server";
import { api, HydrateClient } from "@/trpc/server";
import { CTASection } from "@/components/sections/CTASection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getSession();

  if (session) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main>
        <HeroSection />
        <IntroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </HydrateClient>
  );
}
