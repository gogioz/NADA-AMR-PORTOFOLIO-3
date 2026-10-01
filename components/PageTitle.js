export default function PageTitle({ kicker, title, children }) {
  return (
    <section className="bg-moss text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="animate-rise font-display text-sm font-bold text-blush">{kicker}</p>
        <h1 style={{ animationDelay: "100ms" }} className="animate-rise font-display text-5xl font-extrabold tracking-tight sm:text-7xl">{title}</h1>
        {children && <p style={{ animationDelay: "200ms" }} className="mt-5 max-w-2xl animate-rise text-pale">{children}</p>}
      </div>
    </section>
  );
}
