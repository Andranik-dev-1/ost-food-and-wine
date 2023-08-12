export interface Product {
  _id: string;
  category: Category;
  name: {
    am: string;
    en: string;
    ru: string;
  };
  description: {
    am: string;
    en: string;
    ru: string;
  };
  price: string;
  isFeatured: boolean;
  images: string[];
}

export interface CartItem extends Product {
  count: number;
}

export interface Category {
  _id: string;
  name: {
    am: string;
    en: string;
    ru: string;
  };
  prioritet: number;
}

export enum PaymentMethods {
  Cash = "Cash",
  PosTerminal = "PosTerminal",
}

export interface OrderFormValues {
  name: string;
  number: number;
  address: string;
  paymentMethod: PaymentMethods;
  details?: string;
}

export interface Order extends OrderFormValues {
  summary: string;
  delivery: string;
  totalPrice: string;
}

export interface sendContactMessageDto {
  name: string;
  number: number;
  title: string;
  message: string;
}
