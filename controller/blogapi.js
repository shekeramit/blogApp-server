const db = require("../database/connection");

exports.createBlog = async(req,res)=>{
    const blogData = {
      blogTitle: req.body.blogTitle,
      blogDescription: req.body.blogDescription,
      imageUrl: req.body.imageUrl,
    }
    //inserting data into blog table
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

  exports.takeBlog =async(req,res) => {
    db.query('SELECT * FROM blog', (err,result)=>{
      if (err) {
        console.error('Error inserting data:', err); 
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log('successfully:', result);
        res.status(200).json({ message: result });
      }
    })
  }

