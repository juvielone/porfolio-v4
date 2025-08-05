// import { Calendar, MapPin, Building } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// const ExperienceCard = () => {
//   return (
//     <div className="relative group">
//       {/* Timeline line */}
//       <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

//       {/* Timeline dot */}
//       <div
//         className={`absolute left-4 top-8 w-4 h-4 rounded-full border-2 border-primary z-10 transition-all duration-300 group-hover:scale-125 ${
//           experience.current ? "bg-primary animate-glow-pulse" : "bg-background"
//         }`}
//       />

//       {/* Content */}
//       <div className="ml-16 pb-12">
//         <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow hover:transform hover:scale-[1.02] p-6">
//           <div className="space-y-4">
//             {/* Header */}
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
//               <div>
//                 <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
//                   {experience.title}
//                 </h3>
//                 <div className="flex items-center gap-2 text-muted-foreground">
//                   <Building className="w-4 h-4" />
//                   <span className="font-medium">{experience.company}</span>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <Badge
//                   variant={experience.current ? "default" : "secondary"}
//                   className={`w-fit ${
//                     experience.current
//                       ? "bg-primary text-primary-foreground"
//                       : ""
//                   }`}
//                 >
//                   <Calendar className="w-3 h-3 mr-1" />
//                   {experience.period}
//                 </Badge>
//                 {experience.location && (
//                   <div className="flex items-center gap-1 text-sm text-muted-foreground">
//                     <MapPin className="w-3 h-3" />
//                     {experience.location}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Description */}
//             <p className="text-muted-foreground leading-relaxed">
//               {experience.description}
//             </p>

//             {/* Technologies */}
//             {experience.technologies && (
//               <div className="flex flex-wrap gap-2">
//                 {experience.technologies.map((tech) => (
//                   <Badge
//                     key={tech}
//                     variant="outline"
//                     className="text-xs border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-colors"
//                   >
//                     {tech}
//                   </Badge>
//                 ))}
//               </div>
//             )}
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// const ExperienceSection = () => {
//   return (
//     <section className="py-20 px-4 bg-gradient-background min-h-screen">
//       <div className="max-w-4xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
//             Experience
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             My professional journey through various roles and technologies,
//             building scalable solutions and leading teams.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
//           {experiences.map((experience, index) => (
//             <div
//               key={experience.id}
//               className="animate-slide-in"
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <ExperienceCard experience={experience} index={index} />
//             </div>
//           ))}
//         </div>

//         {/* Bottom gradient fade */}
//         <div className="h-8 bg-gradient-to-t from-background to-transparent" />
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;
