import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";

const ProductClocthes = () => {
  const [items, setItems] = useState([]);
  const fetchData = async () => {
    let data = await fetch("https://api.escuelajs.co/api/v1/products");
    return await data.json();
  };

  const query = useQuery({
    queryKey: ["clothes"],
    queryFn: fetchData,
  });

  const { data, isLoading, isFetching, refetch } = query;
  // console.log("isLoading => ", isLoading);
  console.log("data => ", data);

  return (
    <div>
      {isLoading == true ? (
        <div>
          <Loading />
        </div>
      ) : (
        // console.log(data)
        data.map((item) => {
          <p key={item.id}>{item.title}</p>;
        })
      )}
    </div>
  );
};

export default ProductClocthes;
