import styles from "./Books.module.scss";
const Books = () => {
  interface ItemType {
    name: string;
    content: string;
  }
  const books: Array<ItemType> = [
    {
      name: "김영권",
      content: "행복하세요~^^ ",
    },
    {
      name: "이빛나",
      content: "행복하세요~^^ ",
    },
  ];
  return (
    <>
      {books.map((item, idx) => {
        return (
          <article className={styles.container} key={idx + 1}>
            <section className={styles.container__body}>
              <h1>from. {item?.name}</h1>
              <h3>{item?.content}</h3>
            </section>
          </article>
        );
      })}
    </>
  );
};

export default Books;
