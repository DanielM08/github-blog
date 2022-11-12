import { 
  GitHubLink,
  GitInfo,
  ProfileContainer,
  ProfileContent,
  ProfileSummary,
  TextHeader 
} from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <img src='https://github.com/Codibre.png' alt=""/>
        <ProfileSummary>
          <TextHeader>
            <h1>Codibre</h1>
            <GitHubLink>
              github
              <FontAwesomeIcon icon={faUpRightFromSquare} />                
            </GitHubLink>
          </TextHeader>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, rerum minus quod optio totam similique laborum quidem sunt quo consequatur quam, unde iure reprehenderit doloribus perspiciatis eaque tempora adipisci autem?</p>

          <GitInfo>
            <span>
              <FontAwesomeIcon icon={faGithub as IconProp}  size='xs'/>
              codibre
            </span>

            <span>
              <FontAwesomeIcon icon={faBuilding} size='xs' />
              OpenSource
            </span>

            <span>
              <FontAwesomeIcon icon={faUserGroup} size='xs' />
              30 seguidores
            </span>
          </GitInfo>
        </ProfileSummary>
      </ProfileContent>
    </ProfileContainer>
  )
}