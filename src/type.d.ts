// src/types/types.d.ts

export type Product = {
    _id: string;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    tags: string[];
    image: {
      asset: {
        url: string;
      };
    };
    description: string;
    available: boolean;
    slug: string;
    block?: { _type: string; children: { _type: string; text: string }[] };
    inventory?: number;
      };
  
  // export type PageProps = {
  //   title: string;
  //   description: string;
  // };
  
  // export type TEntry = {
  //   default: (props: PageProps) => JSX.Element;
  // };
  