'use client'
import { Row, Col } from 'react-bootstrap';
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import Cards from "@/components/Cards";
import { IProduct } from "@/lib/interface";

const ProductsPage = () => {

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
            <div className="container text-center">
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
    )
}

export default ProductsPage;