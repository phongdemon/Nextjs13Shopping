
interface IBlog {
    id: number;
    content: string;
    author: string;
    title: string;
}

interface IProduct {
    id: number;
    title: string;
    price: number;
    discountPrice: number;
    image: string;
    images: string[];
    highlights?: string[];
}