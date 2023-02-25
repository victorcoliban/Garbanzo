import { model, Schema } from "mongoose";

export interface Food {
    id: string;
    name: string;
    price: number;
    tags: string[];
    imageUrl: string;
    ingredients: string[];
}

export const FoodSchema = new Schema<Food>(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        tags: {type: [String]},
        imageUrl: {type: String, required: true},
        ingredients: {type: [String], required: true}
    },{
        toJSON:{
            virtuals: true
        }, 
        toObject:{
            virtuals: true
        },
        timestamps: true 
    }
);

export const FoodModel = model<Food>('food', FoodSchema);