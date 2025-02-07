export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-02'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skdVziPRSbxU2EKhYgARG00A51AJ4jgT1pf6D7FO31I1cX2dr69ZrrojyqByjDplyqwFvoRQ9NsoxQlj2PnDf5lCfBDBi628fe6jOoaF4FGThUmeUse4gLqEVTbGsitDQFp5dcglMevRcM1BQJLKWi60eKE9mDh5QcHng6h8hv58OVTaxve8" ,
   'Missing environment variable: SANITY_API_TOKEN'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
