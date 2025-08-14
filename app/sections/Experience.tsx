import { Calendar, MapPin, Building } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  current?: boolean;
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "Full Stack Software Engineer",
    company: "Broadtech Business Solutions",
    period: "Current",
    location: "Hybrid",
    description:
      "Designed and developed a corporate website in Next.js, reducing load times and improving cross-platform compatibility across devices. Architecting microservices, implementing CI/CD pipelines. Increased website visibility by enhancing performance, optimizing images, and implementing responsive, user-friendly design",
    current: true,
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
  },
  {
    id: "2",
    title: "DevOps | C# .NET Developer (Intern)",
    company: "Willis Towers Watson (WTW)",
    period: "2023",
    location: "Hybrid",
    description:
      "Collaborated with senior developers and fellow interns to conduct and lead Scrum meetings. Enhanced user interfaces by implementing visual charts and graphs, sorting features based on date and type, and prioritizing recent and critical tickets. Established coding standards, and created video tutorials to support development processes and team onboarding",
    technologies: ["C#", ".NET", "Azure", "Docker", "Kubernetes"],
  },
  {
    id: "3",
    title: "Full Stack Developer (Intern)",
    company: "Achieve Without Borders (AWB)",
    period: "2022",
    location: "On-site",
    description:
      "Resolved critical bug tickets, improving application stability and user satisfaction. Converted Figma UI/UX designs into responsive web applications using Dart and Material UI. Participated in feature planning and user story development within an Agile framework",
    technologies: ["JavaScript", "Dart", "Firebase", "Flutter"],
  },
];

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  return (
    <div className="relative group">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-100 via-primary-100/50 to-transparent" />

      {/* Timeline dot */}
      <div
        className={`absolute left-4 top-8 w-4 h-4 rounded-full border-2 border-primary-100 z-10 transition-all duration-300 group-hover:scale-125 ${
          experience.current
            ? "bg-primary-100 animate-glow-pulse"
            : "bg-background"
        }`}
      />

      {/* Content */}
      <div className="ml-12 md:ml-16 pb-8 md:pb-12">
        <Card className="bg-gradient-card border-border hover:border-primary-100/40 transition-all duration-300 hover:shadow-glow hover:transform hover:scale-[1.02] p-4 md:p-6 shadow-soft">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary-100 transition-colors leading-tight">
                  {experience.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mt-1">
                  <Building className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium text-sm md:text-base">
                    {experience.company}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:items-end">
                <Badge
                  variant={experience.current ? "default" : "secondary"}
                  className={`w-fit text-xs md:text-sm ${
                    experience.current
                      ? "bg-primary-100 text-primary-foreground"
                      : ""
                  }`}
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  {experience.period}
                </Badge>
                {experience.location && (
                  <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {experience.location}
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {experience.description}
            </p>

            {/* Technologies */}
            {experience.technologies && (
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {experience.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs border-primary-100/30 hover:border-primary/60 hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-100 mb-4">
            Experience
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            My professional journey through various roles and technologies,
            building scalable solutions and leading teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ExperienceCard experience={experience} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom gradient fade */}
        <div className="h-8 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default Experience;
