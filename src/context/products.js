import React, { useState, useEffect } from "react";
import axios from "axios";
import url from '../utils/URL';
import {featuredProducts} from '../utils/helpers';

export const ProductContex = React.createContext();

//provider,consumer,useContext()


export default function ProductProvider({children}) {
    const[loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${url}/products`)
      .then(res => {
        const featured = featuredProducts(res.data);
        setProducts(res.data);
        setFeatured(featured);
        setLoading(false)
      });
      return () => {};
  }, []);

  return (
    <ProductContex.Provider value={{loading, products, featured}}>
      {children}
    </ProductContex.Provider>
  );
}