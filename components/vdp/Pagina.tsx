import PageShell from "@/components/pawshy/PageShell";
import s from "./vdp.module.css";

export default function Pagina({ kicker, titulo, bajada, children }: { kicker: string; titulo: string; bajada?: string; children: React.ReactNode }) {
  return (
    <PageShell id="15">
      <div className={s.page}>
        <section className={s.hero}>
          <div className={s.wrap}>
            <span className={s.kicker}>{kicker}</span>
            <h1 className={s.h1}>{titulo}</h1>
            {bajada && <p className={s.lead}>{bajada}</p>}
          </div>
        </section>
        {children}
      </div>
    </PageShell>
  );
}
