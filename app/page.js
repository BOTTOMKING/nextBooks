import styles from '../styles/Home.module.css';

async function fetchCategories() {
    const response = await fetch('https://books-api.nomadcoders.workers.dev/lists');
    const json = await response.json();
    return json;
}
  
export default async function Home() {
    const data = await fetchCategories();
    const categories = data.results || [];

    return (
        <div className={styles.container}>
          <h1 className={styles.title}>New York Times Bestsellers</h1>
          <div className={styles.grid}>
            {categories.map((category) => (
              <a
                key={category.list_name_encoded}
                href={`/list/${category.list_name_encoded}`}
                className={styles.categoryButton}
              >
                {category.display_name}
              </a>
            ))}
          </div>
        </div>
    );
 }