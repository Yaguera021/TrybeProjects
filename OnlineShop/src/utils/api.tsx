export async function getCategories() {
  const Url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(Url);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(
  categoryId: string,
  query: string,
) {
  const Url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(Url);
  const data = await response.json();
  return data;
}

export async function getProductById(Id: string) {
  const Url = `https://api.mercadolibre.com/items/${Id}`;
  const response = await fetch(Url);
  const data = await response.json();
  return data;
}
