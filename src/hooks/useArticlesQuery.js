import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllArticles = async ({ tag = [], feed = false }) => {
  const token = localStorage.getItem("jwtToken");
  const params = {};

  if (tag.length > 0) {
    params.tags = tag;
  }

  if (feed) {
    params.feed = true;
  }

  try {
    const { data } = await axios.get(
      "https://blogging-website-x3hj.onrender.com/api/articles/feed",
      {
        params,
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.error(error?.response?.data || error.message);
    throw error;
  }
};

function useArticlesQuery(filters) {
  const {
    isLoading: isArticlesLoading,
    data: articles,
    error: ArticlesError,
  } = useQuery({
    queryKey: ["articles", filters],
    queryFn: () => getAllArticles(filters),
    refetchOnWindowFocus: true,
    staleTime: 0,
    cacheTime: 0,
  });

  return {
    isArticlesLoading,
    articles,
    ArticlesError,
  };
}

export default useArticlesQuery;
