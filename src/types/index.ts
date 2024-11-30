export type State = {
  isLoading: boolean;
  isError: boolean;
  minPrice: number;
  maxPrice: number;
  basket: Basket[];
  resultSum: number;
};
export interface Filter {
  minPrice: number;
  maxPrice: number;
  gender: string;
  sizes: number[];
}
export interface IState {
  data: Sneakers[];
  minPrice: number;
  maxPrice: number;
}

export interface Basket {
  id: number;
  title: string;
  price: number;
  size: number;
  imgUrl: string;
}
export interface Sneakers  {
  id: number;
  vendorСode: string;
  inStock: number;
  title: string;
  description: string;
  imgUrl: string;
  stars: number;
  sizes: number[];
  price: number;
  oldPrice: number;
  gender: string;
  color: string;
  compound: string;
  country: string;
};

export type SneakersState = State & {
  data: Sneakers[];
};

export interface Order {
  name_user: string;
  tel_user: string;
  email_user: string;
}
