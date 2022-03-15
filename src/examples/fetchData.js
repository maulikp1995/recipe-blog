import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
query FirstQuery {
  site {
    info: siteMetadata {
      description
      author
      person {
        name
        age
      }
      title
      complexData {
        age
        name
      }
      simpleData
    }
  }
}
`

const FetchData = () => {
  const { site: { info: { title } } } = useStaticQuery(getData);

  return (
    <div>
      {/* <h1>Name: {data.site.info.person.name}</h1> */}
      <h2>site title is : {title}</h2>
    </div>
  )
}

export default FetchData