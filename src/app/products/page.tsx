'use client'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

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
        <Row className='mt-5'>
            {data.map((item: IProduct) => (
                <Col
                    xs={12} md={4}
                >
                    <Link
                        href={`/products/${item.id}`}
                        className=" shadow-lg hover:shadow-xl"
                        key={item.id}
                    >
                        <div className="">
                            <Image
                                src={item.image}
                                width={400}
                                height={400}
                                alt={item.image}
                                className="h-full w-full object-cover hover:scale-105 transition-transform"
                            />
                        </div>
                    </Link>
                </Col>
            ))}
        </Row>
    )
}

export default ProductsPage;