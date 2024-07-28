import styles from '../../../styles/List.module.css';

async function fetchBooks(categoryId) {
    const response = await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${categoryId}`);
    const json = await response.json();
    return json;
}

export default async function List({ params }) {
    const { id } = params;
    const data = await fetchBooks(id);
    const books = data.results.books || [];
    const category = data.results.list_name || "Unknown Category";
  
    return (
        <div className={styles.container}>
          <h1>{category} Books</h1>
          <div className={styles.grid}>
            {books.map((book) => (
              <div key={book.primary_isbn13} className={styles.bookCard}>
                <img src={book.book_image} alt={book.title} className={styles.bookImage} />
                <div className={styles.bookInfo}>
                  <h2 className={styles.bookTitle}>{book.title}</h2>
                  <p className={styles.bookAuthor}>by {book.author}</p>
                  <a
                    href={book.amazon_product_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buyButton}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }