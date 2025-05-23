import { useQuery, useQueryClient } from "@tanstack/react-query";

export const ProductsNo1 = () => {
  const fetchData = async () => {
    let data = await fetch("https://api.escuelajs.co/api/v1/products");
    return await data.json();
  };

  const query1 = useQuery({
    queryKey: ["clothes"],
    queryFn: fetchData,
  });

  const { data, isLoading, isFetching, refetch } = query1;
  console.log("isLoading => ", isLoading);
  console.log("data => ", data);

  // console.log(data)
  // key={item?.category?.id}
  // img : item?.category?.image
  // name : item?.category?.name
  // price : item?.price
};