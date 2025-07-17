"use client";
import type { Category } from "../types/types";

const categoryIcons: Record<string, string> = {
  Aland: "🏝️",
  Animals: "🐾",
  Anime: "🌸",
  Art: "🎨",
  Books: "📚",
  Celebrities: "⭐",
  Cooking: "👩‍🍳",
  Creepy: "👻",
  Dreams: "💭",
  Fashion: "👗",
  Food: "🍔",
  Funny: "😂",
  Gaming: "🎮",
  Love: "❤️",
  Money: "💰",
  Movies: "🎬",
  Music: "🎵",
  Politics: "🏛️",
  Relationships: "💑",
  "Rich People": "🤑",
  "Shower Thoughts": "🚿",
  Sports: "🏅",
  Travel: "✈️",
  Weird: "🤪",
};

type Props = {
  categories: Category[];
  selected: number | null;
  onSelect: (id: number | null) => void;
};

const CategoryList = ({ categories, selected, onSelect }: Props) => (
  <ul id="category-list">
    <li>
      <span
        className={`category-pill${selected === null ? " selected" : ""}`}
        onClick={() => onSelect(null)}
        tabIndex={0}
        role="button"
      >
        🌐 All
      </span>
    </li>
    {categories.map((cat) => (
      <li key={cat.id}>
        <span
          className={`category-pill${selected === cat.id ? " selected" : ""}`}
          onClick={() => onSelect(cat.id)}
          tabIndex={0}
          role="button"
        >
          {categoryIcons[cat.name] || "❓"} {cat.name}
        </span>
      </li>
    ))}
  </ul>
);

export default CategoryList;
