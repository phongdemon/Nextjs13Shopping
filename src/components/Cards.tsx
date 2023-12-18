import React from "react";
import { CardContent, Card, CardHeader, CardFooter } from "./ui/card";
import { IProduct } from "@/lib/interface";
import Image from "next/image";
import { priceFormat } from "@/lib/utils";
import useDeviceSize from "@/lib/useDeviceSize";
import Link from "next/link";
import { Button } from "react-bootstrap";

const Cards = ({ product }: { product: IProduct }) => {
  const { width } = useDeviceSize();

  const {
    id,
    price,
    title,
    thumbnail,
    discountPercentage,
    rating,
    discountPrice,
  } = product;

  return (
    <>
      <Link href={`/products/${id}`}>
        <div className="container border">
          <div className="row">
            {/* <Image
              src={thumbnail}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt={title}
            /> */}
            <Image
              src={thumbnail}
              width={width < 400 ? 100 : 200}
              height={width < 400 ? 100 : 200}
              alt={title}
              className="px-0"
            />
          </div>
          <div className="row">
            {title.length > 40 ? title.slice(0, 40) + "..." : title}
          </div>
          <div className="row">
            {discountPercentage}% OFF
          </div>
          <div className="row">
            {priceFormat(price)}
            <div className="col">
              <del className="text-gray-500 text-xs">
                {discountPrice && priceFormat(discountPrice)}
              </del>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
