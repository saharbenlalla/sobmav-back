import Collection from "../models/Collection.js";

export const addCollection = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({
        message: "No image uploaded",
      });
    }

    const { title, description, category } = req.body;

    const newCollection = new Collection({
      title,
      description,
      category,
      image: req.file.path,
    });

    await newCollection.save();

    res.status(201).json(newCollection);
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.find().sort({ createdAt: -1 });

    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ➤ Obtenir une collection par ID
export const getCollectionById = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);

    if (!collection) {
      return res.status(404).json({ message: "Collection non trouvée" });
    }

    res.status(200).json(collection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ➤ Supprimer une collection
export const deleteCollection = async (req, res) => {
  try {
    const deleted = await Collection.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Collection non trouvée" });
    }

    res.status(200).json({ message: "Collection supprimée" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
