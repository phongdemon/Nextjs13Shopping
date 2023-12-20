"use client";

import useSWR from "swr";
import React from "react";
import Cards from "../Cards";
import { IProduct } from "@/lib/interface";

const ProductList = () => {

    const fetcher = (url: string) => fetch(url)
        .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        "http://localhost:8000/products",
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    if (isLoading) {
        return <div>loading...</div>
    }

    return (
        <>
            <div className="container text-center m-4">
                <div className="row">
                    {data.length > 0 ? (
                        data?.map((product: IProduct) => (
                            <div className="col">
                                <Cards product={product} key={product.id} />
                            </div>
                        ))
                    ) : (
                        <div>Sorry! There is no product related to your query.</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductList;
