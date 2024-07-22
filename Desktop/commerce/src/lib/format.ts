export function formartPrice(price: number) {
  return (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "CAD",
  });
}
