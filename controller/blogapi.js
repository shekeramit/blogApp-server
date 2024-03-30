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
//taking data from blog table
exports.takeBlog = async (req, res) => {
  try {
    db.query('SELECT * FROM blog', (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log('Successfully fetched data:', results);
        res.json(results); // Assuming results is an array of blog posts
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


