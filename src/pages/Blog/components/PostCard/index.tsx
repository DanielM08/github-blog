import { PostCardContainer, PostCardContent, PostHeader } from "./styles";

export function PostCard() {
  return (
    <PostCardContainer>
      <PostCardContent>
        <PostHeader>
          <h1>JavaScript data types and data structures</h1>
          <span>
            Há 1 dia
          </span>
        </PostHeader>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita facilis cupiditate illo optio quas labore debitis reiciendis officiis deserunt cumque earum, esse, itaque aperiam sapiente dignissimos omnis? Odit, laboriosam!
        </p>
      </PostCardContent>
    </PostCardContainer>
  );
}