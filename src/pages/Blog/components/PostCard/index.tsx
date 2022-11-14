import { PostCardContainer, PostCardContent, PostHeader } from "./styles";

interface PostProps {
  title: string;
  created_at: string;
}

export function PostCard({ title, created_at }: PostProps) {
  return (
    <PostCardContainer>
      <PostCardContent>
        <PostHeader>
          <h1>{title}s</h1>
          <span>
            {created_at}
          </span>
        </PostHeader>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita facilis cupiditate illo optio quas labore debitis reiciendis officiis deserunt cumque earum, esse, itaque aperiam sapiente dignissimos omnis? Odit, laboriosam!
        </p>
      </PostCardContent>
    </PostCardContainer>
  );
}