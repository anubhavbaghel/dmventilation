import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Download, Mail, MapPin, Menu, Phone } from "lucide-react";
import heroBlower from "../assets/hero-blower.jpg";
import productBlower from "../assets/product-blower.jpg";
import productCyclone from "../assets/product-cyclone.jpg";
import productAirwasher from "../assets/product-airwasher.jpg";
import systemInstallation from "../assets/system-installation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Industrial Ventilation Systems & Equipment | DM Ventilation" },
      { name: "description", content: "Explore centrifugal blowers, dust collectors, air washers, fume scrubbers and complete industrial ventilation systems from DM Ventilation Systems India." },
      { property: "og:title", content: "DM Ventilation Systems | Industrial Air Handling" },
      { property: "og:description", content: "Industrial ventilation equipment and engineered systems for air movement, dust extraction and fume control." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const brochureUrl = "https://www.dmventilation.com/brochure.html";
const products = [
  { title: "Centrifugal blowers", tag: "Air movement", description: "Single and double inlet units for process and exhaust duty.", image: productBlower, alt: "Blue industrial centrifugal blower in a workshop" },
  { title: "Cyclone collectors", tag: "Dust control", description: "Efficient separation equipment for particulate-laden air streams.", image: productCyclone, alt: "Stainless steel industrial cyclone collector" },
  { title: "Air washers & filters", tag: "Air treatment", description: "Conditioning and filtration systems for controlled environments.", image: productAirwasher, alt: "Industrial air washer and filter bank" },
];

const systems = [
  ["01", "Industrial ventilation", "Supply and exhaust layouts designed around plant requirements."],
  ["02", "Dust extraction & separation", "Capture, separation and conveying for particulate control."],
  ["03", "Fume extraction & scrubbing", "Treatment systems for demanding process exhaust streams."],
  ["04", "Commercial kitchen ventilation", "Extraction and air movement for commercial kitchens."],
];

function Index() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:flex lg:justify-between">
            <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="DM Ventilation home">
              <span className="grid size-9 shrink-0 place-items-center rounded-md bg-brand font-head text-sm font-semibold text-surface">DM</span>
              <span className="min-w-0 leading-none">
                <span className="block truncate font-head text-sm font-semibold sm:text-[15px]">DM Ventilation Systems</span>
                <span className="mt-1 hidden text-[10px] uppercase text-mute sm:block">Industrial air handling</span>
              </span>
            </a>
            <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
              <a className="text-sm font-medium text-mute hover:text-brand" href="#products">Products</a>
              <a className="text-sm font-medium text-mute hover:text-brand" href="#systems">Systems</a>
              <a className="text-sm font-medium text-mute hover:text-brand" href="#company">Company</a>
              <a className="text-sm font-medium text-mute hover:text-brand" href="#industries">Industries</a>
              <a className="text-sm font-medium text-mute hover:text-brand" href="#contact">Contact</a>
            </nav>
            <div className="flex shrink-0 items-center gap-2">
              <a className="hidden items-center gap-2 text-sm font-medium text-ink/70 hover:text-brand sm:inline-flex" href={brochureUrl} target="_blank" rel="noreferrer"><Download className="size-4" /> Brochure</a>
              <a className="inline-flex items-center gap-2 rounded-md bg-brand px-3 py-2 text-sm font-semibold text-surface hover:bg-brand-deep sm:px-4" href="#contact">Enquire <ArrowRight className="size-4" /></a>
              <a className="grid size-9 place-items-center rounded-md border border-line text-ink lg:hidden" href="#mobile-nav" aria-label="Open page menu"><Menu className="size-5" /></a>
            </div>
          </div>
          <nav id="mobile-nav" className="flex gap-5 overflow-x-auto border-t border-line py-3 text-sm font-medium text-mute lg:hidden" aria-label="Mobile navigation">
            <a href="#products">Products</a><a href="#systems">Systems</a><a href="#company">Company</a><a href="#industries">Industries</a><a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1440px] px-4 py-4 sm:px-6 sm:py-8 lg:px-10">
        <section className="grid gap-3 lg:grid-cols-12">
          <div className="flex flex-col justify-center rounded-lg bg-brand-bright p-6 sm:p-8 lg:col-span-7 lg:min-h-[500px] lg:p-10">
            <p className="text-[11px] font-semibold uppercase text-surface/70">Industrial ventilation equipment · India</p>
            <h1 className="mt-4 max-w-[24ch] text-balance font-head text-3xl font-semibold leading-tight text-surface sm:text-4xl lg:text-5xl">Engineered ventilation, dust extraction and fume control for the plant floor.</h1>
            <p className="mt-4 max-w-[56ch] text-pretty text-base leading-relaxed text-surface/85">Centrifugal blowers, cyclone collectors, air washers and air handling units built for commercial and industrial applications.</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a className="inline-flex items-center gap-2 rounded-md bg-surface px-5 py-2.5 text-sm font-semibold text-brand hover:bg-paper" href="mailto:info@dmventilation.com?subject=Product%20enquiry">Request a quotation <ArrowRight className="size-4" /></a>
              <a className="inline-flex items-center gap-2 rounded-md border border-surface/30 px-4 py-2.5 text-sm font-semibold text-surface hover:border-surface" href={brochureUrl} target="_blank" rel="noreferrer">Download brochure <ArrowDown className="size-4" /></a>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-surface/20 pt-5 sm:grid-cols-3">
              <div><dt className="text-[10px] uppercase text-surface/60">Product families</dt><dd className="mt-1 font-head text-2xl font-semibold text-surface">11</dd></div>
              <div><dt className="text-[10px] uppercase text-surface/60">System capabilities</dt><dd className="mt-1 font-head text-2xl font-semibold text-surface">10+</dd></div>
              <div className="col-span-2 sm:col-span-1"><dt className="text-[10px] uppercase text-surface/60">Established</dt><dd className="mt-1 font-head text-2xl font-semibold text-surface">1998</dd></div>
            </dl>
          </div>
          <div className="min-h-[340px] overflow-hidden rounded-lg border border-line lg:col-span-5 lg:min-h-[500px]">
            <img src={heroBlower} alt="Industrial centrifugal blower connected to ductwork" width={1024} height={912} className="image-in h-full w-full object-cover" />
          </div>
        </section>

        <section id="products" className="scroll-mt-28 pt-3" aria-labelledby="products-title">
          <div className="mb-3 flex items-end justify-between gap-4 px-1 pt-8">
            <div><p className="text-[11px] font-semibold uppercase text-brand">Equipment catalogue</p><h2 id="products-title" className="mt-1 font-head text-2xl font-semibold">Core product families</h2></div>
            <span className="hidden text-sm text-mute sm:block">Built for industrial and commercial duty</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.title} className="rounded-lg border border-line bg-surface p-4 sm:p-5">
                <img src={product.image} alt={product.alt} loading="lazy" width={1024} height={656} className="aspect-[16/10] w-full rounded-md object-cover" />
                <div className="mt-4 flex items-start justify-between gap-3"><h3 className="font-head text-lg font-semibold">{product.title}</h3><span className="shrink-0 text-[10px] font-semibold uppercase text-mute">{product.tag}</span></div>
                <p className="mt-1 text-sm leading-relaxed text-mute">{product.description}</p>
                <a className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline" href={`mailto:info@dmventilation.com?subject=${encodeURIComponent(product.title + " enquiry")}`}>Enquire about this range <ArrowRight className="size-4" /></a>
              </article>
            ))}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Fume scrubbers", "Axial flow fans", "Air handling units", "Air curtains"].map((item) => <a key={item} className="group flex items-center justify-between gap-3 rounded-lg border border-line bg-surface px-5 py-4 hover:border-brand/40" href={`mailto:info@dmventilation.com?subject=${encodeURIComponent(item + " enquiry")}`}><span className="font-head text-sm font-semibold">{item}</span><ArrowRight className="size-4 shrink-0 text-mute transition-transform group-hover:translate-x-0.5" /></a>)}
          </div>
        </section>

        <section id="systems" className="grid scroll-mt-28 gap-3 pt-3 lg:grid-cols-12">
          <div className="rounded-lg border border-line bg-surface p-6 lg:col-span-8 lg:p-8">
            <div className="flex items-baseline justify-between gap-4"><h2 className="font-head text-xl font-semibold">Systems & capabilities</h2><span className="text-sm font-semibold text-brand">End-to-end support</span></div>
            <ul className="mt-5 divide-y divide-line">
              {systems.map(([number, title, description]) => <li key={number} className="flex items-start gap-4 py-3"><span className="font-head text-sm font-medium text-brand">{number}</span><div><h3 className="font-medium">{title}</h3><p className="text-sm text-mute">{description}</p></div></li>)}
            </ul>
          </div>
          <aside id="company" className="flex scroll-mt-28 flex-col rounded-lg bg-brand-deep p-6 text-surface lg:col-span-4 lg:p-7">
            <p className="text-[11px] font-semibold uppercase text-surface/65">Established manufacturer</p>
            <h2 className="mt-3 text-balance font-head text-2xl font-semibold leading-tight">Industrial air systems since 1998.</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface/80">DM Ventilation Systems manufactures equipment and develops complete solutions for ventilation, dust collection, cooling and process-air control.</p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-surface/15 pb-2"><dt className="text-surface/60">Works</dt><dd className="text-right">Bahadurgarh, Haryana</dd></div>
              <div className="flex justify-between gap-4 border-b border-surface/15 pb-2"><dt className="text-surface/60">Sales network</dt><dd>Across India</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-surface/60">Business type</dt><dd>Manufacturer</dd></div>
            </dl>
            <a className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-surface px-4 py-2.5 text-sm font-semibold text-brand hover:bg-paper" href="tel:+919811130638">Speak to our team <Phone className="size-4" /></a>
          </aside>
        </section>

        <section id="industries" className="grid scroll-mt-28 gap-3 pt-3 lg:grid-cols-12">
          <div className="min-h-[280px] overflow-hidden rounded-lg border border-line lg:col-span-8">
            <img src={systemInstallation} alt="Completed industrial dust extraction and ducting installation" loading="lazy" width={1440} height={640} className="h-full min-h-[280px] w-full object-cover" />
          </div>
          <div className="rounded-lg border border-line bg-surface p-6 lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase text-brand">Application coverage</p>
            <h2 className="mt-1 font-head text-lg font-semibold">Systems for demanding facilities</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-mute">
              {["Manufacturing", "Food processing", "Commercial kitchens", "Chemical processing", "Warehousing", "Power & utilities"].map((industry) => <li key={industry} className="flex items-center gap-2"><span className="size-1.5 shrink-0 rounded-full bg-brand" />{industry}</li>)}
            </ul>
            <p className="mt-6 border-t border-line pt-4 text-sm leading-relaxed text-mute">Equipment can be specified as individual units or as part of a complete air-handling system.</p>
          </div>
        </section>

        <section id="contact" className="grid scroll-mt-28 gap-3 pt-3 lg:grid-cols-12">
          <div className="rounded-lg border border-line bg-surface p-6 lg:col-span-5 lg:p-8">
            <p className="text-[11px] font-semibold uppercase text-brand">Technical reference</p>
            <h2 className="mt-1 font-head text-xl font-semibold">Get the product catalogue</h2>
            <p className="mt-2 text-sm leading-relaxed text-mute">Browse the existing catalogue for products, systems and equipment details.</p>
            <a className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-surface hover:bg-brand-deep" href={brochureUrl} target="_blank" rel="noreferrer">Open brochure <Download className="size-4" /></a>
          </div>
          <div className="grid gap-6 rounded-lg border border-line bg-surface p-6 sm:grid-cols-2 lg:col-span-7 lg:p-8">
            <div><p className="text-[11px] font-semibold uppercase text-mute">Enquiries & orders</p><a className="mt-3 flex items-center gap-2 break-all font-head text-base font-semibold text-brand hover:underline" href="mailto:info@dmventilation.com"><Mail className="size-4 shrink-0" />info@dmventilation.com</a><a className="mt-2 flex items-center gap-2 text-sm text-mute hover:text-brand" href="tel:+919811130638"><Phone className="size-4 shrink-0" />+91 98111 30638</a><a className="mt-2 flex items-center gap-2 text-sm text-mute hover:text-brand" href="tel:+919811147512"><Phone className="size-4 shrink-0" />+91 98111 47512</a></div>
            <div><p className="text-[11px] font-semibold uppercase text-mute">Works & office</p><address className="mt-3 flex gap-2 text-sm not-italic leading-relaxed"><MapPin className="mt-0.5 size-4 shrink-0 text-brand" /><span>V-15, Red Cross Road, M.I.E., Part-B, Bahadurgarh Industrial Area, Dist. Jhajjar, Haryana, India</span></address></div>
          </div>
        </section>
      </main>

      <footer className="mt-8 bg-brand-deep text-surface">
        <div className="mx-auto max-w-[1440px] px-4 py-9 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-md bg-surface font-head text-sm font-semibold text-brand">DM</span><div><p className="font-head font-semibold">DM Ventilation Systems</p><p className="text-xs text-surface/60">Industrial air handling equipment and systems</p></div></div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer navigation"><a className="text-surface/75 hover:text-surface" href="#products">Products</a><a className="text-surface/75 hover:text-surface" href="#systems">Systems</a><a className="text-surface/75 hover:text-surface" href="#company">Company</a><a className="text-surface/75 hover:text-surface" href="#contact">Contact</a></nav>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-surface/15 pt-5 text-xs text-surface/55 sm:flex-row sm:justify-between"><p>© 2026 DM Ventilation Systems (India) Pvt. Ltd. All rights reserved.</p><p>Bahadurgarh, Haryana, India</p></div>
        </div>
      </footer>
    </div>
  );
}