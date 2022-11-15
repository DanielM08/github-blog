import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../lib/axios";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { BlogContainer, PostList, SearchBar, SearchContent, SearchHeader } from "./styles";

interface PostInfo {
  title: string;
  created_at: string;
  repository_url: string;
  number: number;
  user: {
    login: string;
  }
}

const orgName = 'codibre'

export function Blog() {
  const [posts, setPosts] = useState<PostInfo[]>([]);
  
  const fetchPostDataSummary = useCallback(async () => {
    const response = await api.get<{ items: PostInfo[] } >(`search/issues?q=org:${orgName}+state:open`)
    
    const posts = response.data.items;
    
    setPosts(posts);
  }, [])

  useEffect(() => {
    fetchPostDataSummary()
  }, [fetchPostDataSummary])

  return (
    <BlogContainer>
      <Profile />
        <SearchContent>
          <SearchHeader>
            <strong>Publicações</strong>
            <span>
              {`${posts.length} publicações`}
            </span>
          </SearchHeader>

          {/* <SearchBar placeholder="Buscar conteúdo"/> */}
        </SearchContent>

        <PostList>
          {posts.map(post =>{
            if(post.user.login === 'dependabot[bot]'){
              return false;
            }            
            const urlElements = post.repository_url.split('/');
            const repository = urlElements[urlElements.length - 1];
            return (
              <NavLink to={{pathname: 'post', search: `repo=${repository}&issue=${post.number}`}}>
                <PostCard 
                  key={post.number}
                  title={post.title}
                  created_at={post.created_at}
                  repository={repository}
                />
              </NavLink>
            )
          })}
        </PostList>
    </BlogContainer>
  )
}