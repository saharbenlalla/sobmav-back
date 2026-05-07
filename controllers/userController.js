import User from "../models/User.js";

// ➤ Modifier le rôle d'un utilisateur
export const updateUserRole = async (req, res) => {
  const { role } = req.body;

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    user.role = role;
    await user.save();

    res.json({
      message: "Rôle mis à jour",
      user,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ➤ Lister tous les utilisateurs
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // sécurité

    res.json(users);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};