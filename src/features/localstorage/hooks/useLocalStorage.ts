import { GenericItem } from '@/features/items/types/GenericItem'
import { useLocalStorage as useLS } from 'usehooks-ts'

// The type of the database in LocalStorage
interface LocalStorage {
  tracker: {
    discoveredItemIds: string[]
    collapsedCategories: Array<GenericItem['category']>
  }
}

const initialValue: LocalStorage = {
  tracker: {
    discoveredItemIds: [],
    collapsedCategories: [],
  },
}

export const useLocalStorage = () => {
  const [itemTrackerStorage, setItemTrackerStorage] = useLS<
    LocalStorage['tracker']
  >('item-tracker', initialValue.tracker)

  function setDiscoveredItemIds(ids: string[]) {
    setItemTrackerStorage({ ...itemTrackerStorage, discoveredItemIds: ids })
  }

  return {
    itemTrackerStorage,
    setItemTrackerStorage,
    setDiscoveredItemIds,
  }
}