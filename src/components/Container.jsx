export default function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      {children}
    </div>
  );
}
