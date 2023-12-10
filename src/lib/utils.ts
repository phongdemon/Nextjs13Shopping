
export const priceFormat = (price: number) => {
    return Intl.NumberFormat("vi-VN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  