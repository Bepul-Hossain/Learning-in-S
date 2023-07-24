const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playgroud')
    .then(()=>console.log('Connected to Mongo DB'))
    .catch((err)=>console.log('Could not connect to mongo DB', err));

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
})

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: authorSchema
}));

async function createCourse(name, author){
    const course = new Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result);
}


async function listCourses(){
    const courses = await Course
        .find()

    console.log(courses);
}

async function updateAuthor(courseId){
    const course = await Course.findById(courseId)
    course.author.name="Bepul hossain",
    course.save();
}

updateAuthor('64b8ad1f9df34f3d82c9f60c');
// createCourse('Node Course', new Author({name: 'Mosh'}));

// listCourses();