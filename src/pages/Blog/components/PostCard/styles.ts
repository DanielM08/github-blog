import styled from "styled-components";

export const PostCardContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  
  max-width: 416px;
  width: 100%;

  padding: 2rem;

  background: ${props => props.theme["base-post"]};
  border-radius: 10px;
`

export const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${props => props.theme["base-span"]};
  }
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    color: ${props => props.theme["base-title"]};
    font-size: 1.2rem;
    line-height: 1.6;
    width: 283px;
  }

  span {
    color: ${props => props.theme["base-span"]};
    font-size: 0.875rem;
    line-height: 1.6;
  }
`