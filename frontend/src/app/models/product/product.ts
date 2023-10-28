export class Product {
  productID!: number;
  sellerID!: number;
  buyerID: number = -1;
  title!: string;
  description!: string;
  price!: number;
  category!: string;
  status: number = 0;
  isGroupPurchase: number = 0;
  imageUrl!: String;
}
