const Article = require("../models/Article");


const getTags = async (req, res) => {
  try {
    const tags = await Article.find().distinct("tagList").exec();
    const limitedTags = tags.slice(0, 15); // Get only the first 15 tags

    res.status(200).json({
      tags: limitedTags,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tags", error });
  }
};



module.exports = {
    getTags
}
