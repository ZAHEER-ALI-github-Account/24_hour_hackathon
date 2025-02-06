export interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    image: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
    inventory : number;
}