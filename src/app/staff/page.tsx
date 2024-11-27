import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Instagram, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";
import staff from "@/data/staff";

export default function Staff() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Organizadores</h1>
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
    </div>
  );
}
