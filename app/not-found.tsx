"use client";
import MayLogo from "@/components/MayLogo";
import { MoveLeft, Search, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NotFound() {
  const pathname = usePathname();
  const initialValue = pathname.split("/").filter(Boolean).pop() || "";
  const [query, setQuery] = useState(initialValue);

  return (
    <div className="flex min-h-[calc(100dvh-12rem)] flex-col items-center justify-center w-full ">
      <div className="flex flex-col items-center justify-center bg-white p-10 md:p-16 pb-2 md:pb-2 rounded-[2.5rem] shadow-card max-w-2xl w-full text-center border border-gray-100">
        <div className="flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-3xl mb-8">
          <ShieldAlert size={40} />
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          Pagina non trovata
        </h2>

        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
          Il contenuto che stai cercando non è svanito nel nulla. Mi occupo di
          questo e di altri argomenti sul portale{" "}
          <strong>Maysicurezza.it</strong>
        </p>

        {/* Sezione Ricerca */}
        <div className="w-full bg-gray-50 p-6 rounded-3xl border border-gray-100 mb-10">
          <p className="text-sm font-semibold text-gray-700 mb-4">
            Vuoi provare a cercare "{query || initialValue}" su Maysicurezza?
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cosa stai cercando?"
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-700"
              />
            </div>
            <a
              href={`https://maysicurezza.it/?s=${encodeURIComponent(query)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all active:scale-95 whitespace-nowrap"
            >
              Cerca ora
            </a>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all hover:shadow-lg active:scale-95 group sm:min-w-[240px]"
          >
            <MoveLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Torna alla Home
          </Link>
        </div>

        <div className="mt-14  border-t border-dashed border-gray-200 w-full flex flex-col items-center">
          <div className="scale-75 mb-4 opacity-80 hover:opacity-100 transition-opacity">
            <MayLogo />
          </div>
        </div>
      </div>
    </div>
  );
}
