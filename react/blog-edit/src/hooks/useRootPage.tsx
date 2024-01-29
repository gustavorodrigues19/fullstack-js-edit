import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PostProps {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  createdAt: string;
}

export default function useRootPage() {
  const [postsList, setPostsList] = useState<PostProps[]>([]);
  const [selectValue, setSelectValue] = useState<string>("newest");
  const navigate = useNavigate();

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

  const handleCardClick = (id: string) => {
    navigate(`/post/${id}`);
  };

  const handlePostSorted = (posts: PostProps[]) => {
    if (selectValue === "newest") {
      const sortedPosts = posts.sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      setPostsList(sortedPosts);
    } else {
      const sortedPosts = posts.sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
      );
      setPostsList(sortedPosts);
    }
  };

  useEffect(() => {
    fetch("/posts.json")
      .then((resp) => resp.json())
      .then((posts: PostProps[]) => {
        handlePostSorted(posts);
      });
  }, [handlePostSorted, selectValue]);

  return {
    postsList,
    handleCardClick,
    selectValue,
    handleSelect,
  };
}
