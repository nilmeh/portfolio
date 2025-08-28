import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import {
  ExternalLink,
  Youtube,
  Users,
  Trophy,
  Heart,
  Mic,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Globe
} from "lucide-react";

export default function Extracurriculars() {
  const activities = [
    {
      title: "TEDx Speaker",
      organization: "TEDxYouth@SISmumbai",
      role: "Speaker",
      period: "2024",
      location: "Mumbai, India",
      category: "speaking",
      featured: true,
      description: "Delivered a TEDx Talk on 'Breaking the Walls of Silence' addressing important social issues and mental health awareness.",
      impact: "Reached 500+ live audience members and 5,000+ online viewers",
      logo: "/images/TEDxLogo.png",
      link: "https://www.youtube.com/watch?v=0P4dkVxPTlE&t=318s",
      linkText: "Watch Talk",
      videoId: "0P4dkVxPTlE", // YouTube video ID for embedding
      videoStart: "0", // Start time in seconds
      icon: Mic,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Founder and President",
      organization: "Code4Change",
      role: "Founder & President",
      period: "2022-2024",
      location: "Mumbai, India",
      category: "leadership",
      featured: true,
      description: "Founded and led a community service organization focused on teaching digital literacy to underprivileged communities in India.",
      impact: "Taught programming to 100+ students, organized 20+ workshops",
      logo: "/images/Code4ChangeLogo.jpeg", // Code4Change logo
      achievements: [
        "Established curriculum for basic programming and computer skills",
        "Recruited and managed team of 15 volunteer instructors",
        "Partnered with local NGOs and schools for outreach programs",
        "Organized annual coding competitions and tech showcases"
      ],
      icon: Heart,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Director and Treasurer",
      organization: "Rotaract Club at SIS",
      role: "Director & Treasurer",
      period: "2022-2023",
      location: "Mumbai, India",
      category: "leadership",
      featured: true,
      description: "Led financial management and strategic direction for the school's premier community service club. Managed budget and provided leadership for all club activities.",
      impact: "Managed $5,000+ budget, organized 15+ community service events",
      logo: "/images/Rotaract_Logo.png", // Rotaract logo
      achievements: [
        "Streamlined budget allocation and expense tracking systems",
        "Led fundraising initiatives raising $2,000+ for local charities",
        "Organized blood donation drives and environmental cleanup campaigns",
        "Coordinated international Rotary exchange programs"
      ],
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Yale Young Global Scholars",
      organization: "Yale University",
      role: "Ambassador & Scholar",
      period: "2022",
      location: "New Haven, CT",
      category: "academic",
      featured: true,
      description: "Selected for prestigious Yale Young Global Scholars program. Participated in Politics, Law and Economics course with distinguished faculty.",
      impact: "Ambassadorship Award recipient, created simulation project on bias and echo chambers",
      logo: "/images/YYGS_Logo.png",
      achievements: [
        "Attended lectures by Professors Odd Arne Westad and Andrew Metrick",
        "Created simulation project on impacts of bias and echo-chambers",
        "Participated in advanced seminars on global politics and economics",
        "Received Yale Young Global Scholars Ambassadorship Award"
      ],
      icon: GraduationCap,
      color: "from-indigo-500 to-purple-500"
    },
    
    {
      title: "Editor-in-Chief",
      organization: "BISUL Chronicles School Magazine",
      role: "Editor-in-Chief",
      period: "2022-2023",
      location: "Mumbai, India", 
      category: "media",
      featured: false,
      description: "Led the editorial team and managed content creation for the school's premier publication.",
      impact: "Oversaw publication of multiple magazine issues",
      icon: Users,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "UD Correspondent",
      organization: "Since 2007 Newspaper",
      role: "Correspondent",
      period: "2022-2024",
      location: "Mumbai, India",
      category: "media",
      featured: false,
      description: "Covered local events and student initiatives as the Upper Division correspondent for Since 2007 Newspaper.",
      impact: "50+ articles published",
      icon: Globe,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Investment Competition",
      organization: "Wharton Global High School",
      role: "Team Member",
      period: "2022",
      location: "Global Competition",
      category: "business",
      featured: false,
      description: "Ranked in Top-150 teams globally. Developed quantitative analysis skills and professional reporting.",
      impact: "Top-150 global ranking among thousands of participants",
      logo: "/images/wharton_investment_logo.png",
      achievements: [
        "Qualitative and quantitative analysis skills development",
        "Professional deliverable report creation",
        "Stock simulator portfolio management",
        "Global competition participation"
      ],
      icon: Trophy,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Athletic Leadership",
      organization: "Various Sports Teams",
      role: "Team Member & Captain",
      period: "2020-2024",
      location: "Mumbai, India",
      category: "sports",
      featured: false,
      description: "Competitive basketball player with multiple championships and national tournament qualifications.",
      impact: "Multiple tournament victories and national-level competition",
      achievements: [
        "Qualified for ISSO National Basketball Tournament Quarterfinals 2022",
        "Champion of SIS Basketball Conquest Tournament 2023",
        "Champions of SIS Interhouse Basketball Tournament 2023",
        "Member of SIS Basketball Team with daily training 2022-2024"
      ],
      icon: Trophy,
      color: "from-orange-500 to-red-500"
    }
  ];

  const volunteerWork = [
    {
      title: "Digital Literacy Instructor",
      organization: "Code4Change & Local NGOs",
      period: "2022-2024",
      description: "Taught basic computer skills and programming to underprivileged students across Mumbai",
      hours: "200+ volunteer hours"
    },
    {
      title: "Environmental Conservation",
      organization: "Rotaract Club",
      period: "2022-2023", 
      description: "Organized beach cleanups and tree plantation drives as part of environmental initiatives",
      hours: "50+ volunteer hours"
    },
    
    
  ];

  const speakingEngagements = [
    {
      title: "Breaking the Walls of Silence",
      event: "TEDxYouth@SISmumbai",
      date: "2024",
      audience: "500+ attendees",
      topic: "Mental health awareness and breaking social stigmas"
    },
    {
      title: "Sortobot Presentation",
      event: "London International Youth Science Forum",
      date: "2023",
      audience: "International professors and students",
      topic: "AI-powered waste segregation system presentation"
    }
  ];

  // Category metadata for rendering
  const categories = [
    { name: "Leadership", value: "leadership", icon: Users },
    { name: "Speaking", value: "speaking", icon: Mic },
    { name: "Academic", value: "academic", icon: GraduationCap },
    { name: "Media", value: "media", icon: Users },
    { name: "Business", value: "business", icon: Trophy },
    { name: "Sports", value: "sports", icon: Trophy },
    { name: "Volunteering", value: "volunteering", icon: Heart }
  ] as const;

  // Group activities by category for compact, scannable sections
  const grouped = activities.reduce<Record<string, typeof activities>>((acc, a) => {
    if (!acc[a.category]) acc[a.category] = [];
    acc[a.category].push(a);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 dark:from-slate-900 dark:via-emerald-950 dark:to-amber-950">
      <Navigation />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      
      <div className="container relative px-4 py-16 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-green-600 to-amber-600 bg-clip-text text-transparent">
            Leadership & Activities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through leadership roles, community service, academic competitions, 
            and extracurricular achievements during high school and beyond.
          </p>
        </div>

        {/* Quick category chips (mobile) + sticky sidebar (desktop) */}
        <section className="mb-12">
          <div className="lg:hidden flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories
              .filter(c => c.value in grouped || c.value === "volunteering")
              .map((cat) => {
                const Icon = cat.icon;
                return (
                  <a key={cat.value} href={`#${cat.value}`} className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border px-3 py-1 text-sm bg-white/70 dark:bg-slate-900/60 backdrop-blur border-slate-200 dark:border-slate-800">
                    <Icon className="h-3.5 w-3.5" />
                    {cat.name}
                  </a>
                );
              })}
          </div>

          <div className="grid lg:grid-cols-[220px_1fr] gap-8">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <nav className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Browse</div>
                  {categories
                    .filter(c => c.value in grouped || c.value === "volunteering")
                    .map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <a key={cat.value} href={`#${cat.value}`} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100/70 dark:hover:bg-slate-800/60">
                          <Icon className="h-4 w-4" />
                          {cat.name}
                        </a>
                      );
                    })}
                  <a href="#speaking-engagements" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100/70 dark:hover:bg-slate-800/60">
                    <Mic className="h-4 w-4" />
                    Talks
                  </a>
                </nav>
              </div>
            </aside>

            <div>
              {categories.map((cat) => {
                if (!(cat.value in grouped)) return null;
                const Icon = cat.icon;
                const items = grouped[cat.value] || [];
                return (
                  <section key={cat.value} id={cat.value} className="mb-12 scroll-mt-28">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <h2 className="text-2xl font-semibold">{cat.name}</h2>
                      <Badge variant="secondary" className="ml-1">{items.length}</Badge>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      {items.map((activity, index) => {
                        const IconIn = activity.icon;
                        return (
                          <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-start gap-3">
                                  {activity.logo ? (
                                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-white dark:bg-slate-800 flex items-center justify-center">
                                      <img 
                                        src={activity.logo} 
                                        alt={`${activity.organization} logo`}
                                        className="w-8 h-8 object-contain"
                                      />
                                    </div>
                                  ) : (
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${activity.color} bg-opacity-20`}>
                                      <IconIn className="h-5 w-5 text-white" />
                                    </div>
                                  )}
                                  <div>
                                    <CardTitle className="text-lg mb-1">{activity.title}</CardTitle>
                                    <CardDescription className="flex items-center gap-2">
                                      <Users className="h-4 w-4" />
                                      {activity.organization}
                                    </CardDescription>
                                  </div>
                                </div>
                                <div className="text-right">
                                  {activity.featured && (
                                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white mb-2 inline-flex items-center">
                                      <Trophy className="h-3 w-3 mr-1" />
                                      Featured
                                    </Badge>
                                  )}
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground justify-end">
                                    <Calendar className="h-3.5 w-3.5" />
                                    <span>{activity.period}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground justify-end mt-1">
                                    <MapPin className="h-3.5 w-3.5" />
                                    <span>{activity.location}</span>
                                  </div>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <p className="text-sm text-muted-foreground">
                                {activity.description.length > 160
                                  ? `${activity.description.slice(0, 157)}...`
                                  : activity.description}
                              </p>
                              <details className="group mt-3">
                                <summary className="list-none cursor-pointer inline-flex items-center text-sm text-emerald-700 dark:text-emerald-300 hover:underline">
                                  Details
                                </summary>
                                <div className="mt-3 space-y-4">
                                  {activity.impact && (
                                    <div className="flex flex-wrap gap-2">
                                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
                                        {activity.impact}
                                      </Badge>
                                    </div>
                                  )}
                                  {activity.achievements && (
                                    <div>
                                      <h4 className="font-medium mb-2">Key Achievements</h4>
                                      <ul className="space-y-1.5">
                                        {activity.achievements.map((achievement, idx) => (
                                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{achievement}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                  {activity.videoId && (
                                    <div className="space-y-2">
                                      <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                                        <iframe
                                          src={`https://www.youtube.com/embed/${activity.videoId}?start=${activity.videoStart || 0}&rel=0&modestbranding=1`}
                                          title={`${activity.title} - ${activity.organization}`}
                                          frameBorder="0"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                          allowFullScreen
                                          className="absolute inset-0 w-full h-full"
                                        ></iframe>
                                      </div>
                                      {activity.link && (
                                        <div>
                                          <Button variant="outline" size="sm" asChild>
                                            <Link href={activity.link} target="_blank">
                                              <Youtube className="mr-2 h-4 w-4" />
                                              {activity.linkText || "Watch"}
                                            </Link>
                                          </Button>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </details>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </section>
                );
              })}

              {/* Volunteer Work as its own compact section */}
              <section id="volunteering" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <h2 className="text-2xl font-semibold">Volunteering</h2>
                  <Badge variant="secondary" className="ml-1">{volunteerWork.length}</Badge>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {volunteerWork.map((volunteer, index) => (
                    <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-lg">{volunteer.title}</CardTitle>
                        <CardDescription>{volunteer.organization}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">{volunteer.description}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                              {volunteer.hours}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {volunteer.period}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

  {/* Speaking Engagements (kept concise)
  <section id="speaking-engagements" className="mb-16 scroll-mt-28">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Speaking Engagements
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {speakingEngagements.map((speaking, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    {speaking.title}
                  </CardTitle>
                  <CardDescription>{speaking.event}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">{speaking.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Audience:</span>
                      <span className="font-medium">{speaking.audience}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-muted-foreground">{speaking.topic}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Get Involved
              </CardTitle>
              <CardDescription className="text-lg">
                Interested in collaborating on community service projects or speaking opportunities?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">
                    <Users className="mr-2 h-4 w-4" />
                    Let's Connect
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Learn More About Me
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
