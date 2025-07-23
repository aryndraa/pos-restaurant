type additional = {
  name: string;
  items: {
    name: string;
    price: string;
  }[];
};

type Food = {
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    categoryId: 1,
    image:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.6,
    price: 25000,
  },
  {
    id: 2,
    name: "Maki Sushi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    categoryId: 1,
    image:
      "https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    price: 30000,
  },
];
