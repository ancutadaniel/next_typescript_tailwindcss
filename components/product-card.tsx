import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {product.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          {product.description}
        </p>
        <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
