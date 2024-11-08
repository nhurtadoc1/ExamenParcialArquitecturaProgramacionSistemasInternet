import { ObjectId } from "mongodb";

interface Book {
    _id: ObjectId;
    name: string;
    authors: string[];
    copies: number;
};

interface Author {
    _id: ObjectId;
    name: string;
    biography: string;
};