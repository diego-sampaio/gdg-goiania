import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  // Newspaper,
  Users,
  Building2,
  Instagram,
  Linkedin,
  Github,
  Twitter,
  CalendarHeart,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import events from "@/data/events";
// import news from "@/data/news"
import partners from "@/data/partners";
import staff from "@/data/staff";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <Image
          src="/bannerTeste.png"
          alt="Banner GDG Goiânia"
          width={2000}
          height={2000}
        />
      </section>

      <section id="events">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold flex items-center">
            <CalendarDays className="mr-2 text-primary" />
            Eventos
          </h2>
          <Button asChild variant="outline">
            <Link href="/events">Ver tudo</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="h-80 min-h-80 flex items-center justify-center bg-slate-100">
                <Link href={event.url}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={300}
                    height={300}
                  />
                </Link>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-xl font-semibold flex items-center justify-center">
                  {event.title}
                </CardDescription>
                <CardDescription className="flex items-center justify-flex-start gap-2">
                  <CalendarHeart size={14} />
                  {event.date?.from}
                </CardDescription>
                <CardDescription className="flex items-center justify-flex-start gap-2">
                  {event.location && (
                    <>
                      <MapPin size={14} />
                      <Link href={event.location?.map}>
                        {event.location?.local}
                      </Link>
                    </>
                  )}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* <section id="news" className="bg-muted py-12 px-6 rounded-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold flex items-center">
            <Newspaper className="mr-2 text-primary" />
            Notícias
          </h2>
          <Button asChild variant="outline">
            <Link href="/news">Ver tudo</Link>
          </Button>
        </div>
        <div className="space-y-6">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-primary">{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      <section id="partners">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold flex items-center">
            <Building2 className="mr-2 text-primary" />
            Parceiros
          </h2>
          <Button asChild variant="outline">
            <Link href="/partners">Ver tudo</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <Card
              key={partner.id}
              className="hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <CardHeader>
                <Link
                  href={partner.description}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="mx-auto"
                  />
                </Link>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-primary">{partner.name}</CardTitle>
                {/* <CardDescription><Link href={partner.description} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{partner.description}</Link></CardDescription> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="staff"
        className="bg-gradient-to-r from-primary/10 to-primary-foreground/10 py-12 px-6 rounded-lg"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold flex items-center">
            <Users className="mr-2 text-primary" />
            Organizadores
          </h2>
          <Button asChild variant="outline">
            <Link href="/staff">Ver tudo</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((member) => (
            <Card
              key={member.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto border-4 border-primary">
                  <AvatarImage src={member.photo} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-primary">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
                <CardDescription className="flex items-center justify-center gap-2">
                  {member.social?.instagram && (
                    <Link
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      <Instagram size={24} />
                    </Link>
                  )}
                  {member.social?.linkedin && (
                    <Link
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      <Linkedin size={24} />
                    </Link>
                  )}
                  {member.social?.x && (
                    <Link
                      href={member.social.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      <Twitter size={24} />
                    </Link>
                  )}
                  {member.social?.github && (
                    <Link
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      <Github size={24} />
                    </Link>
                  )}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
