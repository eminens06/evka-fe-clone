import { graphql } from 'relay-hooks';

graphql`
  mutation ParametersRelayCreateMutation($input: SystemParamMutationInput!) {
    systemParamUpdateCreateMutation(input: $input) {
      systemParam {
        id
      }
    }
  }
`;

graphql`
  query ParametersRelayCreateQuery {
    allSystemParams {
      edges {
        node {
          id
          metalParams {
            fiyat
            sarfKatsayisi
            fireKatsayisi
            paslanmazKatsayisi
            bukumFiyat
            statikBoyaKatsayisi
            eskitmeParlakPrincKatsayisi
          }
          woodParams {
            mdfFiyat
            mdfFireKatsayisi
            mdfLamFiyat
            ahsapKaplamaFiyat
            ahsapKaplamaFireKatsayisi
            ahsapAstarKaplamaFireKatsayisi
            ahsapAstarKaplamaFiyat
            astarBasimFiyati
            papelFiyat
            laminantFiyat
            cumbaFiyat
            cumbaFireKatsayisi
            cumbaIscilik
            balonFiyat
            tornaFiyatKatsayisi
            keresteFiyat
            keresteFireKatsayisi
            masifPanelFiyati
            digerKeresteFiyati
            kontraplakFiyati
            keresteKaplamaCilaFiyat
            lakeBoyaFiyat
          }
          laborParams {
            metal
            tasima
            toplama
            ahsap
            polisaj
            dosemeIscilikKatsayisi
            akrilik
            ambalaj
            mermer
          }
          otherWorkshopParams {
            mermerFiyat
            ozelMermerKatsayisi
            kumasFiyat
            camFiyat
            mm4Katsayisi
            mm10Katsayisi
            aynaKatsayisi
          }
          otherParams {
            kdv1
            kdv2
            kdv3
            silikon
            aksesuarFiyatKatsayisi
            akrilik
            ambalajMalzeme
            aliminyumDokumFiyatKatsayisi
            sivamaFiyatKatsayisi
            nakliyeFiyat
            fahisKatsayisi
            genelGiderler
            reklamGiderler
            barem1
            barem2
            barem3
            evkaBaremMultiplier
            tepeBaremMultiplier
            hepsiBaremMultiplier
            trendBaremMultiplier
            amazonBaremMultiplier
            vivenseBaremMultiplier
            }
        }
      }
    }
  }
`;
