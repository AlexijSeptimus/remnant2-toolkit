import { BaseButton } from '@repo/ui/base/button'
import { cn } from '@repo/ui/classnames'

interface Props<T> {
  areFiltersApplied: boolean
  filters: T
  onClick: (newData: T) => void
}

export function ApplyFiltersButton<T>({
  areFiltersApplied,
  filters,
  onClick,
}: Props<T>) {
  return (
    <BaseButton
      color="cyan"
      className={cn(!areFiltersApplied && 'animate-pulse ')}
      aria-label="Apply Filters"
      onClick={() => onClick(filters)}
    >
      Apply Filters
    </BaseButton>
  )
}
