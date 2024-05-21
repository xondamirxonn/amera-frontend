import dynamic from "next/dynamic";
const CartCard = dynamic(() => import("@/app/components/cart/cartCard"), {
  ssr: false,
});

const CartPage = async () => {
  return (
    <div className="container">
      <div className="pt-10">
        <h1 className="text-2xl text-center md:text-start font-medium">
          My Cart
        </h1>
        <div className="border border-b w-full mt-2 mb-3"></div>
      </div>
      <CartCard />
    </div>
  );
};

export default CartPage;
