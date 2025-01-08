import { Product } from "@/types/product";

// Sample products data (in a real app, this would come from an API or database)
export const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    price: 99.99,
    image: "https://picsum.photos/200/300",
    details:
      "Detailed information about Product 1. This would contain more specific information about the product features, specifications, and other relevant details.",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for product 2",
    price: 149.99,
    image: "https://picsum.photos/200/300",
    details:
      "Detailed information about Product 2. This would contain more specific information about the product features, specifications, and other relevant details.",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for product 3",
    price: 199.99,
    image: "https://picsum.photos/200/300",
    details:
      "Detailed information about Product 3. This would contain more specific information about the product features, specifications, and other relevant details.",
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
