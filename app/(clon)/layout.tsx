import type { Metadata } from "next";
import links from "@/lib/pawshyLinks.json";
import scripts from "@/lib/pawshyScripts.json";
import PawshyHeader from "@/components/pawshy/PawshyHeader";
import PawshyFooter from "@/components/pawshy/PawshyFooter";
import PawshyMenuMovil from "@/components/pawshy/PawshyMenuMovil";
import CarritoFab from "@/components/vdp/CarritoFab";

export const metadata: Metadata = {
  title: "Vida de Perros — Veterinaria, peluquería y pet shop",
  description: "Veterinaria, peluquería canina y pet shop. Reservá tu turno online.",
  icons: { icon: "/pawshy/favicon-vdp.svg" },
};

export default function ClonLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {links.map((href) => (<link key={href} rel="stylesheet" href={href} />))}
        <link rel="stylesheet" href="/pawshy/inline.css" />
      </head>
      <body className="home wp-singular page-template-default page page-id-15 wp-embed-responsive wp-theme-uicore-pro uicore-animate-expand ui-a-dsmm-expand  elementor-default elementor-kit-3 elementor-page elementor-page-15" suppressHydrationWarning>
        <div className="uicore-animation-bg" />
        <div className="uicore-mobile-menu-overflow" suppressHydrationWarning>
          <div className="uicore-body-content" suppressHydrationWarning>
            <div id="uicore-page" suppressHydrationWarning>
              <PawshyHeader />
              {children}
              <PawshyFooter />
            </div>
            <div id="uicore-back-to-top" className="uicore-back-to-top uicore-i-arrow uicore_hide_mobile" />
          </div>
          <PawshyMenuMovil />
        </div>
        <CarritoFab />
        {scripts.map((s, i) =>
          "src" in s ? <script key={i} src={s.src} /> : <script key={i} dangerouslySetInnerHTML={{ __html: s.inline }} />,
        )}
      </body>
    </html>
  );
}
