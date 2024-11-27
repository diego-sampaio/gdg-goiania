import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import news from "@/data/news";

export default function News() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Community News</h1>
      <div className="space-y-6">
        {news.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
