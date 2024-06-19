import { ReactNode } from "react";

export interface Book {
    _id: string;
    id: number;
    description: ReactNode;
    title: string;
    author: string;
    genre: string;
    // Add more fields as necessary
  }
  