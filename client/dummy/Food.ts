type additional = {
  name: string;
  items: {
    name: string;
    price: string;
  }[];
};

export type Food = {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  price: number;
  categoryId: number;
  additionals?: additional[];
};

export const Foods: Food[] = [
  {
    id: 1,
    name: "Nigiri Sushi",
    description: "Nigiri Sushi is a delicious item from the Sushi category.",
    categoryId: 1,
    image: "https://source.unsplash.com/600x400/?Nigiri%20Sushi",
    rating: 4.2,
    price: 42409,
  },
  {
    id: 2,
    name: "Maki Sushi",
    description: "Maki Sushi is a delicious item from the Sushi category.",
    categoryId: 1,
    image: "https://source.unsplash.com/600x400/?Maki%20Sushi",
    rating: 4.1,
    price: 19251,
  },
  {
    id: 3,
    name: "Sashimi",
    description: "Sashimi is a delicious item from the Sushi category.",
    categoryId: 1,
    image: "https://source.unsplash.com/600x400/?Sashimi",
    rating: 4.0,
    price: 21241,
  },
  {
    id: 4,
    name: "Ribeye Steak",
    description: "Ribeye Steak is a delicious item from the Steak category.",
    categoryId: 2,
    image: "https://source.unsplash.com/600x400/?Ribeye%20Steak",
    rating: 5.5,
    price: 48404,
  },
  {
    id: 5,
    name: "T-Bone Steak",
    description: "T-Bone Steak is a delicious item from the Steak category.",
    categoryId: 2,
    image: "https://source.unsplash.com/600x400/?T-Bone%20Steak",
    rating: 4.8,
    price: 24949,
  },
  {
    id: 6,
    name: "Sirloin Steak",
    description: "Sirloin Steak is a delicious item from the Steak category.",
    categoryId: 2,
    image: "https://source.unsplash.com/600x400/?Sirloin%20Steak",
    rating: 4.8,
    price: 33083,
  },
  {
    id: 7,
    name: "Croissant",
    description: "Croissant is a delicious item from the Kue & Roti category.",
    categoryId: 3,
    image: "https://source.unsplash.com/600x400/?Croissant",
    rating: 5.9,
    price: 24728,
  },
  {
    id: 8,
    name: "Cheesecake",
    description: "Cheesecake is a delicious item from the Kue & Roti category.",
    categoryId: 3,
    image: "https://source.unsplash.com/600x400/?Cheesecake",
    rating: 5.1,
    price: 19956,
  },
  {
    id: 9,
    name: "Brownie",
    description: "Brownie is a delicious item from the Kue & Roti category.",
    categoryId: 3,
    image: "https://source.unsplash.com/600x400/?Brownie",
    rating: 5.9,
    price: 19191,
  },
  {
    id: 10,
    name: "Caesar Salad",
    description: "Caesar Salad is a delicious item from the Salad category.",
    categoryId: 4,
    image: "https://source.unsplash.com/600x400/?Caesar%20Salad",
    rating: 4.9,
    price: 44749,
  },
  {
    id: 11,
    name: "Greek Salad",
    description: "Greek Salad is a delicious item from the Salad category.",
    categoryId: 4,
    image: "https://source.unsplash.com/600x400/?Greek%20Salad",
    rating: 5.6,
    price: 36643,
  },
  {
    id: 12,
    name: "Fruit Salad",
    description: "Fruit Salad is a delicious item from the Salad category.",
    categoryId: 4,
    image: "https://source.unsplash.com/600x400/?Fruit%20Salad",
    rating: 4.4,
    price: 38700,
  },
  {
    id: 13,
    name: "Shoyu Ramen",
    description: "Shoyu Ramen is a delicious item from the Ramen category.",
    categoryId: 5,
    image: "https://source.unsplash.com/600x400/?Shoyu%20Ramen",
    rating: 5.3,
    price: 39195,
  },
  {
    id: 14,
    name: "Miso Ramen",
    description: "Miso Ramen is a delicious item from the Ramen category.",
    categoryId: 5,
    image: "https://source.unsplash.com/600x400/?Miso%20Ramen",
    rating: 5.0,
    price: 35796,
  },
  {
    id: 15,
    name: "Tonkotsu Ramen",
    description: "Tonkotsu Ramen is a delicious item from the Ramen category.",
    categoryId: 5,
    image: "https://source.unsplash.com/600x400/?Tonkotsu%20Ramen",
    rating: 5.6,
    price: 40972,
  },
  {
    id: 16,
    name: "Beef Taco",
    description: "Beef Taco is a delicious item from the Taco category.",
    categoryId: 6,
    image: "https://source.unsplash.com/600x400/?Beef%20Taco",
    rating: 4.1,
    price: 39807,
  },
  {
    id: 17,
    name: "Chicken Taco",
    description: "Chicken Taco is a delicious item from the Taco category.",
    categoryId: 6,
    image: "https://source.unsplash.com/600x400/?Chicken%20Taco",
    rating: 4.4,
    price: 48724,
  },
  {
    id: 18,
    name: "Veggie Taco",
    description: "Veggie Taco is a delicious item from the Taco category.",
    categoryId: 6,
    image: "https://source.unsplash.com/600x400/?Veggie%20Taco",
    rating: 5.5,
    price: 19573,
  },
  {
    id: 19,
    name: "Vanilla Ice Cream",
    description:
      "Vanilla Ice Cream is a delicious item from the Es Krim category.",
    categoryId: 7,
    image: "https://source.unsplash.com/600x400/?Vanilla%20Ice%20Cream",
    rating: 4.1,
    price: 21837,
  },
  {
    id: 20,
    name: "Chocolate Gelato",
    description:
      "Chocolate Gelato is a delicious item from the Es Krim category.",
    categoryId: 7,
    image: "https://source.unsplash.com/600x400/?Chocolate%20Gelato",
    rating: 5.7,
    price: 24553,
  },
  {
    id: 21,
    name: "Strawberry Sorbet",
    description:
      "Strawberry Sorbet is a delicious item from the Es Krim category.",
    categoryId: 7,
    image: "https://source.unsplash.com/600x400/?Strawberry%20Sorbet",
    rating: 5.0,
    price: 21579,
  },
  {
    id: 22,
    name: "Lemonade",
    description: "Lemonade is a delicious item from the Minuman category.",
    categoryId: 8,
    image: "https://source.unsplash.com/600x400/?Lemonade",
    rating: 4.9,
    price: 45617,
  },
  {
    id: 23,
    name: "Iced Coffee",
    description: "Iced Coffee is a delicious item from the Minuman category.",
    categoryId: 8,
    image: "https://source.unsplash.com/600x400/?Iced%20Coffee",
    rating: 4.8,
    price: 16909,
  },
  {
    id: 24,
    name: "Fruit Tea",
    description: "Fruit Tea is a delicious item from the Minuman category.",
    categoryId: 8,
    image: "https://source.unsplash.com/600x400/?Fruit%20Tea",
    rating: 5.2,
    price: 28608,
  },
];
