import { AppDataSource } from "./data-source";
import { Product } from "./entity/Product";
import { Category, Question } from "./entity/relationship-Entity/CategoryEntity";

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


    const category1 = new Category()
    category1.name = "ORMs"

    const category2 = new Category()
    category2.name = "Programming"

    const question = new Question()
    question.title = "How to ask questions?"
    question.text = "Where can I ask TypeORM-related questions?"
    question.categories = [category1, category2]
    await AppDataSource.manager.save(question)


}).catch((error)=>{
    console.log("=-----");
    
    console.log(error);
    
})