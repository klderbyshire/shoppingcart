function Basket({ basket }) {
  return (
    <div>
      {basket.length > 0
        ? basket.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })
        : null}
    </div>
  );
}

export default Basket;
