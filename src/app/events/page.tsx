import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { CalendarHeart, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import events from "@/data/events";

export default function Events() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Todos os eventos</h1>
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
    </div>
  );
}
