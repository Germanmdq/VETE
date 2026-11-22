"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Fraunces, Manrope } from "next/font/google";
import styles from "./HeroVidaDePerros.module.css";

// Fuentes propias de esta sección (no hay fuente global).
const display = Fraunces({ subsets: ["latin"], weight: ["800"], style: ["normal", "italic"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-body" });

// Fotos reales a pantalla completa: public/img/vdp-hero-1.jpg … 5.jpg
const SLIDES = [
  { img: "/img/vdp-hero-1.jpg", label: "Consultas y control", sub: "Veterinaria", pos: "center", by: "Basile Morin", lic: "CC BY-SA 4.0", src: "https://commons.wikimedia.org/wiki/File:Four_dogs_running_at_golden_hour_in_the_countryside_of_Don_Det_Laos.jpg" },
  { img: "/img/vdp-hero-2.jpg", label: "Baño y corte", sub: "Peluquería canina", pos: "center 40%", by: "Basile Morin", lic: "CC BY-SA 4.0", src: "https://commons.wikimedia.org/wiki/File:Liver_yellow_dog_in_the_water_looking_at_viewer_at_golden_hour_in_Don_Det_Laos.jpg" },
  { img: "/img/vdp-hero-3.jpg", label: "Alimento y accesorios", sub: "Pet shop", pos: "center", by: "W.carter", lic: "CC0", src: "https://commons.wikimedia.org/wiki/File:Two_French_bulldogs_swimming_in_life_jackets.jpg" },
  { img: "/img/vdp-hero-4.jpg", label: "Cariño todos los días", sub: "Vida de Perros", pos: "center 35%", by: "Basile Morin", lic: "CC BY-SA 4.0", src: "https://commons.wikimedia.org/wiki/File:Human%E2%80%93canine_friendship_-_girl_hugging_her_dog_tightly_at_golden_hour_in_Laos.jpg" },
  { img: "/img/vdp-hero-5.jpg", label: "Vacunas y prevención", sub: "Salud", pos: "center", by: "Lucasbosch", lic: "CC BY-SA 4.0", src: "https://commons.wikimedia.org/wiki/File:Dalmatian_fetching_a_stick.jpg" },
];
const ease = [0.76, 0, 0.24, 1] as const;
const DUR = 5;

export default function HeroVidaDePerros() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const startX = useRef<number | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const yMeta = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const dim = useTransform(scrollYProgress, [0, 1], [0.3, 0.85]);

  const go = (d: number) => setI((p) => (p + d + SLIDES.length) % SLIDES.length);
  useEffect(() => {
    const t = setTimeout(() => setI((p) => (p + 1) % SLIDES.length), DUR * 1000);
    return () => clearTimeout(t);
  }, [i]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (window.scrollY > window.innerHeight * 0.5) return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const s = SLIDES[i];

  return (
    <section
      ref={ref}
      className={`${styles.hero} ${display.variable} ${body.variable} relative h-[100svh] min-h-[620px] touch-pan-y select-none overflow-hidden`}
      onPointerDown={(e) => { if (!(e.target as HTMLElement).closest("a,button")) startX.current = e.clientX; }}
      onPointerUp={(e) => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        startX.current = null;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      }}
    >
      {/* cortinas de apertura */}
      {["top-0", "bottom-0"].map((pos) => (
        <motion.div key={pos} initial={{ height: "50.5%" }} animate={{ height: "0%" }} transition={{ duration: 1, delay: 0.1, ease }} className={`absolute left-0 ${pos} z-[70] w-full bg-[#07120d]`} />
      ))}

      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div key={i} initial={{ clipPath: "inset(0 0 0 100%)" }} animate={{ clipPath: "inset(0 0 0 0%)" }} exit={{ opacity: 0.6 }} transition={{ duration: 1.1, ease }} className="absolute inset-0">
            <Image src={s.img} alt={s.label} fill priority={i === 0} sizes="100vw" className={`${styles.kb} object-cover`} style={{ objectPosition: s.pos }} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.div style={{ opacity: dim }} className="absolute inset-0 bg-[#07120d]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07120d]/90 via-transparent to-[#07120d]/50" />
      <div className={styles.grain} />

      <a href={s.src} target="_blank" rel="noopener noreferrer" className="absolute right-4 top-24 z-20 hidden text-[11px] text-[#f6efe3]/50 no-underline hover:text-[#f6efe3] md:block">
        Foto: {s.by} · {s.lic}
      </a>

      {/* barra superior */}
      <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-5 py-6 md:px-10">
        <a href="#" className="flex items-center gap-2.5 text-[1.1rem] font-bold text-[#f6efe3] no-underline">
          <svg width="26" height="26" viewBox="0 0 64 64" fill="#ffc247" aria-hidden><ellipse cx="32" cy="42" rx="15" ry="12" /><ellipse cx="13" cy="26" rx="6" ry="8" /><ellipse cx="25" cy="14" rx="6" ry="8.5" /><ellipse cx="39" cy="14" rx="6" ry="8.5" /><ellipse cx="51" cy="26" rx="6" ry="8" /></svg>
          Vida de Perros
        </a>
        <nav className="hidden gap-8 text-[0.95rem] font-semibold md:flex">
          {["Servicios", "Tienda", "Promociones", "Ubicación"].map((l) => (
            <a key={l} href="#" className="text-[#f6efe3]/85 no-underline transition hover:text-[#ffc247]">{l}</a>
          ))}
        </nav>
        <a href="#" className={`${styles.btn} !px-5 !py-3 !text-[0.9rem]`}>Sacar turno</a>
      </motion.header>

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-5 pb-12 md:px-10 md:pb-14">
        <motion.div style={{ y: yTitle }}>
          <h1 className={`${styles.display} text-[clamp(3.2rem,11vw,12rem)] leading-[0.95]`}>
            {["Cuidamos a tu perro", "como a uno más"].map((line, k) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5 + k * 0.1, ease }}>
                  {k === 1 ? (<>como a uno <em className="text-[#ffc247]">más.</em></>) : line}
                </motion.span>
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.div style={{ y: yMeta }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-8 flex flex-col-reverse gap-6 md:mt-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <button className={styles.ctrl} onClick={() => go(-1)} aria-label="Foto anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className={styles.ctrl} onClick={() => go(1)} aria-label="Foto siguiente">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
            <div className="ml-2 min-w-0">
              <AnimatePresence mode="wait">
                <motion.p key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }} className="truncate text-[17px] font-semibold leading-tight">
                  {s.label} <span className="text-[#f6efe3]/55">· {s.sub}</span>
                </motion.p>
              </AnimatePresence>
              <div className="mt-2 flex gap-1.5">
                {SLIDES.map((x, k) => (
                  <button key={x.img} onClick={() => setI(k)} aria-label={`Ver ${x.label}`} className="cursor-pointer border-0 bg-transparent py-1.5">
                    <span className={`block h-1 overflow-hidden rounded-full bg-[#f6efe3]/30 transition-all duration-300 ${k === i ? "w-10" : "w-4"}`}>
                      {k === i && <motion.span key={i} className="block h-full rounded-full bg-[#f6efe3]" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: DUR, ease: "linear" }} />}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#" className={styles.btn}>Reservar turno</a>
            <a href="#servicios" className={`${styles.btn} ${styles.ghost}`}>Ver servicios</a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
