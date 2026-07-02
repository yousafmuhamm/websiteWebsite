import imgCraftsman from '../assets/images/exterior-dusk-craftsman.jpg'
import imgLivingView from '../assets/images/living-room-view.jpg'
import imgEstateDrive from '../assets/images/exterior-estate-drive.jpg'
import imgBlueHouse from '../assets/images/exterior-dusk-blue.jpg'
import imgLivingDining from '../assets/images/living-dining-suite.jpg'
import imgKitchenWhite from '../assets/images/kitchen-white.jpg'

export const PROPERTIES = [
  {
    id: 'rosedale-residence',
    name: 'The Rosedale Residence',
    location: 'Mount Royal, Calgary',
    beds: 4,
    baths: 3.5,
    sleeps: 8,
    blurb: "Chef's kitchen, private patio, heated garage and concierge-level amenities.",
    photoLabel: 'Property Photo — Rosedale Residence Exterior',
    image: imgCraftsman,
    alt: 'Craftsman home lit warmly at dusk',
  },
  {
    id: 'riverside-suite',
    name: 'The Riverside Suite',
    location: 'Eau Claire, Calgary',
    beds: 2,
    baths: 2,
    sleeps: 4,
    blurb: 'Skyline views, in-suite laundry, steps from the Bow River pathway.',
    photoLabel: 'Property Photo — Riverside Suite Living Room',
    image: imgLivingView,
    alt: 'Living room with wide views toward the water',
  },
  {
    id: 'aspen-estate',
    name: 'The Aspen Estate',
    location: 'Aspen Woods, Calgary',
    beds: 5,
    baths: 4,
    sleeps: 10,
    blurb: 'Executive-grade estate with home office, gym and landscaped grounds.',
    photoLabel: 'Property Photo — Aspen Estate Grounds',
    image: imgEstateDrive,
    alt: 'Stone estate with a long private driveway',
  },
  {
    id: 'britannia-cottage',
    name: 'The Britannia Cottage',
    location: 'Britannia, Calgary',
    beds: 3,
    baths: 2,
    sleeps: 6,
    blurb: 'Character home with private garden, ideal for family relocation stays.',
    photoLabel: 'Property Photo — Britannia Cottage Garden',
    image: imgBlueHouse,
    alt: 'Blue two-storey home at dusk with garden',
  },
  {
    id: 'skyline-suite',
    name: 'The Skyline Suite',
    location: 'Downtown Core, Calgary',
    beds: 1,
    baths: 1,
    sleeps: 2,
    blurb: 'Walkable executive suite, perfect for single relocating professionals.',
    photoLabel: 'Property Photo — Skyline Suite Interior',
    image: imgLivingDining,
    alt: 'Open-plan suite with living and dining areas',
  },
  {
    id: 'elbow-park-house',
    name: 'The Elbow Park House',
    location: 'Elbow Park, Calgary',
    beds: 4,
    baths: 3,
    sleeps: 8,
    blurb: 'Fully furnished family home, walking distance to schools and parks.',
    photoLabel: 'Property Photo — Elbow Park House Kitchen',
    image: imgKitchenWhite,
    alt: 'Bright white kitchen with a large island',
  },
]

export const FEATURED_PROPERTIES = PROPERTIES.slice(0, 3)
