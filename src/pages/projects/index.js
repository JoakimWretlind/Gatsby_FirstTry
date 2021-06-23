import React from 'react'
import styled from 'styled-components';
import { Layout } from '../../components/Layout'

const Portfolio = styled.div`
    text-align: center;
`

const PortfolioH2 = styled.h2`
    font-size: 3em;
    margin-top: 80px;
`

const PortfolioH3 = styled.h3`
    font-size: 2em;
    font-weight: 400;
`

export default function Projects() {
    return (
        <Layout>
            <Portfolio>
                <PortfolioH2>Portfolio</PortfolioH2>
                <PortfolioH3>Projects & Websites I've created</PortfolioH3>
            </Portfolio>
        </Layout>
    )
}
