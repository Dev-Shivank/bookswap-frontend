import { useEffect, useState } from "react";

import Papa from "papaparse";

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT_JzcbP0eTkAP15lN1og023Eo7zl6OR4LcwRlwOqyTm2n6knLZYIOVfTO9zfnJlvolUppgwXagQcuy/pub?output=csv";

export default function PodcastCardTest() {
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((text) => {
        const parsed = Papa.parse(text, { header: true });
        setPodcast(parsed.data[0]); // show the first row
      });
  }, []);

  if (!podcast) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto">
      <img
        src={`https://img.youtube.com/vi/${podcast.id}/0.jpg`}
        alt={podcast.title}
        className="rounded-lg mb-4 w-full object-cover"
      />
      <h2 className="text-xl font-bold mb-2">{podcast.title}</h2>
      <p className="text-sm text-gray-600 mb-1">🎙 Guest: {podcast.guest}</p>
      <p className="text-sm text-gray-500 mb-4">🏷 Category: {podcast.category}</p>
      <a
        href={podcast.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Watch on YouTube →
      </a>
    </div>
  );
}
