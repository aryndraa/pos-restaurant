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
    image:
      "https://images.unsplash.com/photo-1566950616521-335084348663?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.2,
    price: 42409,
  },
  {
    id: 2,
    name: "Maki Sushi",
    description: "Maki Sushi is a delicious item from the Sushi category.",
    categoryId: 1,
    image:
      "https://images.unsplash.com/photo-1558985212-92c2ff0b56e7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.1,
    price: 19251,
  },
  {
    id: 3,
    name: "Sashimi",
    description: "Sashimi is a delicious item from the Sushi category.",
    categoryId: 1,
    image:
      "https://images.unsplash.com/photo-1635527643921-ce2b9bbd5728?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.0,
    price: 21241,
  },
  {
    id: 4,
    name: "Ribeye Steak",
    description: "Ribeye Steak is a delicious item from the Steak category.",
    categoryId: 2,
    image:
      "https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.5,
    price: 48404,
  },
  {
    id: 5,
    name: "T-Bone Steak",
    description: "T-Bone Steak is a delicious item from the Steak category.",
    categoryId: 2,
    image:
      "https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    price: 24949,
  },
  {
    id: 6,
    name: "Sirloin Steak",
    description: "Sirloin Steak is a delicious item from the Steak category.",
    categoryId: 2,
    image:
      "https://images.unsplash.com/photo-1626203313658-886791f37e46?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    price: 33083,
  },
  {
    id: 7,
    name: "Croissant",
    description: "Croissant is a delicious item from the Kue & Roti category.",
    categoryId: 3,
    image:
      "https://images.unsplash.com/photo-1612366747681-e4ca6992b1e9?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.9,
    price: 24728,
  },
  {
    id: 8,
    name: "Cheesecake",
    description: "Cheesecake is a delicious item from the Kue & Roti category.",
    categoryId: 3,
    image:
      "https://images.unsplash.com/photo-1676300185983-d5f242babe34?q=80&w=790&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.1,
    price: 19956,
  },
  {
    id: 9,
    name: "Brownie",
    description: "Brownie is a delicious item from the Kue & Roti category.",
    categoryId: 3,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.9,
    price: 19191,
  },
  {
    id: 10,
    name: "Caesar Salad",
    description: "Caesar Salad is a delicious item from the Salad category.",
    categoryId: 4,
    image:
      "https://images.unsplash.com/photo-1746211108786-ca20c8f80ecd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    price: 44749,
  },
  {
    id: 11,
    name: "Greek Salad",
    description: "Greek Salad is a delicious item from the Salad category.",
    categoryId: 4,
    image:
      "https://images.unsplash.com/photo-1636654931290-418d20865e03?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.6,
    price: 36643,
  },
  {
    id: 12,
    name: "Fruit Salad",
    description: "Fruit Salad is a delicious item from the Salad category.",
    categoryId: 4,
    image:
      "hhttps://images.unsplash.com/photo-1641642400143-6be68f1a0918?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.4,
    price: 38700,
  },
  {
    id: 13,
    name: "Shoyu Ramen",
    description: "Shoyu Ramen is a delicious item from the Ramen category.",
    categoryId: 5,
    image:
      "https://images.unsplash.com/photo-1632440722549-692fc6af969e?q=80&w=1807&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.3,
    price: 39195,
  },
  {
    id: 14,
    name: "Miso Ramen",
    description:
      "https://images.unsplash.com/photo-1637024696628-02cb19cc1829?q=80&w=1817&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://images.unsplash.com/photo-1635379511574-bc167ca085c8?q=80&w=1756&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.6,
    price: 40972,
  },
  {
    id: 16,
    name: "Beef Taco",
    description: "Beef Taco is a delicious item from the Taco category.",
    categoryId: 6,
    image:
      "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.1,
    price: 39807,
  },
  {
    id: 17,
    name: "Chicken Taco",
    description: "Chicken Taco is a delicious item from the Taco category.",
    categoryId: 6,
    image:
      "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.4,
    price: 48724,
  },
  {
    id: 18,
    name: "Veggie Taco",
    description: "Veggie Taco is a delicious item from the Taco category.",
    categoryId: 6,
    image:
      "https://images.unsplash.com/photo-1627564803215-ad55bad5c5ea?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.5,
    price: 19573,
  },
  {
    id: 19,
    name: "Vanilla Ice Cream",
    description:
      "Vanilla Ice Cream is a delicious item from the Es Krim category.",
    categoryId: 7,
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.1,
    price: 21837,
  },
  {
    id: 20,
    name: "Chocolate Gelato",
    description:
      "Chocolate Gelato is a delicious item from the Es Krim category.",
    categoryId: 7,
    image:
      "https://images.unsplash.com/photo-1593410974855-87ab9de04bb5?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.7,
    price: 24553,
  },
  {
    id: 21,
    name: "Strawberry Sorbet",
    description:
      "Strawberry Sorbet is a delicious item from the Es Krim category.",
    categoryId: 7,
    image:
      "https://images.unsplash.com/photo-1663601474053-9a863e58ec9d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.0,
    price: 21579,
  },
  {
    id: 22,
    name: "Lemonade",
    description: "Lemonade is a delicious item from the Minuman category.",
    categoryId: 8,
    image:
      "https://images.unsplash.com/photo-1650092071863-b47da0c0065b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    price: 45617,
  },
  {
    id: 23,
    name: "Iced Coffee",
    description: "Iced Coffee is a delicious item from the Minuman category.",
    categoryId: 8,
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    price: 16909,
  },
  {
    id: 24,
    name: "Fruit Tea",
    description: "Fruit Tea is a delicious item from the Minuman category.",
    categoryId: 8,
    image:
      "https://images.unsplash.com/photo-1624896276654-2eb0c7e8247c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.2,
    price: 28608,
  },
];
