import type { Amenity } from "~/interfaces";
import { amenities } from "./amenities";
import { images } from "./images";

import { faker } from '@faker-js/faker'

const description = `
    <p>
      Welcome to this breathtaking <strong>beachfront villa</strong> located in the heart of 
      <em>Costa del Sol, Spain</em>. This luxurious property offers the perfect blend of modern 
      design and natural beauty, making it the ultimate retreat for families, friends, or couples 
      looking to escape into paradise.
    </p>

    <p>
      With <strong>5 spacious bedrooms</strong> and <strong>4 elegant bathrooms</strong>, the villa 
      can comfortably host up to 10 guests. Each room is tastefully decorated with a focus on comfort, 
      featuring premium linens, ample storage space, and large windows that let in natural light. 
      Wake up every morning to stunning ocean views right from your bedroom.
    </p>

    <p>
      The living area is designed for both relaxation and entertainment, with an open-concept layout 
      that connects directly to the modern kitchen and dining area. Step outside and you’ll find a 
      private <strong>infinity pool</strong>, a fully-equipped <strong>outdoor kitchen</strong>, 
      and a lounge area perfect for sunset cocktails or starlit dinners.
    </p>

    <ul>
      <li>✔️ Direct access to a private beach</li>
      <li>✔️ High-speed WiFi throughout the villa</li>
      <li>✔️ Fully air-conditioned rooms</li>
      <li>✔️ Gym and wellness area</li>
      <li>✔️ 24/7 concierge service</li>
    </ul>

    <p>
      Local attractions include vibrant seaside restaurants, charming Spanish villages, and world-class 
      golf courses. Whether you want to spend your days exploring the cultural treasures of Andalusia 
      or simply relax by the water, this villa has everything you need.
    </p>

    <p>
      Don't miss the opportunity to experience the <strong>luxury lifestyle</strong> of Costa del Sol. 
      <a href="https://example.com" target="_blank">Book your stay now</a> and create unforgettable memories 
      with your loved ones.
    </p>
  `;
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

// Pick N random unique elements
function sample<T>(arr: T[], count: number): T[] {
  return shuffle(arr).slice(0, count)
}

export function generateProperty() {
  return {
    id: faker.string.uuid(), // or faker.string.nanoid() if you want shorter IDs
    image: faker.helpers.arrayElement(images),
    gallery: sample(images, faker.number.int({ min: 3, max: 6 })),
    name: faker.location.city() + ' ' + faker.word.noun(), // e.g., "Lisbon Villa"
    description,
    location: `${faker.location.city()}, ${faker.location.country()}`,
    rating: Number(faker.number.float({ min: 3.5, max: 5, fractionDigits:1 }).toFixed(1)),
    reviewsCount: faker.number.int({ min: 20, max: 1000 }),
    price: faker.number.int({ min: 350000, max: 2000000 }),
    frequency: faker.helpers.arrayElement(['month', 'year']) as "month" | "year",
    rooms: faker.number.int({ min: 1, max: 8 }),
    baths: faker.number.int({ min: 1, max: 5 }),
    amenities: sample(amenities, faker.number.int({ min: 3, max: amenities.length })) as Amenity[],
    details: [
      { label: "Size", value: "120 sqm" },
      { label: "Furnishing", value: "Semi-furnished" },
      { label: "Floor", value: "2nd Floor" },
      { label: "Year Built", value: "2020" },
    ],
    agent: {
      phone: faker.phone.number({style: "international"}),
      email: faker.internet.email(),
      name: faker.person.fullName(),
    },
    createdAt: faker.date.past().toISOString(),
  }
}

// Generate a list of fake properties
export function generateProperties(count: number = 10) {
  return Array.from({ length: count }, () => generateProperty())
}

// Example export
export const properties = generateProperties(20)

// Random int helper
// function randomInt(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Generate a random image
// export function getRandomImage(): string {
//   const index = randomInt(0, images.length - 1);
//   return images[index]!;
// }

// export function getRandomGallery(count: number = 6): string[] {
//   return shuffle(images).slice(0, count);
// }

// export function getRandomCuid(length: number = 12): string {
//   const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
//   let id = 'c';
//   for (let i = 0; i < length; i++) {
//     id += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return id;
// }

// export function getRandomAmenities(): Amenity[] {
//   return shuffle(amenities).slice(0, randomInt(1, amenities.length));
// }

// Mock property data
// export const properties = [{
//   id: getRandomCuid(),
//   image: getRandomImage(),
//   gallery: getRandomGallery(5),
//   name: 'Beachfront Villa in Costa del Sol',
//   description,
//   location: 'Costa del Sol, Spain',
//   rating: 4.9,
//   reviewsCount: 300,
//   price: 700,
//   rooms: 5,
//   baths: 4,
//   guests: 10,
//   amenities: getRandomAmenities(),
//   createdAt: '2024-01-05T00:00:00Z',
// }
// ]

export const homePageProperties = [
  {
    label: 'Top Picks in Dubai',
    properties: generateProperties(20),
  },
  {
    label: 'New in London',
    properties: generateProperties(20),
  },
  {
    label: 'VIlla in Spain',
    properties: generateProperties(20),
  }
]