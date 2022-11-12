import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { BlogContainer, PostList, SearchBar, SearchContent, SearchHeader } from "./styles";

export function Blog() {
  return (
    <BlogContainer>
      <Profile />

      <form>
        <SearchContent>
          <SearchHeader>
            <strong>Publicações</strong>
            <span>
              6 publicações
            </span>
          </SearchHeader>

          <SearchBar placeholder="Buscar conteúdo"/>
        </SearchContent>

        <PostList>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostList>        
      </form>

    </BlogContainer>
  )
}