import React from "react"
import { graphql, PageProps } from "gatsby"
import showdown from "showdown"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { IBlogPostTemplatePageQuery } from "../type"

const BlogPostTemplate: React.FC<PageProps<
  IBlogPostTemplatePageQuery,
  object,
  unknown
>> = ({ data, location }) => {
  const post = data.strapiArticle
  const siteTitle = data.site.siteMetadata?.title || `Post`

  console.log(post)

  const mdConverter = new showdown.Converter()
  const html = mdConverter.makeHtml(post.Content || "")

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.Title || "unknown"}
        description={post.Description || ""}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.Title}</h1>
          <p>{post.published_at}</p>
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      Title
      Description
      published_at(formatString: "DD MMMM YYYY")
      Content
    }
  }
`
