import { formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/esm/locale/pt-BR'
import { PostCardContainer, PostCardContent, PostHeader } from "./styles";

interface PostProps {
  title: string;
  created_at: string;
  repository: string;
}

export function PostCard({ title, created_at, repository}: PostProps) {
  return (
    <PostCardContainer>
      <PostCardContent>
        <PostHeader>
          <h1>{title}s</h1>
          <span>
            {formatDistanceToNow(new Date(created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </PostHeader>
        <p>
          {`Repository: ${repository}`}
        </p>
      </PostCardContent>
    </PostCardContainer>
  );
}