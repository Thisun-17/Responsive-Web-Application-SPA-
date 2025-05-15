import house1 from "../images/house1.jpg";
import house2 from "../images/house2.jpg";
import house3 from "../images/house3.jpg";
import house4 from "../images/house4.jpg";
import house5 from "../images/house5.jpg";
import house6 from "../images/house6.jpg";
import house7 from "../images/house7.jpg";
import house11 from "../images/house11.jpg";
import house12 from "../images/house12.jpg";


const properties = [
  {
    id: 1,
    type: "House",
    price: 300000,
    bedrooms: 3,
    postcode: "NW1",
    description: "A beautiful 3-bedroom house in London.",
    images: [house1, house12, house11],
    floorPlan: "../images/floorPlan1.jpg",
  },
  {
    id: 2,
    type: "Flat",
    price: 250000,
    bedrooms: 2,
    dateAdded: "2023-12-15",
    postcode: "BR1",
    description: "A modern 2-bedroom flat in Bromley.",
    images: [house2, house3,house5],
  },
  {
    id: 3,
    type: "House",
    price: 450000,
    bedrooms: 4,
    dateAdded: "2024-02-20",
    postcode: "SW1",
    description: "A spacious 4-bedroom house in Chelsea.",
    images: [house3,house4,house6],
  },
  {
    id: 4,
    type: "Bungalow",
    price: 320000,
    bedrooms: 3,
    dateAdded: "2023-11-10",
    postcode: "RM2",
    description: "A cozy bungalow with a large garden in Romford.",
    images: [house4,house11,house3],
  },
  {
    id: 5,
    type: "Apartment",
    price: 220000,
    bedrooms: 1,
    dateAdded: "2024-01-25",
    postcode: "E1",
    description: "A stylish 1-bedroom apartment in Shoreditch.",
    images: [house5,house4,house1],
  },
  {
    id: 6,
    type: "Flat",
    price: 600000,
    bedrooms: 5,
    dateAdded: "2023-12-05",
    postcode: "W8",
    description: "A luxurious 5-bedroom house in Kensington.",
    images: [house6,house2,house6],
  },
  {
    id: 7,
    type: "Cottage",
    price: 280000,
    bedrooms: 2,
    dateAdded: "2023-10-20",
    postcode: "CT1",
    description: "A charming 2-bedroom cottage in Canterbury.",
    images: [house7,house12,house3],
  },
 
];

export default properties;
