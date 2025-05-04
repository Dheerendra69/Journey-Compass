import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

const getAllTags = async () => {
  const { data } = await axios.get(
    `https://blogging-website-backend-bzho.onrender.com/api/tags`
  );
  return data;
};

function useTagsQuery() {
  const {
    isLoading: isTagsLoading,
    data: tags,
    error: tagsError,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: getAllTags,
    refetchOnWindowFocus: true,
    staleTime: 0,
    cacheTime: 0,
  });
  return {
    isTagsLoading,
    tags,
    tagsError,
  };
}

export default useTagsQuery;
