import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">Elétrica Aurora</Link>
      <nav className="flex gap-4">
        <Link href="/produtos">Produtos</Link>
        <Link href="/carrinho">Carrinho</Link>
      </nav>
    </header>
  );
}