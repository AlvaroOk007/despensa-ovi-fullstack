const { Image } = require('../db/models')

const createImages = async (req, res) => {
  try {
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ message: 'No se subieron imágenes' });
    }

    const imagesToCreate = files.map((file) => ({
      filename: file.filename,
      path: `/uploads/${file.filename}`,
    }));

    // Guardar en la DB
    const savedImages = await Image.bulkCreate(imagesToCreate);

    res.json({
      message: 'Imágenes subidas y guardadas',
      images: savedImages,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al subir o guardar imágenes' });
  }
};
