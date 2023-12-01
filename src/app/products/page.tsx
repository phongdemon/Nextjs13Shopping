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
            {/* <AppTable
                products={data?.sort((a: any, b: any) => b.id - a.id) ?? []}
            /> */}
            {data.map((item: IProduct) => (
                <Col
                    xs={12} md={4}
                >
                    <Link
                        href={`/${item.id}`}
                        // className=" shadow-lg hover:shadow-xl"
                        key={item.id}
                    >
                        <div className="">
                            <Image
                                src={item.image}
                                width={400}
                                height={400}
                                alt={item.image}
                                // className="h-full w-full object-cover hover:scale-105 transition-transform"
                            />
                        </div>
                    </Link>
                </Col>
            ))}
            {/* <section className="grid grid-cols-2 gap-3 my-8 w-[95vw] mx-auto">
                {data.map((item: IProduct) => (
                    <Link
                        href={`/${item.id}`}
                        className=" shadow-lg hover:shadow-xl"
                        key={item.id}
                    >
                        <div className="md:h-[400px] max-md:aspect-square overflow-hidden">
                            <Image
                                src={item.image}
                                width={400}
                                height={400}
                                alt={item.image}
                                className="h-full w-full object-cover hover:scale-105 transition-transform"
                            />
                        </div>
                    </Link>
                ))}
            </section> */}
        </Row>
    )
}

export default ProductsPage;