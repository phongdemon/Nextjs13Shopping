'use client'
import Link from 'next/link';
import { Card, Container, Row, Col, Stack, Button, ListGroup } from 'react-bootstrap';
import useSWR, { Fetcher } from 'swr';
import { priceFormat } from '@/lib/utils';
import ProductImgSlider from '@/components/product/ProductImgSlider';

const ViewDetailProduct = ({ params }: { params: { id: string } }) => {

    const fetcher: Fetcher<IProduct, string> = (url: string) => fetch(url)
        .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/products/${params.id}`,
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
            {data && data.id && (
                <>

                    <div className="sm:flex block">
                        <ProductImgSlider images={data.images} />
                        <div className="flex-1 p-4">
                            <h1 className="text-4xl ">{data.title}</h1>
                        </div>
                    </div>
                    <Container>
                        <Row className='my-3'>
                            <Link href={"/products"}> Go Back</Link>
                        </Row>

                        <Row className='my-3'>
                            <Col>
                                <ProductImgSlider images={data.images} />
                            </Col>
                            <Col>
                                <h1 className="text-4xl ">{data.title}</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container >
                        <Row className='my-3'>
                            <Link href={"/products"}> Go Back</Link>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={data?.image} />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            {data?.title}
                                        </Card.Title>
                                        <Card.Text>
                                            Price: {priceFormat(data ? data.price : 0)} { }

                                            {data && data.discountPrice && (
                                                <del className="text-gray-500 ">
                                                    {priceFormat(data.discountPrice)}
                                                </del>
                                            )}
                                        </Card.Text>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <ul className="">
                                            <h2 className="text-xl pb-2">Highlights</h2>
                                            {data && data.highlights?.map((highlight, index) => (
                                                <li key={index} className="pb-1">
                                                    <span className="inline-block w-1 h-1 bg-black rounded-full mr-2"></span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>

                                        <Button variant="primary" className="my-2">Add to card</Button>{' '}
                                        <Button variant="secondary" className="my-2">Quay lại</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </>
    )
}

export default ViewDetailProduct;