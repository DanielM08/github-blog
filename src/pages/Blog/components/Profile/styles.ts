import styled from "styled-components";

export const ProfileContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  margin-top: -5rem;

  background: ${props => props.theme["base-profile"]};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const ProfileContent = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;

  img {
    width: 148px;
    border-radius: 8px;
  }
`

export const ProfileSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    line-height: 1.6;
  }
`

export const TextHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    line-height: 1.3;
    color: ${props => props.theme["base-title"]};
  }
`

export const GitHubLink = styled.a`
  display: flex;
  gap: 0.5rem;
  
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${props => props.theme.blue}
`

export const GitInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 1.5rem;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    font-size: 16px;
    color: ${props => props.theme["base-subtitle"]};
  }
`

