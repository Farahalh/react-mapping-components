import React from "react";
import Entry from "./Entry";

export default function CreateEntry(icon) {
  return (
    <Entry
      key={icon.id}
      id={icon.id}
      emoji={icon.emoji}
      name={icon.name}
      meaning={icon.meaning}
    />
  );
}
