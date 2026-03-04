import Link from "next/link";
import { MoveRight, BookOpen, Zap, Shield } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 px-4 py-20 text-center bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
          <Zap size={14} className="fill-current" />
          <span>Bantuan & Dokumentasi NoBox.AI</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 pb-2">
          Pusat Informasi NoBox.AI
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Temukan panduan lengkap, tutorial, dan dokumentasi teknis untuk
          memaksimalkan penggunaan platform CRM NoBox.AI Anda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="/docs"
            className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all hover:ring-4 hover:ring-primary/20 active:scale-95"
          >
            Mulai Membaca
            <MoveRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <a
            href="https://crm.NoBox.AI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold border border-border hover:bg-muted transition-all active:scale-95"
          >
            Buka Dashboard
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 text-left">
          <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Panduan Lengkap</h3>
            <p className="text-sm text-muted-foreground">
              Pelajari setiap fitur NoBox.AI dari dasar hingga mahir dengan
              panduan tertulis kami.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
              <Zap size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Tutorial Cepat</h3>
            <p className="text-sm text-muted-foreground">
              Video tutorial untuk membantu Anda memahami alur kerja dengan
              lebih visual dan cepat.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
              <Shield size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Bantuan Teknis</h3>
            <p className="text-sm text-muted-foreground">
              Butuh bantuan lebih lanjut? Tim support kami siap membantu kendala
              teknis Anda.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
