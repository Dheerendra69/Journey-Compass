const Article = require("../models/Article");
const User = require("../models/User");

const createArticle = async (req, res) => {
  const id = req.userId;

  const author = await User.findById(id).exec();

  const { title = "", description, body, tagList } = req.body.article;

  if (!title || !description || !body) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const article = await Article.create({ title, description, body });

  article.author = id;

  if (Array.isArray(tagList) && tagList.length > 0) {
    article.tagList = tagList;
  }

  await article.save();

  return res
    .status(200)
    .json({ article: await article.toArticleResponse(author) });
};

const feedArticles = async (req, res) => {

  try {
    const { tags, feed } = req.query;

    const query = {};

    if (tags) {
      const tagArray = Array.isArray(tags) ? tags : [tags];
      query.tagList = { $in: tagArray };
    }

    const articles = await Article.find(query).populate(
      "author",
      "username email image"
    );
    res.json(articles);
  } catch (err) {
    console.error("Error fetching filtered articles", err);
    res.status(500).json({ error: "Failed to fetch articles" });
  }
};

const getArticleWithSlug = async (req, res) => {
  const { slug } = req.params;

  const article = await Article.findOne({ slug }).exec();

  console.log("inside get Article by slug");
  const data = await article.toArticleResponse();
  console.log(data);
  if (!article) {
    console.log("Article Not there");
    return res.status(401).json({
      message: "Article Not Found",
    });
  }

  return res.status(200).json({
    article: await article.toArticleResponse(false),
  });
};

module.exports = {
  createArticle,
  feedArticles,
  getArticleWithSlug,
};
