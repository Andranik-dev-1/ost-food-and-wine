import { client } from "@/lib/sanity/client";
import { Category } from "@/types";

const getCategories = async (): Promise<Category[]> => {
  try {
    const categories = await client.fetch(`*[_type == "category"]{
        _id,
        name,
        prioritet,
      }
    `);
    return categories.sort(
      (a: Category, b: Category) => a.prioritet - b.prioritet
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export default getCategories;
