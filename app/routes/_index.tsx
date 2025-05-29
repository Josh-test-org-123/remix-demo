import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix on Cloudflare Pages" },
    { name: "description", content: "Welcome to Remix on Cloudflare Pages!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{ fontFamily: "Inter, system-ui, sans-serif", lineHeight: "1.8" }}
    >
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8fafc",
          padding: "2rem",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "3rem",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              color: "#1e293b",
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome to Remix
          </h1>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#64748b",
              marginBottom: "2rem",
            }}
          >
            Running on Cloudflare Pages
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#475569",
              marginBottom: "2rem",
            }}
          >
            This is a basic Remix application configured to run on Cloudflare
            Pages. You can start building your app by editing the files in the{" "}
            <code
              style={{
                backgroundColor: "#e2e8f0",
                padding: "0.25rem 0.5rem",
                borderRadius: "4px",
                fontFamily: "monospace",
                color: "#1e293b",
              }}
            >
              app/
            </code>{" "}
            directory.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://remix.run/docs"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "500",
                transition: "background-color 0.2s",
              }}
            >
              Remix Docs
            </a>
            <a
              href="https://developers.cloudflare.com/pages/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#f97316",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "500",
                transition: "background-color 0.2s",
              }}
            >
              Cloudflare Pages
            </a>
          </div>
        </div>
        <p
          style={{
            marginTop: "2rem",
            color: "#64748b",
            fontSize: "0.875rem",
          }}
        >
          🚀 Ready for deployment to Cloudflare Pages
        </p>
      </div>
    </div>
  );
}
