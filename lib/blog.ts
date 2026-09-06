import type { ComponentType } from "react";
import type { Faq } from "./schema";

export type PostMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  author: string;
  datePublished: string; // ISO date
  dateModified: string; // ISO date
  ogImage: string;
};

export type PostModule = {
  meta: PostMeta;
  faqs: Faq[];
  Body: ComponentType;
  related: string[]; // slugs of related posts
};

// Register every post here. Order doesn't matter, the index sorts by date.
import bestKidsPlayZone from "./posts/best-kids-play-zone-hyderabad";
import kidsPlayZoneChecklist from "./posts/kids-play-zone-checklist";
import indoorVsPark from "./posts/indoor-play-area-vs-childrens-park";
import screenFreePlay from "./posts/screen-free-play-benefits";
import nineZonesGuide from "./posts/9-play-zones-guide";
import toddlerPlayArea from "./posts/toddler-play-area-hyderabad";

const ALL: PostModule[] = [
  bestKidsPlayZone,
  kidsPlayZoneChecklist,
  indoorVsPark,
  screenFreePlay,
  nineZonesGuide,
  toddlerPlayArea,
];

// Newest first.
export const POSTS: PostModule[] = [...ALL].sort(
  (a, b) => +new Date(b.meta.datePublished) - +new Date(a.meta.datePublished)
);

export function getPost(slug: string): PostModule | undefined {
  return POSTS.find((p) => p.meta.slug === slug);
}

export function allSlugs(): string[] {
  return POSTS.map((p) => p.meta.slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
