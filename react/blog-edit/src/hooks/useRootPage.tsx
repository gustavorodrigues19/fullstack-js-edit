import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PostProps {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  createdAt: Date;
}

export default function useRootPage() {
  const [postsList, setPostsList] = useState<PostProps[]>([]);
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    fetch("/posts.json")
      .then((resp) => resp.json())
      .then((resp: PostProps[]) => setPostsList(resp));
  }, []);

  return {
    postsList,
    handleCardClick,
  };
}
