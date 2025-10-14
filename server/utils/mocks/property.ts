import type { Amenity, Property, PropertyFilter } from "~/interfaces";
import { amenities } from "./amenities";
import { images } from "./images";
import { faker } from '@faker-js/faker'
import { states } from "~/constants/browser";

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


export function generateProperty(data?: Partial<Property>) {
  return {
    id: data?.id || faker.string.uuid(),
    image: data?.image || faker.helpers.arrayElement(images),
    gallery: sample(images, faker.number.int({ min: 3, max: 6 })),
    name: faker.location.city() + ' ' + faker.word.noun(),
    description,
    location: ( states.find(state => state.slug === data?.location)?.name || states[faker.number.int({ min: 0, max: states.length - 1 })]?.name) + ', Nigeria',
    rating: data?.rating || Number(faker.number.float({ min: 3.5, max: 5, fractionDigits:1 }).toFixed(1)),
    reviewsCount: data?.rating || faker.number.int({ min: 20, max: 1000 }),
    price: data?.price || faker.number.int({ min: 350000, max: 2000000 }),
    frequency: data?.frequency || faker.helpers.arrayElement(['month', 'year']) as "month" | "year",
    rooms: data?.rooms || faker.number.int({ min: 1, max: 8 }),
    baths: data?.baths || faker.number.int({ min: 1, max: 5 }),
    amenities: data?.amenities || sample(amenities, faker.number.int({ min: 3, max: amenities.length })) as Amenity[],
    details: data?.details || [
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
    inFavourites: data?.inFavourites || faker.datatype.boolean(),
    createdAt: data?.createdAt || faker.date.past().toISOString(),
  }
}

export function generateProperties(count: number = 10, data?: Partial<Property>) {
  return Array.from({ length: count }, () => generateProperty(data))
}



export const mockBrowser = (filters: PropertyFilter) => {
  return  generateProperties(20, { location: filters.location });
}