import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GDG Goiânia",
  description: "A place for our community to connect and stay informed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/gdgGoiania.png"
                  alt="Logo GDG Goiânia"
                  width={200}
                  height={200}
                />{" "}
                {/* não estilizar o width aqui, foi somente para ver em tela */}
              </Link>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:underline">
                    Eventos
                  </Link>
                </li>
                {/* <li><Link href="#news" className="hover:underline">Notícias</Link></li> */}
                <li>
                  <Link href="#partners" className="hover:underline">
                    Parceiros
                  </Link>
                </li>
                <li>
                  <Link href="#staff" className="hover:underline">
                    Organizadores
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-muted text-muted-foreground">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Sobre nós</h3>
                <p>
                  GDG Goiânia is an independent group. Our activities and the
                  opinions expressed here should in no way be linked to Google,
                  the corporation. To learn more about the GDG program, visit{" "}
                </p>
                <Link
                  href="https://developers.google.com/community/gdg"
                  className="hover:text-primary"
                >
                  developers.google.com/community/gdg
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contato</h3>
                <p>
                  WhatsApp:
                  <Link href="tel:+5562982507596">
                    {/* adicionar link direto para WhatsApp */} (62) 98250-7596
                  </Link>
                </p>
                <p>
                  Email:
                  <Link
                    href="mailto:gdggoiania@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    gdggoiania@gmail.com
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://gdg.community.dev/gdg-goiania/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Google community
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Nossas redes</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/gdggoiania/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/gdggoiania/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://www.youtube.com/@gdggoiania"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center">
              © {new Date().getFullYear()} GDG Goiânia. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
