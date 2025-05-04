import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllArticles = async () => {
  const { data } = await axios.get(
    `https://blogging-website-backend-bzho.onrender.com/api/articles/feed`
  );

  return data;
};

function useArticlesQuery() {
  const {
    isLoading: isArticlesLoading,
    data: articles,
    error: ArticlesError,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: getAllArticles,
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
