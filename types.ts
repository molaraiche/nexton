export type credientielsType = {
  id?: number;
  icon: string;
  title: string;
  description: string;
};
export type categoryType = {
  id?: number;
  title: string;
  details: string;
  link: string;
};

export interface productType {
  id?: number;
  image: string;
  title: string;
  category: string;
  review: number;
  sales: number;
  price: number;
  oldPrice: number;
  quantity?: number;
  slug?: string;
}
