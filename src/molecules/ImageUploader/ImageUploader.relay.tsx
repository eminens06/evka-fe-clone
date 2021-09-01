import { graphql } from 'relay-hooks';

graphql`
  mutation ImageUploaderRelayCreateImageMutation(
    $input: CreateImageGroupMutationInput!
  ) {
    createImageGroup(input: $input) {
      imageGroup {
        id
        name
        processed
        tags
        images {
          edges {
            node {
              id
              name
              height
              width
              file {
                url
              }
              externalUrl
            }
          }
        }
      }
    }
  }
`;

graphql`
  fragment ImageUploaderFragment on ImageGroupNode {
    id
    name
    processed
    tags
    images(orderBy: "width") {
      edges {
        node {
          id
          name
          height
          width
          file {
            url
          }
          externalUrl
        }
      }
    }
  }
`;
