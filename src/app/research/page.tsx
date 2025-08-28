import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { 
  BookOpen, 
  Calendar, 
  ExternalLink, 
  GraduationCap, 
  Users, 
  Award,
  Globe,
  FileText,
  Brain,
  Sigma
} from "lucide-react";

export default function Research() {
  const researchPapers = [
    {
      title: "Modelling the Golden Gate Bridge using Desmos",
      authors: ["Niloy Meharchandani"],
      venue: "Journal of Computers in Mathematics and Science Teaching",
      year: 2025,
      volume: "43(2)",
      pages: "131-159",
      publishedDate: "2025",
      type: "journal",
      status: "published",
      category: "mathematics",
      featured: true,
      url: "https://www.learntechlib.org/primary/p/222779/",
      description: "This research explores the intersection of mathematical functions and artistic expression, investigating how complex mathematical concepts can be visualized and understood through artistic representations using Desmos graphing calculator.",
      contributions: [
        "Novel techniques for representing complex architectural structures as mathematical models",
        "Framework for teaching advanced mathematics through visual arts and real-world applications",
        "Digital tools that bridge mathematics and engineering visualization",
        "Analysis of how mathematical modeling enhances understanding of architectural design"
      ],
      tags: ["Mathematics", "Education", "Visual Arts", "Engineering", "Desmos"],
      icon: Sigma
    },
    {
      title: "Investigating the Properties of Dark Matter",
      authors: ["Niloy Meharchandani"],
      venue: "International Journal of Scientific Engineering and Research (IJSER)",
      year: 2023,
      volume: "11(8)",
      pages: "7-12",
      doi: "10.70729/SE23820092256",
      url: "https://www.ijser.in/abstract.php?paperid=SE23820092256",
      type: "journal",
      status: "published",
      category: "physics",
      featured: true,
      description: "Authored research paper investigating the fundamental properties of dark matter and its implications for cosmological models.",
      contributions: [
        "Comprehensive analysis of dark matter properties",
        "Review of current theoretical frameworks",
        "Investigation of observational evidence",
        "Implications for future cosmological research"
      ],
      tags: ["Physics", "Cosmology", "Dark Matter", "Theoretical Physics"],
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 dark:from-slate-900 dark:via-emerald-950 dark:to-amber-950">
      <Navigation />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      
      <div className="container relative px-4 py-16 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-green-600 to-amber-600 bg-clip-text text-transparent">
            Research & Publications
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Published research in mathematics education and theoretical physics
          </p>
        </div>

        {/* Publications */}
        <section className="mb-12">
          <div className="space-y-6">
            {researchPapers.map((paper, index) => {
              const Icon = paper.icon;
              return (
                <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-amber-100 dark:from-emerald-900/30 dark:to-amber-900/30">
                          <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
                            {paper.title}
                          </CardTitle>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Users className="h-4 w-4" />
                              <span>{paper.authors.join(", ")}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <BookOpen className="h-4 w-4" />
                              <span>{paper.venue}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {paper.year}
                                {paper.volume && `, ${paper.volume}`}
                                {paper.pages && `, pp. ${paper.pages}`}
                              </span>
                            </div>
                            {paper.doi && (
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <FileText className="h-4 w-4" />
                                <span>DOI: {paper.doi}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {paper.featured && (
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                            <Award className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        <Badge variant="outline" className="border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-300">
                          {paper.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {paper.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {paper.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        {paper.doi && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`https://doi.org/${paper.doi}`} target="_blank">
                              <FileText className="mr-2 h-4 w-4" />
                              DOI
                            </Link>
                          </Button>
                        )}
                        {paper.url && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={paper.url} target="_blank">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Read Paper
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Interested in Collaboration?</h3>
              <p className="text-muted-foreground mb-4">
                Open to research opportunities in mathematics education, theoretical physics, and educational technology.
              </p>
              <Button asChild>
                <Link href="/contact">
                  <Users className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
