// import { useRouter } from "next/router";

import Post from "@/app/dashboard/posts/page";
import View from "@/app/dashboard/posts/[id]/page";
import Comments from "@/app/dashboard/posts/[id]/comments/page";
import Comment from "@/app/ui/dashboard/posts/view/comment";

const Posts = ({ params }) => {
  const { slug } = params;

  if (slug?.length == 3) {
    return <Comment params={{ commentId: slug[2] }} />;
  } else if (slug?.length == 2) {
    return <Comments params={{ id: slug[0] }} />;
  } else if (slug?.length == 1) {
    return <View params={{ id: slug[0] }} />;
  }
  return <Post />;
};

export default Posts;
