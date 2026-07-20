export default function CategoryCard({ category }) {
  if (!category) return null;

  return (
    <div className="category-card">
      <h4>{category.name || 'Category'}</h4>
    </div>
  );
}
