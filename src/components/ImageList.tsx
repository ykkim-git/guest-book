import styles from "./ImageList.module.scss";

const ImageList = () => {
  return (
    <div className={styles.container}>
      <img src="/assets/boribome01.jpg" />
      <img src="/assets/boribome02.jpg" />
      <img src="/assets/boribome03.jpg" />
      <img src="/assets/boribome04.jpg" />
    </div>
  );
};

export default ImageList;
