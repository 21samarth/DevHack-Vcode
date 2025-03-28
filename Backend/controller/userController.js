import '../model/connection.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import userSchamaModel from '../model/user.model.js';
export const save = async(req,res)=>{
  var userlist = await userSchamaModel.find();
  var len = userlist.length;
  var _id = (len == 0) ? 1 : userlist[len-1]._id+1;
  console.log(_id)
    var userDetail = req.body;
    userDetail = {...userDetail,"_id":_id,"role":"user","status":0,"info":Date()}
    // console.log(userDetail)
try{
    var user =  await userSchamaModel.create(userDetail)
    user ? res.status(201).json({"status":true}) : res.status(500).json({"status":false})
}
  catch(err){
    res.send(err)
  }
}

export const fetch = async(req,res)=>{
  var condition_obj = url.parse(req.url,true).query
  console.log(condition_obj)
  var user = await userSchamaModel.findOne(condition_obj)
  console.log(user)
  user ?res.status(200).json(user) : res.send(404).json({"msg":"RESOURCE not found"})


}


export const update = async(req,res)=>{
  // convert string to object (Not required if front end is react abhi thunder client string dega islye liha h)
 var userupdate = await userSchamaModel.findOne(JSON.parse(req.body.condition_obj));

 if(userupdate) {
  var userDetailupdate = await  userSchamaModel.updateOne(JSON.parse(req.body.condition_obj),{$set:(JSON.parse(req.body.content_obj))}) 
 
 if (userDetailupdate) {
  res.status(200).json({"msg":"user updated successfully"})
 }else{
  res.send(500).json({"msg":"User not updated"})
 }
}
 else{res.send(404).json({"msg":"RESOURCE not found"})
}
}
export const deleteuser = async(req,res)=>{
  // convert string to object (Not required if front end is react abhi thunder client string dega islye liha h)
 var userDelete = await userSchamaModel.findOne(JSON.parse(req.body.condition_obj));

 if(userDelete) {
  var userDetailDelete = await  userSchamaModel.deleteOne(JSON.parse(req.body.condition_obj)) 
 
 if (userDetailDelete) {
  res.status(200).json({"msg":"user deleted successfully"})
 }else{
  res.send(500).json({"msg":"User not deleted"})
 }
}
 else{res.send(404).json({"msg":"RESOURCE not found"})
}
}

export const login = async(req,res)=>{
  
  var loginDetail = {...req.body,'status':1};
  var loginuser = await userSchamaModel.find(loginDetail);
  // console.log(loginuser)
  if (loginuser) {
    const payload = {"subject":loginuser[0].email};
    const key = rs.generate();
    const token = jwt.sign(payload,key);
    res.status(200).json({"token":token,"userlist":loginuser[0]});
  }
  else{
    res.status(500).json({"msg":"Invalid user"});
  }
}