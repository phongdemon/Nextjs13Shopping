import { type ClassValue} from "clsx";

export const priceFormat = (price: number) => {
  return Intl.NumberFormat("vi-VN", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "VND",
  }).format(price);
};

export function cn(...inputs: ClassValue[]) {
  return inputs.join(' ');
}