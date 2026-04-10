export function Dialog({ open, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      {children}
    </div>
  );
}

export function DialogContent({ children, className }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg w-full max-w-md ${className}`}
    >
      {children}
    </div>
  );
}