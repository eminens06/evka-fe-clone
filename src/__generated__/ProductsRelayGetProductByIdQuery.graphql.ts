/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MetaProductCategoryName = "AY" | "CA" | "CT" | "DF" | "TB" | "%future added value";
export type MetaProductMetaType = "DF" | "F" | "G" | "M" | "MT" | "WD" | "%future added value";
export type MetaProductPaintType = "DF" | "MT" | "WD" | "%future added value";
export type ProductsRelayGetProductByIdQueryVariables = {
    id: string;
};
export type ProductsRelayGetProductByIdQueryResponse = {
    readonly product: {
        readonly id: string;
        readonly name: string;
        readonly productName: string;
        readonly metaProducts: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                    readonly categoryName: MetaProductCategoryName;
                    readonly materialName: string;
                    readonly materialId: number | null;
                    readonly metaType: MetaProductMetaType;
                    readonly paintType: MetaProductPaintType;
                    readonly type: string | null;
                } | null;
            } | null>;
        };
        readonly isCollectable: boolean;
        readonly sku: string | null;
        readonly packageCount: number;
        readonly metalAttributes: {
            readonly profil: number | null;
            readonly paslanmaz: number | null;
            readonly lazer: number | null;
            readonly statikBoya: number | null;
            readonly bukum: number | null;
        } | null;
        readonly woodAttributes: {
            readonly mdfLam: number | null;
            readonly mdfkp: number | null;
            readonly papel: number | null;
            readonly laminant: number | null;
            readonly cumba: number | null;
            readonly balon: number | null;
            readonly torna: number | null;
            readonly meseKereste: number | null;
            readonly kayinKereste: number | null;
            readonly hamMdf: number | null;
            readonly masifPanel: number | null;
            readonly kontplak: number | null;
            readonly lake: number | null;
            readonly cila: number | null;
        } | null;
        readonly otherAttributes: {
            readonly mermer: number | null;
            readonly mermerIscilik: number | null;
            readonly mermerFarklari: number | null;
            readonly cam4mm: number | null;
            readonly cam10mm: number | null;
            readonly camAynaFazlalik: number | null;
            readonly kumas: number | null;
        } | null;
        readonly other: {
            readonly aliminyumDokum: number | null;
            readonly silikonHirdavat: number | null;
            readonly sivama: number | null;
            readonly ambalajMalzeme: number | null;
            readonly aksesuar: number | null;
            readonly akrilikTipi: string | null;
        } | null;
        readonly labor: {
            readonly metal: number | null;
            readonly tasima: number | null;
            readonly toplama: number | null;
            readonly ahsapAtolyesi: number | null;
            readonly polisaj: number | null;
            readonly doseme: number | null;
            readonly akrilik: number | null;
            readonly ambalaj: number | null;
        } | null;
        readonly isMonte: boolean;
        readonly width: number | null;
        readonly length: number | null;
        readonly height: number | null;
        readonly aluminiumPrice: number;
        readonly sivamaPrice: number;
        readonly silikonHirdavatPrice: number;
        readonly aksesuarPrice: number;
        readonly packingPrice: number;
        readonly metaInfo: unknown | null;
    } | null;
};
export type ProductsRelayGetProductByIdQuery = {
    readonly response: ProductsRelayGetProductByIdQueryResponse;
    readonly variables: ProductsRelayGetProductByIdQueryVariables;
};



/*
query ProductsRelayGetProductByIdQuery(
  $id: ID!
) {
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
      meseKereste
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "ProductNode",
    "kind": "LinkedField",
    "name": "product",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "productName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MetaProductNodeConnection",
        "kind": "LinkedField",
        "name": "metaProducts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MetaProductNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MetaProductNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "categoryName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "materialName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "materialId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "metaType",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "paintType",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isCollectable",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sku",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "packageCount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MetalAttributeFieldNode",
        "kind": "LinkedField",
        "name": "metalAttributes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "profil",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "paslanmaz",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lazer",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "statikBoya",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bukum",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "WoodAttributeFieldNode",
        "kind": "LinkedField",
        "name": "woodAttributes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mdfLam",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mdfkp",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "papel",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "laminant",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cumba",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "balon",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "torna",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "meseKereste",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "kayinKereste",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hamMdf",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "masifPanel",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "kontplak",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lake",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cila",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "OtherAttributeFieldNode",
        "kind": "LinkedField",
        "name": "otherAttributes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mermer",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mermerIscilik",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mermerFarklari",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cam4mm",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cam10mm",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "camAynaFazlalik",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "kumas",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "OtherFieldNode",
        "kind": "LinkedField",
        "name": "other",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "aliminyumDokum",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "silikonHirdavat",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sivama",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ambalajMalzeme",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "aksesuar",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "akrilikTipi",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "LaborFieldNode",
        "kind": "LinkedField",
        "name": "labor",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "metal",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tasima",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "toplama",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ahsapAtolyesi",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "polisaj",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "doseme",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "akrilik",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ambalaj",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isMonte",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "width",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "length",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "height",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "aluminiumPrice",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sivamaPrice",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "silikonHirdavatPrice",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "aksesuarPrice",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "packingPrice",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "metaInfo",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductsRelayGetProductByIdQuery",
    "selections": (v2/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProductsRelayGetProductByIdQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ProductsRelayGetProductByIdQuery",
    "operationKind": "query",
    "text": "query ProductsRelayGetProductByIdQuery(\n  $id: ID!\n) {\n  product(id: $id) {\n    id\n    name\n    productName\n    metaProducts {\n      edges {\n        node {\n          id\n          categoryName\n          materialName\n          materialId\n          metaType\n          paintType\n          type\n        }\n      }\n    }\n    isCollectable\n    sku\n    packageCount\n    metalAttributes {\n      profil\n      paslanmaz\n      lazer\n      statikBoya\n      bukum\n    }\n    woodAttributes {\n      mdfLam\n      mdfkp\n      papel\n      laminant\n      cumba\n      balon\n      torna\n      meseKereste\n      kayinKereste\n      hamMdf\n      masifPanel\n      kontplak\n      lake\n      cila\n    }\n    otherAttributes {\n      mermer\n      mermerIscilik\n      mermerFarklari\n      cam4mm\n      cam10mm\n      camAynaFazlalik\n      kumas\n    }\n    other {\n      aliminyumDokum\n      silikonHirdavat\n      sivama\n      ambalajMalzeme\n      aksesuar\n      akrilikTipi\n    }\n    labor {\n      metal\n      tasima\n      toplama\n      ahsapAtolyesi\n      polisaj\n      doseme\n      akrilik\n      ambalaj\n    }\n    isMonte\n    width\n    length\n    height\n    aluminiumPrice\n    sivamaPrice\n    silikonHirdavatPrice\n    aksesuarPrice\n    packingPrice\n    metaInfo\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b2443c91c65ffca052d93f6d5d60f937';
export default node;
