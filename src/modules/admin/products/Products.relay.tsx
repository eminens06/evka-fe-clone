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
        kontplak
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
      }
      labor {
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
