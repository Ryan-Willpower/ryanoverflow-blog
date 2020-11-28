import { PageProps } from "gatsby";

interface Site {
  siteMetadata: {
    author?: {
      name?: string
      summary?: string
    }
    description?: string
    siteUrl?: string
    social?: {
      linkedin?: string
    }
    title?: string
  }
}

interface StrapiArticle {
  strapiId?: number
  Title?: string
  Description?: string
  PublishAt?: string
  Content?: string
  url?: string
}

interface Metadata {
  name: string
  content: string
}

// Bio.tsx
export declare interface IBio {
  avatar: {
    childImageSharp?: {
      fixed?: GatsbyImageFixedProps
    }
  }
  site: Site
}

// layout.tsx
interface ILayoutProps {
  location: Location
  title: string
}

// seo.tsx
interface IheaderSEO {
  description?: string
  lang?: string
  meta?: Metadata[]
  title: string
}

interface ISEOConfig {
  site: Site
}

// index.tsx
interface IBlogIndexPageQuery {
  site: Site
  allStrapiArticle: {
    nodes: StrapiArticle[]
  }
}

// blog-post.tsx
interface IBlogPostTemplatePageQuery {
  site: Site
  strapiArticle: StrapiArticle
}
