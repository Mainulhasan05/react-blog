const express=require('express');
const Post=require('../schema/post-schema');
const createPost=require('../controller/createPost.js')

var router = express.Router()
const getPost=async(req,res)=>{
    try {
        
        const posts=await Post.find({});
        res.json(posts);
    } catch (error) {
        
    }
}
const getPostDetail=async(req,res)=>{
    try {

        const singlePost=await Post.findById(req.params.id);
        res.json(singlePost);
    } catch (error) {
        
    }
}
const setPostDetail=async(req,res)=>{
    try {
        await Post.findByIdAndUpdate(req.body._id,{$set:req.body});
    } catch (error) {
        
    }
}
const deletePost=async(req,res)=>{
    try {
        console.log('reachd with id '+req.params.id);
        let post=Post.findById(req.params.id);
        await post.deleteOne();
        res.json('Delete Done');
    } catch (error) {
        
    }
}

router.get('/updatePost/:id',getPostDetail);
router.post('/databasePostUpdate',setPostDetail);
router.get('/deletePost/:id',deletePost);
router.get('/',(req,res)=>{
    res.send("Alhumdulillah");
})

router.get('/postDetail/:id',getPostDetail);

router.post('/create', createPost);
router.get('/getPost',getPost);
module.exports=router;