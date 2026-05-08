import Collection from "../models/Collection.js";

// ➤ Ajouter une collection
export const addCollection = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    const newCollection = new Collection({
      title,
      description,
      category,
      // image: req.file ? `/uploads/${req.file.filename}` : "",
      image: req.file ? req.file.path : "",
    });

    await newCollection.save();

    res.status(201).json(newCollection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ➤ Obtenir toutes les collections
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