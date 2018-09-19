import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { secondary, fontColor } from '../style_variables'

class App extends Component {
  state = {
    data: {}
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const res = await axios.get('/api/waifus/')
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    return (
      <Wrapper>
        <Container>
          <h1>Enter a new entry!</h1>
          <form>
            <input type='text' name='name' />
          </form>
        </Container>
      </Wrapper>
    )
  }
}

// <=== Styling ===> //

const Wrapper = styled.div`
  text-align: center;
  background: ${secondary};
  color: ${fontColor};
  width: 100vw;
  height: 100vh;
  font-size: 1.6rem;
`

const Container = styled.div`
  margin: 0 8rem;
  padding: 4rem 0;

  h1 {
    padding: 2rem 0;
  }

  form {
  }
`

export default App
