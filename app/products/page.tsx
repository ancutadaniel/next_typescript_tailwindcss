import { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/store/products";
import type { Product } from "@/types/product";

export const metadata: Metadata = {
  title: "Products | Web3 Bit",
  description:
    "Explore our collection of Web3 products and services. Find the perfect solution for your blockchain and decentralized application needs.",
  openGraph: {
    title: "Products | Web3 Bit",
    description:
      "Explore our collection of Web3 products and services. Find the perfect solution for your blockchain and decentralized application needs.",
    type: "website",
  },
};

export default function Products() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Our Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
