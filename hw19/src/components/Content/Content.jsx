const Content = ({ currentItem }) => {
  if (currentItem === "Product") {
    return <p>This is {`This is ${currentItem} Page...`}</p>;
  }
  if (currentItem === "About") {
    return <p>This is {`This is ${currentItem} Page...`}</p>;
  }
  if (currentItem === "Contact") {
    return <p>This is {`This is ${currentItem} Page...`}</p>;
  }

  return <p>This is {`This is ${currentItem} Page...`}</p>;
};

export default Content;
