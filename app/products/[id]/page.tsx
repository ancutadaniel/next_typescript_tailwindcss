import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "@/store/products";

interface PageProps {
  params: Promise<{ id: string }>; // Update: params is a Promise
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params; // Await the params Promise
  const product = await getProductById(parseInt(id));

  if (!product) {
    notFound();
  }

  return {
    title: `${product.name} | WEB3BIT`, // Removed optional chaining since product is guaranteed
    description: product.details,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params; // Await the params Promise directly
  const product = await getProductById(parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link
          href="/products"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {product.description}
          </p>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {product.details}
            </p>
          </div>
          <button className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
