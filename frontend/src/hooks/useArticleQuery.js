import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const getArticleBySlug = async (slug) => {
  const { data } = await axios.get(
    `https://blogging-website-backend-bzho.onrender.com/api/articles/${slug}`
  );
  return data;
};
function useArticleQuery() {
  const { slug } = useParams();

  //   return useQuery(`/articles/${article ? article?.slug : slug}`, {
  //     enabled: !!slug || !!article?.slug,
  //     placeholderData: { article: {} },
  //     initialData: article ? { article } : undefined,
  //   })
  const {
    isLoading: isArticleLoading,
    data: article,
    error: ArticleError,
  } = useQuery({
    queryKey: ["slugArticle"],
    queryFn: getArticleBySlug,
    refetchOnWindowFocus: true,
    staleTime: 0,
    cacheTime: 0,
  });
  return {
    isArticleLoading,
    article,
    ArticleError,
  };
}

export default useArticleQuery;
