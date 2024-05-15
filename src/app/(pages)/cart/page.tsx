import dynamic from "next/dynamic";
const CartCard = dynamic(() => import("@/app/components/cart/cartCard"), {
  ssr: false,
});


const CartPage = () => {
  return <CartCard />;
};

export default CartPage;
