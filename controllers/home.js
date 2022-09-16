
const Post = require('../models/PostW')

module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },

    createTodo: async (req, res)=>{
      try{
        console.log(req)
          await Post.create({ datee: req.body.dateee,  weightNum: req.body.weight, YesorNot: req.body.idk})
          console.log('Todo has been added!')
          res.redirect('/')
      }catch(err){
          console.log(err)
      }
  },
  };
  