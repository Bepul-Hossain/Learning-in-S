import { Expose, Transform, Type } from "class-transformer"

export class ProductDto{
    @Expose()
    totalProducts: number;

    @Expose()
    limit: number;

    @Expose()
    @Type(()=>ProductList)
    products: ProductList[];
}

export class ProductList{
    @Expose({name: 'product_id'})
    id: number;

    @Expose({name: 'product_title'})
    title: string;

    @Expose({name: 'product_description'})
    description: string;

    @Expose({name: 'product_price'})
    price: number;

    @Expose({name: 'product_stock'})
    stock: number;

    @Expose({name: 'product_images'})
    @Transform(({value})=>value.toString().split(','))
    images: string[];

    @Transform(({obj})=>{
        return {
            id: obj.category_id,
            title: obj.category_title
        }
    })
    @Expose()
    category:any;

    @Expose({name: 'reviewCount'})
    review: number

    // @Expose({name: 'reviewCount'})  
    // rating: number  
}

// [
//     {
//         "product_id": 1,
//         "product_title": "product title 1 updated sd",
//         "product_description": "product description 1 updated",
//         "product_price": "350.33",
//         "product_stock": 5,
//         "product_images": "path1,path2",
//         "product_createdAt": "2023-08-23T11:55:18.171Z",
//         "product_updatedAt": "2023-08-24T11:52:21.000Z",
//         "product_addedById": 1,
//         "product_categoryId": 1,
//         "category_id": 1,
//         "category_title": "Title 1",
//         "category_description": "this is description 1.....",
//         "category_createdAt": "2023-08-23T09:55:04.415Z",
//         "category_updatedAt": "2023-08-23T09:55:04.415Z",
//         "category_addedById": 1,
//         "reviewCount": "0"
//     },
//     {
//         "product_id": 2,
//         "product_title": "product title 2 updated dfgd",
//         "product_description": "product description 1 updated",
//         "product_price": "250.33",
//         "product_stock": 6,
//         "product_images": "path1,path2",
//         "product_createdAt": "2023-08-24T03:22:21.424Z",
//         "product_updatedAt": "2023-08-24T11:52:21.000Z",
//         "product_addedById": 1,
//         "product_categoryId": 1,
//         "category_id": 1,
//         "category_title": "Title 1",
//         "category_description": "this is description 1.....",
//         "category_createdAt": "2023-08-23T09:55:04.415Z",
//         "category_updatedAt": "2023-08-23T09:55:04.415Z",
//         "category_addedById": 1,
//         "reviewCount": "0"
//     }
// ]