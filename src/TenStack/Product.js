import { useQuery } from "@tanstack/react-query";

export const Products = () => {
  return useQuery({
    queryKey: ["clothes"],
    queryFn: () =>
      fetch('https://api.escuelajs.co/api/v1/products').then((res) =>
        res.json(),
      ),
  })
}

// const { data, isLoading, isFetching, refetch } = query;
// console.log("isLoading => ", isLoading);
// console.log("data => ", data);