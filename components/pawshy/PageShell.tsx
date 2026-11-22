// Envoltorio de contenido igual al de la plantilla (WordPress/Elementor).
export default function PageShell({ children, id = "15" }: { children: React.ReactNode; id?: string }) {
  return (
    <div id="content" className="uicore-content">
      <div id="primary" className="content-area">
        <article id={`post-${id}`} className={`post-${id} page type-page status-publish hentry`}>
          <main className="entry-content">
            <div data-elementor-type="wp-page" data-elementor-id={id} className={`elementor elementor-${id}`}>
              {children}
            </div>
          </main>
        </article>
      </div>
    </div>
  );
}
