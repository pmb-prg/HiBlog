import { gql } from "@apollo/client";

const GET_BLOGS_INFO =  gql`
    query{
        posts {
            author {
            name
            avator {
                url
            }
            }
            title
            slug
            id
            coverPhoto {
            url
            }
  }
    }
`

const GET_AUTHORS_INFO =  gql ` 
    query {
        authors {
            id,
            slug,
            name,
            avator {
                url
            }
        }
    }
`
const GET_AUTHOR_INFO = gql `
    query getAuthorInfo($slug: String!) {
            author(where: {slug: $slug}) {
        posts {
        ... on Post {
            id
            coverPhoto {
            url
            }
            slug
            title
            author {
                name
                avator {
                    url
                }
            }
        }
        }
        avator {
        url
        }
        id
        name
        field
        description {
        html
        }
    }
    }
`

const GET_POST_INFO = gql ` 
    query getPost($slug: String!){
        post(where: { slug: $slug }) {
    slug
    title
    content {
      html
    }
    coverPhoto {
      url
    }
    author {
      name
      slug
      field
      avator {
        url
      }
    }
  }
    }
`

const GET_POST_COMMENTS = gql `
    query getPostComments($slug: String!) {
        comments(where: {post: {Post: {slug: $slug}}}) {
            id
            name
            text
        }
    }
`

export  {GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_POST_INFO, GET_POST_COMMENTS};