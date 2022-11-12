import styled from 'styled-components'

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
`

export const PostContent = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 4rem auto 0;
  padding: 1.5rem;

  p {
    line-height: 1.6;
    color: ${props => props.theme['base-text']};
  }
`