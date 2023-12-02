'use client'
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import useSWR, { Fetcher } from 'swr'

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
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" className="my-2">Go somewhere</Button>{' '}
                            <Button variant="secondary" className="my-2">Quay lại</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewDetailProduct;