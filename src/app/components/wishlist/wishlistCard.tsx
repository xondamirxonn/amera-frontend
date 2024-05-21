import { add, remove } from "@/app/redux/reducer/cart-reducer";
import { removeList } from "@/app/redux/reducer/wishlist-reducer";
import { RootState } from "@/app/redux/store";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
interface WishlistItem {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
    image_id: number;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price_with_discount: null;
  quantity: number;
  price: number;
  userCount: number;
  userPrice: number;
}
const WishlistCard: React.FC<WishlistItem> = (props) => {
  const { products } = useSelector((state: RootState) => state.product);
  const { wishlists } = useSelector((state: RootState) => state.wishlist);
  const cart = products.find((item) => item.id == props.id);
  const dispatch = useDispatch();
  const AddCart = () => {
    dispatch(add(props));
  };

  const RemoveCart = (id: number) => {
    dispatch(remove({ id }));
  };

  const RemoveWishlist = (id: number) => {
    dispatch(removeList({ id }));
  };
  return (
    <div className="">
      <div className="border lg:border-none lg:hover:shadow-lg transition-all duration-500 rounded-sm bg-white p-3 w-[300px]  md:w-[350px] lg:w-[280px]  flex flex-col justify-between min-h-[50vh] sm:min-h-[50vh] md:min-h-[35vh] lg:min-h-[30vh] relative  group overflow-hidden mx-auto">
        <Link href={`/product/${props.id}`}>
          <div className=" mx-auto  overflow-clip ">
            <Image
              priority
              width={200}
              height={200}
              className="w-[300px] mx-auto min-h-[250px] max-h-[200px]  object-contain duration-1000  group-hover:scale-[0.9]  "
              src={props?.images[0]?.image}
              alt={props.title}
            />
          </div>
          <div className="text-center ">
            <h1 title={props.title} className="text-[#0066C8] pt-2">
              {" "}
              {props?.title?.length >= 30
                ? props.title.slice(0, 30).split(" ").slice(0, -1).join(" ") +
                  "..."
                : props.title}{" "}
            </h1>
            <strong>${props.price}</strong>
          </div>
        </Link>
        <div className="flex justify-center pt-2">
          <Button
            onClick={!cart ? () => AddCart() : () => RemoveCart(props.id)}
            className={
              !cart
                ? "bg-[#FCB700] hover:bg-none rounded-[30px] w-full "
                : "bg-rose-500 hover:bg-none rounded-[30px] w-full "
            }
          >
            {!cart ? "Add To Cart" : "Remove Cart"}
          </Button>
        </div>
        <div className=" lg2:flex lg2:flex-col lg2:gap-3 absolute  lg2:translate-x-[60px] lg2:group-hover:translate-x-0  right-3      lg2:duration-300 ">
          {/* <ProductModal {...props} /> */}
          <Button
            onClick={() => RemoveWishlist(props.id)}
            size="icon"
            className="
                bg-[#FCB700] 
               rounded-full border "
          >
            <CiStar color="black" size={25} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
