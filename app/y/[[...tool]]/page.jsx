/**
 * Sanity Studio is disabled for static GitHub Pages export.
 * Keep sanity/ config and schemas in the repo for local CMS use later.
 */
export function generateStaticParams() {
  return [{ tool: [] }];
}

export default function StudioPage() {
  return (
    <div
      style={{
        margin: 0,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a1628',
        color: '#fff',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center', padding: 24 }}>
        <h1 style={{ marginBottom: 12 }}>Studio unavailable</h1>
        <p style={{ opacity: 0.75, maxWidth: 420 }}>
          Sanity Studio is not included in the static GitHub Pages build. Run
          the site locally to use the CMS studio.
        </p>
      </div>
    </div>
  );
}
