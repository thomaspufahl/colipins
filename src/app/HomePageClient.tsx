"use client";
import React, {useState} from "react";
import Image from "next/image";
import {Basic} from "unsplash-js/dist/methods/photos/types";

import {Input} from "@/components/ui/input";

export default function HomePageClient({photos}: {photos: Basic[]}) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filterPhotos = photos.filter((photo) =>
    photo.alt_description?.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <Input placeholder="Search" type="search" value={query} onChange={handleInputChange} />
      <ul>
        {filterPhotos.map((photo) => (
          <li key={photo.id}>
            <Image
              alt={photo.alt_description!}
              height={photo.height}
              src={photo.urls.raw}
              width={photo.width}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
