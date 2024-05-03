import { getCategoryId } from "@/services/getCategoryId";
import { NextPage } from "next";

const SubCategorySingle: NextPage<{ params: { id: string } }> = async ({
  params,
}) => {
  const data = await getCategoryId(params.id);
  console.log(data);
  return (
    <div className="">
        {/* {data?.parent.map((item) => 
         {console.log(item.title)}
        )} */}

        {data?.parent?.title}
    </div>
  );
};

export default SubCategorySingle;
