import { ReadonlyURLSearchParams } from 'next/navigation'

import { ItemCategory } from '@/features/build/types'
import { remnantItemCategories } from '@/features/items/data/remnantItems'
import { ReleaseKey } from '@/features/items/types'
import { capitalize } from '@/lib/capitalize'

import { DEFAULT_ITEM_LOOKUP_FILTERS } from '../components/ItemLookupFilters'
import { DEFAULT_COLLECTION_FILTERS } from '../components/parts/CollectedItemFilters'
import { ItemLookupFilterFields } from '../types'

export function parseItemLookupFilters(
  searchParams: ReadonlyURLSearchParams,
): ItemLookupFilterFields {
  const params = new URLSearchParams(searchParams)
  let collection = params.get('collection')
  let categories = params.get('categories')
  let releases = params.get('releases')
  let searchText = params.get('searchText')

  // check if categories are valid
  if (categories) {
    const allCategories: ItemCategory[] = remnantItemCategories
    const categoriesArray = categories.split(',')
    categoriesArray.forEach((category) => {
      if (!allCategories.includes(category as ItemCategory)) {
        categories = DEFAULT_ITEM_LOOKUP_FILTERS['itemCategories'].join(',')
      }
    })
  } else {
    categories = DEFAULT_ITEM_LOOKUP_FILTERS['itemCategories'].join(',')
  }

  // check if collection is valid
  if (collection) {
    if (
      !DEFAULT_COLLECTION_FILTERS.includes(capitalize(collection.toLowerCase()))
    ) {
      collection = DEFAULT_ITEM_LOOKUP_FILTERS['collectionKeys'].join(',')
    }
  } else {
    collection = DEFAULT_ITEM_LOOKUP_FILTERS['collectionKeys'].join(',')
  }

  // check if releases are valid
  if (releases) {
    const allReleases: ReleaseKey[] =
      DEFAULT_ITEM_LOOKUP_FILTERS['selectedReleases']
    const releasesArray = releases.split(',')
    releasesArray.forEach((release) => {
      if (!allReleases.includes(release as ReleaseKey)) {
        releases = DEFAULT_ITEM_LOOKUP_FILTERS['selectedReleases'].join(',')
      }
    })
  }

  return {
    collectionKeys: collection ? collection.split(',') : [],
    itemCategories: categories ? (categories.split(',') as ItemCategory[]) : [],
    searchText: searchText || DEFAULT_ITEM_LOOKUP_FILTERS['searchText'],
    selectedReleases: releases
      ? (releases.split(',') as ReleaseKey[])
      : DEFAULT_ITEM_LOOKUP_FILTERS['selectedReleases'],
  } satisfies ItemLookupFilterFields
}