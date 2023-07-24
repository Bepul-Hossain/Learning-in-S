const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/animals')
.then((res)=>{
    console.log("connected to database.");
})
.catch((err)=>{
    console.log("Not connected to database : ", err);
})

const courseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now},
    isPublish: Boolean
})

const Course = mongoose.model('Course', courseSchema);

async function createCourse (){
    const course = new Course({
        name: 'React course',
        author:'Mosh',
        tags: ['React', 'frontend'],
        isPublish: true
    })
    
    try {
        const result = await course.save();
        console.log(result);
        
    } catch (error) {
        console.log(error.message);
    }
}    

createCourse();

// async function getCourses(){
//     const courses = await Course.find({author:'Mosh', isPublish: true})
//     .limit(2)
//     .sort({name:1})
//     .select({name: 1, tags: 1});
//     console.log(courses);
// }

// getCourses();