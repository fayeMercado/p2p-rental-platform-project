let myCart = [1658469412709, 1658469424081];

export function getCart() {
  return myCart;
}
export function getItem(code) {
  return myCart.find((item) => item.code === code);
}

