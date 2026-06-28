import Script from "next/script";

// Reads the container ID from env so no secret is hard-coded.
// Set NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX (locally in .env.local, and in Vercel
// project env). With it unset, nothing renders, safe for dev/preview.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function GoogleTagManager() {
  if (!GTM_ID) return null;
  return (
    <Script
      id="gtm-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  );
}

// <noscript> fallback iframe, render as the first child of <body>.
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
