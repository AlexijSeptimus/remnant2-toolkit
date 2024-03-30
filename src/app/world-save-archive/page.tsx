import Link from 'next/link'
import { Suspense } from 'react'

import { SaveItemList } from '@/app/world-save-archive/(components)/SaveItemList'
import { SaveLookupFilters } from '@/app/world-save-archive/(components)/SaveLookupFilters'
import { NAV_ITEMS } from '@/features/navigation/constants'
import { PageHeader } from '@/features/ui/PageHeader'
import { Skeleton } from '@/features/ui/Skeleton'

export default function Page() {
  return (
    <>
      <PageHeader
        title="World Save Archive"
        subtitle={NAV_ITEMS.worldSaveArchive.description}
      />
      <div className="flex max-w-xl flex-col items-start justify-center">
        <p className="mb-4 text-lg font-bold text-white">
          Before you start, it is important to understand how to back up your
          own world saves, and how to install the world saves provided by the
          Remnant 2 Toolkit.{' '}
          <Link
            href="/world-save-archive/instructions"
            className="text-accent1-500 underline hover:text-accent1-300"
          >
            Please click here for complete instructions.
          </Link>
        </p>
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="w-full max-w-xl">
          <Suspense fallback={<Skeleton className="h-[497px] w-full" />}>
            <SaveLookupFilters />
          </Suspense>
        </div>

        <div className="mt-12 flex w-full items-center justify-center">
          <Suspense fallback={<Skeleton className="h-[500px] w-full" />}>
            <SaveItemList />
          </Suspense>
        </div>
      </div>
    </>
  )
}