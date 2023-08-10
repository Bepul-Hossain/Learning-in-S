// import { AppDataSource } from "./data-source"
// import { Photo } from "./entity/Photo"
// import { PhotoMetadata } from "./entity/PhotoMetadata"
// import { User } from "./entity/User"


// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading user from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     console.log("=======================================")
//     // create a photo
//     const photo = new Photo()
//     photo.name = "Me and Bears"
//     photo.description = "I am near polar bears"
//     photo.filename = "photo-with-bears.jpg"
//     photo.views = 1
//     photo.isPublished = true

//     await AppDataSource.manager.save(photo);
//     console.log("Photo has been saved. Photo id is : "+photo.id);
    
//     const photoRepository = await AppDataSource.getRepository(Photo);
//     const savedPhoto = await photoRepository.find()
//     console.log(savedPhoto);


//     // const photoToRemove = await photoRepository.findBy({
//     //     views: 1,
//     // })
//     // await photoRepository.remove(photoToRemove)
    
//     const [photos, photosCount] = await photoRepository.findAndCount()
//     console.log("All photos: ", photos)
//     console.log("Photos count: ", photosCount)


//     // create a photo metadata
//     const metadata = new PhotoMetadata()
//     metadata.height = 640
//     metadata.width = 480
//     metadata.compressed = true
//     metadata.comment = "cybershoot"
//     metadata.orientation = "portrait"
//     metadata.photo = photo // this way we connect them

//     const metadataRepository = AppDataSource.getRepository(PhotoMetadata)
//     await metadataRepository.save(metadata)

//     console.log("=======================");
//     photo.metadata = metadata
//     // get repository

//     // saving a photo also save the metadata
//     await photoRepository.save(photo)

//     console.log("Photo is saved, photo metadata is saved too.")
//     // const photos1 = await photoRepository.find({
//     //     relations:{
//     //         metadata: true
//     //     }
//     // })

//     // console.log(photos1);
    

//     // const savedPhotoMetaData = await metadataRepository.find()
//     // console.log(savedPhotoMetaData);
//     // const photos1 = await AppDataSource.getRepository(Photo)
//     // .createQueryBuilder("photo")
//     // .innerJoinAndSelect("photo.metadata", "metadata")
//     // .getMany()
//     // console.log(photos1);

    


// }).catch(error => console.log(error))

