import { AppDataSource } from "./data-source";
import { Product } from "./entity/Product";

AppDataSource.initialize().then(async()=>{

    //insert
     const result =   await AppDataSource
       .createQueryBuilder()
        .insert()
        .into(Product)
        .values([
            {name: "m21", description:"super cool phone 3", price:30000, brand: "samsung"},
        ])
        .execute()

    console.log(result);

    // // get
    // const result = await AppDataSource
    // .getRepository(Product)
    // .createQueryBuilder("prod")
    // .select(["prod.name", "prod.price"])
    // .getMany()

    // console.log(result);

    // //update

    // const result = await AppDataSource
    // .createQueryBuilder()
    // .update(Product)
    // .set({name: 'm31'})
    // .where("id=:id",{id:1})
    // .execute()

    // console.log(result);


    // //delete

    // const result = await AppDataSource
    // .createQueryBuilder()
    // .delete()
    // .from(Product)
    // .where("id=:id",{id:1})
    // .execute()

    // console.log(result);


}).catch((error)=>{
    console.log("=-----");
    
    console.log(error);
    
})