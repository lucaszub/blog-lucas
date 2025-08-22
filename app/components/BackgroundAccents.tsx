export default function BackgroundAccents() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-300/40 to-sky-300/40 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-200/40 to-emerald-200/40 blur-3xl"></div>
    </div>
  );
}


