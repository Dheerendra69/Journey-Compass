import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const creteArticle = async (values) => {
  const { data } = await axios.post(`http://localhost:3000/api/articles`, {
    article: { ...values.values },
  });

  return data;
};

export default function useCreateArticle() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createArticle, isLoading: isCreating } = useMutation({
    mutationFn: creteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
    onError: (err) => alert(err.message),
  });

  return { isCreating, createArticle };
}
