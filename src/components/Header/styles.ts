import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme['base-profile']};
  height: 296px;
`

export const HeaderContent = styled.div`
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Effect1 = styled.img`
  margin-top: 4.3rem;
  max-width: 406px;
`

export const Effect2 = styled.img`
  margin-top: 2rem;
  max-width: 371;
`
