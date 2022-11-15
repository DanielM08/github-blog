import { formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/esm/locale/pt-BR'
import { 
  GitHubLink,
  GitInfo,
  PostSummaryContainer,
  TextHeader 
} from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUpRightFromSquare, 
  faChevronCircleLeft,
  faCalendarDay,
  faComment
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavLink } from "react-router-dom";


interface PostSummaryProps{
  created_at: string;
  html_url: string;
  title: string;
  comments: number;
}

export function PostSummary({ comments, created_at, html_url, title }: PostSummaryProps) {
  return (
    <PostSummaryContainer>
      <TextHeader>
        <NavLink to="/">
          <GitHubLink href="">
            <FontAwesomeIcon icon={faChevronCircleLeft} />
            voltar
          </GitHubLink>
        </NavLink>
        <GitHubLink href={html_url}>
          ver no github
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </GitHubLink>
      </TextHeader>
      
      <h1>{title}</h1>
      
      <GitInfo>        
        <span>
          <FontAwesomeIcon icon={faGithub as IconProp}  size='xs'/>
          codibre
        </span>

        <span>
          <FontAwesomeIcon icon={faCalendarDay} size='xs' />
          {formatDistanceToNow(new Date(created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>

        <span>
          <FontAwesomeIcon icon={faComment} size='xs' />
          { comments > 1 ? `${comments} comentários` : `${comments} comentário` }
        </span>
      </GitInfo>
    </PostSummaryContainer>
  )
}