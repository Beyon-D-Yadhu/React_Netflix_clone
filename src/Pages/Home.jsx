import React from 'react'
import Index from '../components/Index'
import Row from '../components/Row'
import requests from '../Request'

function Home() {
  return (
    <div>
        <Index />
        <Row rowId='1' title='Action' fetchURL={requests.Action} />
        <Row rowId='2' title='Adventure' fetchURL={requests.Adventure} />
        <Row rowId='3' title='Animation' fetchURL={requests.Animation} />
        <Row rowId='4' title='Comedy' fetchURL={requests.Comedy} />

    </div>
    )
}

export default Home