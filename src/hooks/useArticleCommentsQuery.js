import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const getArticleComments = async (slug) => {
  const token = localStorage.getItem("jwtToken");

  const { data } = await axios.get(
    `https://blogging-website-x3hj.onrender.com/api/articles/${slug}/comments`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );

  return data;
};

function useArticleCommentsQuery() {
  const { slug } = useParams();

  const {
    isLoading: isArticleCommentsLoading,
    data: articleComments,
    error: articleCommentsError,
  } = useQuery({
    queryKey: ["articleComments"],
    queryFn: async () => {
      const data = await getArticleComments(slug);
      return data;
    },

    refetchOnWindowFocus: true,
    staleTime: 0,
    cacheTime: 0,
  });
  return {
    isArticleCommentsLoading,
    articleComments,
    articleCommentsError,
  };
}

export default useArticleCommentsQuery;
