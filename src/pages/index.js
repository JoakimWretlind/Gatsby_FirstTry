import React from "react"
import { Layout } from "../components/Layout"
import styled from 'styled-components';
import { Link } from 'gatsby'

const HeaderSection = styled.section`
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    align-items: center;
`

const HeaderH2 = styled.h2`
  font-size: 4em;
`

const HeaderH3 = styled.h3`
  font-size: 3em;
    font-weight: 400;
    margin-bottom: 20px;
`

const HeaderBtn = styled(Link)`
  display: inline-block;
    background: #D42990;
    padding: 10px 16px;
    border-radius: 10px;
    margin-top: 20px;
    font-weight: 500;
`

export default function Home() {
  return (
    <Layout>
      <HeaderSection>
        <div>
          <HeaderH2>Design</HeaderH2>
          <HeaderH3>Develop & Deploy</HeaderH3>
          <p>UX designer & web developer based in Strömsholm</p>
          <HeaderBtn to="/projects">My Portfolio Projects</HeaderBtn>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
      </HeaderSection>
    </Layout>
  )
}
