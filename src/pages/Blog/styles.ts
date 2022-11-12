import styled from 'styled-components'

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
`

export const SearchContent = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 4rem auto 0;

  margin-bottom: 3rem;
`

export const SearchHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  strong {
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${props => props.theme['base-subtitle']};  
  }

  span {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${props => props.theme['base-span']};
  }
`

export const SearchBar = styled.input`
  box-sizing: border-box; 

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0.75rem 1rem;
  margin-top: 0.75rem;

  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-border']};
  border-radius: 6px;

  color: ${props => props.theme['base-label']};
  line-height: 1.6;
`

export const PostList = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`