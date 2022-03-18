import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';

const TagTemplate = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <main className='page'>
        <h2>tag name</h2>
        <div className='tag-recipes'>
          <RecipesList recipes={recipes} />
        </div>
      </main>

    </Layout>
  )
}

export const query = graphql`
 query GetRecipeByTag($tag:String) {
  allContentfulRecipe(
    sort: {fields: title, order: ASC}
    filter: {content: {tags: {eq: $tag}}}
  ) {
    nodes {
      id
      title
      prepTime
      cookTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
}
`
export default TagTemplate