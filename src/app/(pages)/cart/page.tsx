import { getProductVariant } from "@/services/getProductVariant";
import dynamic from "next/dynamic";
const CartCard = dynamic(() => import("@/app/components/cart/cartCard"), {
  ssr: false,
});



const CartPage = async () => {
  const data = await getProductVariant()

  return <CartCard />;
};

export default CartPage;

