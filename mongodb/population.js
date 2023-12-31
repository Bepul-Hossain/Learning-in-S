const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playgroud')
    .then(()=>console.log('Connected to Mongo DB'))
    .catch((err)=>console.log('Could not connect to mongo DB', err));

const Author = mongoose.model('Author', new mongoose.Schema({
    name: String,
    bio: String,
    website: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
}));

async function createAuthor(name, bio, website){
    const author = new Author({
        name,
        bio,
        website
    });

    const result = await author.save();
    console.log(result);
}

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
        .populate('author', 'name -_id')
        .select('name author');

    console.log(courses);
}

// createAuthor('Mosh', 'My bio', 'My website')

// createCourse('Node Course', '64b8a80c2f1255768341c62f');
listCourses();