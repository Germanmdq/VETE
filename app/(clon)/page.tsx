import PageShell from "@/components/pawshy/PageShell";
import PawshyHero from "@/components/pawshy/PawshyHero";
import PawshyIntro from "@/components/pawshy/PawshyIntro";
import PawshyServicios from "@/components/pawshy/PawshyServicios";
import PawshyGaleria from "@/components/pawshy/PawshyGaleria";
import PawshyTestimonios from "@/components/pawshy/PawshyTestimonios";
import PawshyPrecios from "@/components/pawshy/PawshyPrecios";
import PawshyUbicacion from "@/components/pawshy/PawshyUbicacion";
import PawshyCta from "@/components/pawshy/PawshyCta";

export default function Home() {
  return (
    <PageShell>
      <PawshyHero />
      <PawshyIntro />
      <PawshyServicios />
      <PawshyGaleria />
      <PawshyTestimonios />
      <PawshyPrecios />
      <PawshyUbicacion />
      <PawshyCta />
    </PageShell>
  );
}
