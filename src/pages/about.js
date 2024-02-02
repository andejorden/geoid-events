import * as React from "react"
import Layout from "./layout"

const aboutPage = () => {
    return (
        <Layout pageTitle="About Me!">
            <p>I'm glad to inform You about this site...</p>
        </Layout>
    )
}

export default aboutPage
export const Head = () => <title>About Me!</title>