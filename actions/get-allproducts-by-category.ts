import getCategories from "./get-categories";
import getProducts from "./get-products";

const getAllProductsByCategorieset = async () => {
  //   const categories = await getCategories();
  //   const productsByCategoryId = await getProducts(categoriId);
  const categories = await getCategories();

  // Define a helper function to fetch products by categoryId
  const fetchProductsByCategoryId = async (categoryId: string) => {
    return await getProducts({ categoryId });
  };

  // Use Promise.all to fetch products for all categories concurrently
  const productPromises = categories.map(async (category) => {
    const products = await fetchProductsByCategoryId(category._id);
    return { id: category._id, name: category.name, products };
  });

  // Wait for all promises to resolve and get the final results
  const productsByCategories = await Promise.all(productPromises);

  return productsByCategories;
};

export default getAllProductsByCategorieset;
