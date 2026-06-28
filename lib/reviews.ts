// Real Google reviews only, never fabricate (brand spec §6).
// Paste verbatim quotes + the reviewer's name as it appears on Google.
// Keep `rating` as the stars that review gave (usually 5).
// `date` is optional (ISO, e.g. "2026-05-12") and feeds Review schema if present.

export type Review = {
  author: string;
  rating: number;
  text: string;
  date?: string;
};

export const REVIEWS: Review[] = [
  {
    author: "AJEET MOHAN Bhatt",
    rating: 5,
    text: "Amazing playzone for kids! Clean, safe, and full of fun activities. The staff was friendly and the kids had a fantastic time. Perfect place for kids fun",
    date: "2026-05-28",
  },
  {
    author: "mohanite",
    rating: 5,
    text: "Great place and very colourful. Friendly atmosphere. There are more 10 activities for kids. Kids can have hands on experience with some tools as well. Milking the cow and feeding it's baby is a learning experience for kids. Shooting targets with plastic balls, putting the balls in a machine and catching them as they come down. Two types of slides, bouncing place and so on. Kids can spend hours and hours to the delight of their parents.",
    date: "2026-03-28",
  },
  {
    author: "rahul maringanti",
    rating: 5,
    text: "New Favorite Spot! Just visited this new premium playzone with my nephew and he literally wouldn't come out! They have so much to do for kids anywhere from 2 to 10 years old. It kept him busy the entire time, and the variety of activities is impressive. Definitely a new favorite spot for us. Highly recommend checking it out!",
    date: "2026-03-28",
  },
  {
    author: "Arun Mishra",
    rating: 5,
    text: "I liked the play options, ambience, cleanliness and other infrastructure. My baby fully enjoyed it.",
    date: "2026-03-28",
  },
  {
    author: "santosh sainani",
    rating: 5,
    text: "Had a wonderful experience at this kids play area. The place was clean, vibrant, and thoughtfully designed with so many different play sets and activities that kept the kids engaged and genuinely excited throughout. What really stood out was the warmth and hospitality of the management, they were welcoming, attentive, and made everyone feel comfortable. The food was also surprisingly excellent, which made the overall experience even better for both kids and parents. A lovely place for families and definitely worth visiting.",
    date: "2026-05-28",
  },
  {
    author: "aftab mujawar",
    rating: 5,
    text: "Today visited this place.. we are so happy to be here.. my both children have enjoyed alot.. This place has most of the activity based play area ... Like Mini Garage, little Engineers, Water zone, bubble pond, mini kitchen for cooking..",
    date: "2026-04-28",
  },
];
