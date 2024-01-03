const Drawing = require('./models/drawingModel');

app.post('/api/saveDrawing', async (req, res) => {
  try {
    const { data } = req.body; // Adjust based on your data structure
    const newDrawing = new Drawing({ data });
    await newDrawing.save();
    res.status(200).json({ message: 'Drawing saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
