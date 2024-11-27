import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import partners from "@/data/partners";

export default function Partners() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Nossos parceiros</h1>
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
