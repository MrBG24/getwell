import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { isAuthenticated } from '../pages/Services/Auth';

const Container = styled.div`
    height : 60px;
    @media (max-width: 380px) {
      
     }
`
const Wrapper = styled.div`
padding: 10px 20px;
display : flex;
align-item:center;
justify-content : space-between;

}
`
// const Left  = styled.div`
// flex:1;
// display:flex;
// `
// const Language = styled.span`
// font-size:14px;
// cursor:pointer;
// `
// const SearchContainer =styled.div`
// border: 1px solid grey;
// display: Flex;
// Align-item:center;
// margin-left:5px;
// padding:5px;
// `
// const Input = styled.input`
// border:none;
// `

const Center  = styled.div`
flex:1;
@media (max-width: 380px) {
  padding : 0;
  align-item:left;
  justify-content : flex-start;
  font-size : 10px;
}
`
const Logo = styled.h1`
text-align : left;
@media (max-width: 380px) {
  text-align : left;
  color : teal;
}
`

const Right  = styled.div`
flex:1;
display : Flex;
Align-items : center;
justify-content : flex-end;

`

const MenuItem = styled.div`
font-size : 14px;
margin-left : 25px;
cursor : Pointer;
@media (max-width: 380px) {
  font-size : 15px;
}
`

const Navbar = (props) => {
  return (
    <Container>
      <Wrapper>
        {/* <Left> */}
          {/* <Language>EN</Language>  */}
          {/* <SearchContainer>
            <Input/>
            <Search style={{color:"red"}}/>
          </SearchContainer> */}
          {/* </Left> */}
       
        <Center><Logo>GETWELL</Logo></Center>
        <Right>
          {!isAuthenticated()? <Link to="/register" style={{ textDecoration: "none", color: "black" }}><MenuItem>REGISTER</MenuItem></Link>:null}
          {!isAuthenticated()? <Link to="/login" style={{ textDecoration: "none", color: "black" }}><MenuItem>SIGN IN</MenuItem></Link>:null}
          {isAuthenticated()? <Link to="#" onClick={props.logoutUser} style={{ textDecoration: "none", color: "black" }}><MenuItem>LOG OUT</MenuItem></Link>:null}
          {/* <MenuItem>
          <Badge badgeContent = {1} color="primary">
            <ShoppingCartOutlined />
          </Badge>
          </MenuItem> */}
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
