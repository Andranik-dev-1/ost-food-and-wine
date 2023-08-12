import { Product } from "@/types";
import qs from "query-string";
import { client } from "@/lib/sanity/client";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async ({
  categoryId,
  isFeatured,
}: Query): Promise<Product[]> => {
  try {
    // Start building the Sanity query based on the provided query parameters
    let sanityQuery = `*[_type == "product" && !isArchived`;

    // Apply filters based on the query parameters
    if (categoryId) {
      sanityQuery += ` && category._ref == "${categoryId}"`;
    }

    if (isFeatured !== undefined) {
      sanityQuery += ` && isFeatured == ${isFeatured}`;
    }

    // Complete the query and select the desired fields for each product
    sanityQuery += `] {
      _id,
      name,
      price,
      description,
      "images": images[].asset->url,
      category->{   
        _id,
        name,
      },
      isFeatured
    }`;

    // Fetch products from Sanity using the built query
    const products: Product[] = await client.fetch(sanityQuery);
    const sortedProducts = products.sort(
      (item1, item2) => Number(item2.isFeatured) - Number(item1.isFeatured)
    );
    return sortedProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default getProducts;
