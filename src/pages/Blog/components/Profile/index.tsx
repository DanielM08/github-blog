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
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface OrgData {
  login: string;
  html_url: string;
  bio: string;
  followers: number;
}

const orgName = 'codibre'

export function Profile() {
  const [org, setOrg] = useState<OrgData>();
  
  const fetchOrgData = useCallback(async () => {
    const response = await api.get<OrgData>(`users/${orgName}`)
    
    const { login, html_url, bio, followers } = response.data;

    console.log(response.data)

    setOrg({ login, html_url, bio, followers });
  }, [])

  useEffect(() => {
    fetchOrgData()
  }, [fetchOrgData])

  if(!org){
    return (
      <div>...Carregando</div>
    )
  }

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src='https://github.com/Codibre.png' alt=""/>
        <ProfileSummary>
          <TextHeader>
            <h1>{org.login}</h1>
            <GitHubLink href={org.html_url}>
              github
              <FontAwesomeIcon icon={faUpRightFromSquare} />                
            </GitHubLink>
          </TextHeader>
          <p>{org.bio}</p>

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