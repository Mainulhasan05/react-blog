const Post=require('../schema/post-schema');
const createPost=async(req,res)=>{
    try {
        const post=await new Post(req.body);
        post.save();
        res.status(200).json('blog saved sucessfully');
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports=createPost;
