import Category from "../models/Category.js";

//CREATE NEW Category

const newCategory = async (req, res) => {
  const category = new Category(req.body);
  try {
    const savedCategory = await category.save();
    res.status(200).json(savedCategory);
  } catch {
    res.status(500).json(err);
  }
};

//UPDATE Category

const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE Category

const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("Category has been deleted !");
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL Categories

const allCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
};

export { newCategory, updateCategory, deleteCategory, allCategories };
