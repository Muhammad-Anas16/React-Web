import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setProducts } from "../Redux/product/ProductSlice";
import { useEffect } from "react";

const Products = () => {

  const dispatch = useDispatch();

  const query = useQuery({
    queryKey: ["clothes"],
    queryFn: () =>
      fetch('https://api.escuelajs.co/api/v1/products').then((res) =>
        res.json(),
      ),
  })

  useEffect(() => {
    if (query.data) {
      dispatch(setProducts(query.data))
      console.log("Data in useProducts hook:", query.data);
    }
  }, [query.data])

  return query
}