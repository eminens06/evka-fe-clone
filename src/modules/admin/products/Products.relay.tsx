import { graphql } from 'relay-hooks';

graphql`
  query ProductsRelayGetProductsQuery($search: String) {
    allProducts(superSearch: $search) {
      edges {
        node {
          id
          name
          sku
          metaProducts {
            edges {
              node {
                materialName
                type
              }
            }
          }
        }
      }
    }
  }
`;

graphql`
  query ProductsRelayGetProductByIdQuery($id: ID!) {
    product(id: $id) {
      id
      name
      productName
      kdv
      metaProducts {
        edges {
          node {
            id
            categoryName
            materialName
            materialId
            metaType
            paintType
            type
          }
        }
      }

      isCollectable
      sku
      packageCount
      metalAttributes {
        profil
        paslanmaz
        lazer
        statikBoya
        parlakEskitmePrinc
        bukum
      }
      woodAttributes {
        mdfLam
        mdfkp
        papel
        laminant
        cumba
        balon
        torna
        digerKereste
        kayinKereste
        hamMdf
        masifPanel
        masifPanelFiyat
        kontplak
        kontplakFiyat
        lake
        cila
      }
      otherAttributes {
        mermer
        mermerIscilik
        mermerFarklari
        cam4mm
        cam10mm
        camAynaFazlalik
        kumas
      }
      other {
        aliminyumDokum
        silikonHirdavat
        sivama
        ambalajMalzeme
        aksesuar
        akrilikTipi
        akrilik
      }
      labor {
        kutu
        metal
        tasima
        toplama
        ahsapAtolyesi
        polisaj
        doseme
        akrilik
        ambalaj
      }
      isMonte
      width
      length
      height
      aluminiumPrice
      sivamaPrice
      silikonHirdavatPrice
      aksesuarPrice
      packingPrice
      metaInfo
      productImages {
        edges {
          node {
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
        }
      }
    }
  }
`;

graphql`
  query ProductsRelayGetMetaProductsQuery {
    allMetaProducts {
      edges {
        node {
          id
          categoryName
          materialName
          materialId
          metaType
          paintType
          type
        }
      }
    }
  }
`;

graphql`
  mutation ProductsRelayCreateProductMutation(
    $input: CreateProductMutationInput!
  ) {
    createProduct(input: $input) {
      product {
        id
      }
    }
  }
`;

graphql`
  mutation ProductsRelayUpdateProductMutation(
    $input: UpdateProductMutationInput!
  ) {
    updateProduct(input: $input) {
      product {
        id
      }
    }
  }
`;

graphql`
  query ProductsRelayGetMetaProductByIdQuery($id: ID!) {
    metaProduct(id: $id) {
      materialId
    }
  }
`;
