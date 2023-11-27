'use client'
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
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
        <div >
            <div className='my-3'>
                <Link href={"/products"}> Go Back</Link>
            </div>
            <Card className="text-center">
                <Card.Header>Title: {data?.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Content
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ViewDetailProduct;