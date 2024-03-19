const db = require("../database/connection");

exports.createBlog = async(req,res)=>{
    const blogData = {
      blogTitle: req.body.blogTitle,
      blogDescription: req.body.blogDescription,
      imageUrl: req.body.imageUrl,
    }
    console.log(blogData);
    db.query('INSERT INTO blog SET ?',blogData , (err, result) => {
        if (err) {
          console.error('Error inserting data:', err); 
          res.status(500).json({ error: 'Internal server error' });
        } else {
          console.log('Data inserted successfully:', result);
          res.status(200).json({ message: 'Created successful' });
        }
    })

}