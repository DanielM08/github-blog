import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { BlogContainer, PostList, SearchBar, SearchContent, SearchHeader } from "./styles";

interface PostInfo {
  url: string;
  title: string;
  created_at: string;
  html_url: string;
  body: string;
  id: number;
}

const orgName = 'codibre'

export function Blog() {
  const [posts, setPosts] = useState<PostInfo[]>([]);
  
  const fetchPostData = useCallback(async () => {
    const response = await api.get<{ items: PostInfo[] } >(`search/issues?q=org:${orgName}+state:open`)
    
    const posts = response.data.items;

    setPosts(posts);
  }, [])

  useEffect(() => {
    fetchPostData()
  }, [fetchPostData])

  return (
    <BlogContainer>
      <Profile />

      <form>
        <SearchContent>
          <SearchHeader>
            <strong>Publicações</strong>
            <span>
              {`${posts.length} publicações`}
            </span>
          </SearchHeader>

          <SearchBar placeholder="Buscar conteúdo"/>
        </SearchContent>

        <PostList>
          {posts.map(post =>
            <PostCard 
              key={post.id}
              title={post.title}
              created_at={post.created_at}
            />
          )}
        </PostList>        
      </form>

    </BlogContainer>
  )
}