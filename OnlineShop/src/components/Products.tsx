import { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';

type Category = {
  id: string;
  name: string;
};

function Products() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Categorias</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
