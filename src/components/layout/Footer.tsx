export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 text-xs text-muted-foreground sm:px-6 md:px-10">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p>Freddie Burti © {new Date().getFullYear()}</p>
        <p>Feito com ♥ em São Paulo</p>
      </div>
    </footer>
  );
}
