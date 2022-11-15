import ReactMarkdown from 'react-markdown'
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { PostSummary } from './components/PostSummary';
import { PostContainer, PostContent } from './styles';

interface PostInfo {
  title: string;
  created_at: string;
  html_url: string;
  body: string;
  comments: number;
  id: number;
}

const orgName = 'Codibre'

export function Post() {
  const [searchParams] = useSearchParams();
  const [post, setPost] = useState<PostInfo>();
  
  const repo = searchParams.get('repo');
  const issueNumber = searchParams.get('issue');

  const fetchPostData = useCallback(async () => {      
    const URL = `repos/${orgName}/${repo}/issues/${issueNumber}`;
    console.log(URL);
    const response = await api.get<PostInfo>(URL)
    
    const post = response.data;

    setPost(post);
  }, [])

  useEffect(() => {
    fetchPostData()
  }, [fetchPostData])

  if(!post){
    return (
      <div>...Carregando</div>
    )
  }

  return (
    <PostContainer>
      <PostSummary 
        comments={post.comments}
        created_at={post.created_at}
        html_url={post.html_url}
        title={post.title}
        key={post.id}
      />
        <PostContent>
          <p>
            <ReactMarkdown>
              {post.body}
            </ReactMarkdown> 
          </p>
      </PostContent>
    </PostContainer>
  )
}