export const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 bg-brand-soft text-brand rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]">
    <span className="w-1.5 h-1.5 rounded-full bg-brand" /> {children}
  </span>
);
