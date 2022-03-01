import styled from 'styled-components'

export const SearchWrapper = styled.div`
  padding: 0.1rem 0.1rem 0.1rem 0.1rem;
  background: ${(props) => props.theme.searchBg};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  position: relative;
  display: flex;
  align-items: center;
  min-width: 300px;
`

export const InputWrapper = styled.input`
  padding: 0.8rem 0.8rem 0.8rem 3rem;
  background: ${(props) => props.theme.searchBg};
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
`
