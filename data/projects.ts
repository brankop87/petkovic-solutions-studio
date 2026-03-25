export type ProjectType = "Live" | "Concept";

export type Project = {
  name: string;
  description: string;
  href: string;
  type: ProjectType;
  niche: string;
  image: string;
  challenge: string;
  focus: string;
  outcome: string;
  deliverables: string[];
};

export const projects: Project[] = [
  {
    name: "Noor Beauty Center",
    description:
      "Live beauty website designed to feel premium, credible, and conversion-oriented from the first screen.",
    href: "https://noor-beauty-center.vercel.app/",
    type: "Live",
    niche: "Beauty / Med Spa Style",
    image: "/images/projects/noor.png",
    challenge:
      "Create a polished first impression for a beauty business where trust, taste, and presentation directly affect perceived value.",
    focus: "Premium visual tone, cleaner service presentation, and a softer path toward booking intent.",
    outcome:
      "A more refined and client-facing brand presence that looks ready for paid traffic, social traffic, and direct referrals.",
    deliverables: ["Homepage direction", "Service sections", "Trust-focused UI"],
  },
  {
    name: "Marko Prevoznik",
    description:
      "Live local-service website with a clearer offer, stronger trust signals, and a more credible business presentation.",
    href: "https://marko-prevoznik.vercel.app/",
    type: "Live",
    niche: "Transport / Local Services",
    image: "/images/projects/marko-prevoznik.png",
    challenge:
      "Make a practical local-service business feel more organized, serious, and easier to contact without overdesigning it.",
    focus: "Offer clarity, stronger hierarchy, direct CTA placement, and a layout that supports fast decision-making.",
    outcome:
      "A more credible service-business website that communicates trust faster and makes outreach traffic less likely to bounce.",
    deliverables: ["Landing structure", "Offer clarity", "Conversion-first CTA flow"],
  },
  {
    name: "Meridian Properties",
    description:
      "Concept direction for a premium real-estate brand focused on presentation, hierarchy, and perceived value.",
    href: "/demos/demo-realestate.html",
    type: "Concept",
    niche: "Real Estate",
    image: "/images/projects/meridian-properties.png",
    challenge:
      "Explore how a real-estate brand can feel more expensive and structured without relying on generic luxury clichés.",
    focus: "Hierarchy, whitespace, restrained typography, and a more editorial property-brand feel.",
    outcome:
      "A concept that shows range in premium positioning and high-value presentation.",
    deliverables: ["Visual direction", "Premium layout", "Concept UI system"],
  },
  {
    name: "APEX Fitness",
    description:
      "Concept landing experience for a fitness brand with stronger energy, contrast, and offer-driven sections.",
    href: "/demos/demo-gym.html",
    type: "Concept",
    niche: "Fitness",
    image: "/images/projects/apex-fitness.png",
    challenge:
      "Push a fitness concept toward a bolder conversion style without making it feel messy or over-stimulated.",
    focus: "Sharper contrast, stronger momentum, and sections built around action instead of decoration.",
    outcome:
      "A concept that shows the ability to shift tone by niche while keeping the site purposeful.",
    deliverables: ["High-energy concept", "Offer-led sections", "Visual contrast system"],
  },
];
