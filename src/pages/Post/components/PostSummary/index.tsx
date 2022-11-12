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

export function PostSummary() {
  return (
    <PostSummaryContainer>
      <TextHeader>
        <GitHubLink href="">
          <FontAwesomeIcon icon={faChevronCircleLeft} />
          voltar
        </GitHubLink>
        <GitHubLink href="">
          ver no github
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </GitHubLink>
      </TextHeader>
      
      <h1>JavaScript data types and data structures</h1>
      
      <GitInfo>        
        <span>
          <FontAwesomeIcon icon={faGithub as IconProp}  size='xs'/>
          codibre
        </span>

        <span>
          <FontAwesomeIcon icon={faCalendarDay} size='xs' />
          Há 1 dia
        </span>

        <span>
          <FontAwesomeIcon icon={faComment} size='xs' />
          5 comentários
        </span>
      </GitInfo>
    </PostSummaryContainer>
  )
}