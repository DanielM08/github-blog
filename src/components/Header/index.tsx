import {
  Effect1,
  Effect2,
  HeaderContainer,
  HeaderContent,
} from './styles'

import blogLogo from '../../assets/blog-logo.svg'
import effect1 from '../../assets/1-effect.svg'
import effect2 from '../../assets/2-effect.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Effect1 src={effect1}/>
        <img src={blogLogo}/>
        <Effect2 src={effect2}/>
      </HeaderContent>
    </HeaderContainer>
  )
}
