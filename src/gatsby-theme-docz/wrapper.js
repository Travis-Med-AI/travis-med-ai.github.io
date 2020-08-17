import * as React from 'react'
import { Helmet } from 'react-helmet-async'

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Travis Med AI</title>
        <link rel="icon"
            type="image/svg"
              href="https://raw.githubusercontent.com/Travis-Med-AI/med-ai/jacob/logo.svg"
        />
    </Helmet>
    {children}
</React.Fragment>
export default Wrapper