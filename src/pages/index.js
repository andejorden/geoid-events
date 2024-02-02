import * as React from "react"
import Layout from "./layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is a paragraph...</p>
    </Layout>
  )
}

export default IndexPage
export const Head = () => <title>Home Page</title>