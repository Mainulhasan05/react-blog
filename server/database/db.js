const mongoose=require('mongoose');

const connection= async()=>{
    try {
        const URL='mongodb+srv://user:user@cluster0.ayogb.mongodb.net/blogproject?retryWrites=true&w=majority';

        await mongoose.connect(URL);
        console.log('Database Connected');
    } catch (error) {
        console.log("error connecting "+error);
    }
    

}
connection();