export const EXPERIENCE_BADGE =
  "5+ Years Experience | 5000+ Happy Travelers";

export const EMAILS = {
  general: "nomadsxploretheworld@gmail.com",
  sales: "sales@nomadsxplore.com",
  contact: "nomadsxplore@gmail.com",
  tech: "sharma9955@gmail.com",
} as const;

export type Testimonial = {
  quote: string;
  name: string;
  tag: string;
  gradient: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I am grateful for Nomads team that they stood by us in each step. Nomads: you guys are great I won't say we didn't face the hurdles or issues but real organiser is one who handle situation calmly so that is desh videsh for me. You guys gave your 100%. All the best guys for future trips and I'll love to join your group again and again. Thankyou so much for all the experiences, memories, notes and love.",
    name: "Kanika Sharma",
    tag: "Group Trip — Rajasthan",
    gradient: "from-orange-500 to-pink-600",
  },
  {
    quote:
      "Huge shoutout to the Nomads team — planning to execution was seamless and full of fun. Calm guidance, on-time logistics, and great vibes. Highly recommended!",
    name: "Gourav",
    tag: "Himachal Adventure",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    quote:
      "From first call to last goodbye — everything was smooth. Met amazing people and created memories for a lifetime. Thank you, Nomads!",
    name: "Shardha",
    tag: "Shimla Getaway",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    quote:
      "Perfect planning, budget-friendly and safe. The team handled all hurdles calmly — felt genuinely taken care of throughout the trip.",
    name: "Sachin Shinde",
    tag: "Verified Traveler",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    quote:
      "Our family trip to Rajasthan was flawlessly organized — hotels, transport, and sightseeing all matched what was promised. The guides were knowledgeable and friendly. We'll definitely book with Nomads again.",
    name: "Priya Mehta",
    tag: "Family Tour — Rajasthan",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    quote:
      "As a solo traveler I was nervous about group tours, but Nomads made it easy from day one. Great group energy, fair pricing, and zero last-minute surprises. Five stars from me.",
    name: "Rahul Verma",
    tag: "Solo Traveler — Himachal",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    quote:
      "We asked for a custom Shimla–Manali route on a tight budget. They listened, suggested smart swaps, and delivered a trip our kids still talk about. Honest communication throughout.",
    name: "Anjali Kapoor",
    tag: "Custom Itinerary",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    quote:
      "Booked our honeymoon through Nomads — romantic stays, smooth transfers, and little surprises along the way. Professional team that genuinely cares about your experience.",
    name: "Vikram & Meera Singh",
    tag: "Honeymoon Package",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    quote:
      "Third trip with Nomads in two years. Consistent quality every time — same attention whether it's a weekend getaway or a two-week circuit. That's why I keep coming back.",
    name: "Arjun Patel",
    tag: "Repeat Customer",
    gradient: "from-cyan-500 to-teal-600",
  },
];
