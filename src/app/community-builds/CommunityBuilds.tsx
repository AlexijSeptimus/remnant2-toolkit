'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import { getCommunityBuilds } from '@/features/build/actions/getCommunityBuilds'
import { BuildCard } from '@/features/build/components/BuildCard'
import { ItemList } from '@/features/build/components/ItemList'
import { useBuildActions } from '@/features/build/hooks/useBuildActions'
import { useBuildListState } from '@/features/build/hooks/useBuildListState'
import { dbBuildToBuildState } from '@/features/build/lib/dbBuildToBuildState'
import { isErrorResponse } from '@/features/error-handling/isErrorResponse'
import { BuildListSecondaryFilters } from '@/features/filters/components/BuildListSecondaryFilters'
import { useBuildListSecondaryFilters } from '@/features/filters/hooks/useBuildListSecondaryFilters'
import { parseBuildListFilters } from '@/features/filters/lib/parseBuildListFilters'
import { usePagination } from '@/features/pagination/usePagination'
import { Skeleton } from '@/features/ui/Skeleton'

interface Props {
  itemsPerPage?: number
}

export function CommunityBuildList({ itemsPerPage = 8 }: Props) {
  const searchParams = useSearchParams()
  const [buildListFilters, setBuildListFilters] = useState(
    parseBuildListFilters(searchParams),
  )
  useEffect(() => {
    setBuildListFilters(parseBuildListFilters(searchParams))
  }, [searchParams])

  const { buildListState, setBuildListState } = useBuildListState()
  const { builds, totalBuildCount, isLoading } = buildListState

  const {
    orderBy,
    orderByOptions,
    timeRange,
    timeRangeOptions,
    handleOrderByChange,
    handleTimeRangeChange,
  } = useBuildListSecondaryFilters()

  const {
    currentPage,
    firstVisibleItemNumber,
    lastVisibleItemNumber,
    pageNumbers,
    totalPages,
    handleSpecificPageClick,
    handleNextPageClick,
    handlePreviousPageClick,
  } = usePagination({
    totalItemCount: totalBuildCount,
    itemsPerPage,
  })

  const { handleReportBuild } = useBuildActions()

  // Fetch data
  useEffect(() => {
    const getItemsAsync = async () => {
      setBuildListState((prevState) => ({ ...prevState, isLoading: true }))
      const response = await getCommunityBuilds({
        itemsPerPage,
        pageNumber: currentPage,
        timeRange,
        orderBy,
        buildListFilters,
      })
      setBuildListState((prevState) => ({
        ...prevState,
        isLoading: false,
        builds: response.items,
        totalBuildCount: response.totalItemCount,
      }))
    }
    getItemsAsync()
  }, [
    buildListFilters,
    currentPage,
    itemsPerPage,
    orderBy,
    timeRange,
    setBuildListState,
  ])

  async function onReportBuild(buildId: string) {
    const reportedBuild = builds.find((build) => build.id === buildId)

    if (!reportedBuild) {
      console.error(`Could not find build with id ${buildId}, report not saved`)
      return
    }
    const newReported = !reportedBuild.reported
    const response = await handleReportBuild(
      dbBuildToBuildState(reportedBuild),
      newReported,
    )

    if (!response || isErrorResponse(response)) {
      console.error(response?.errors)
      toast.error(response?.errors?.[0])
    } else {
      toast.success(response.message)
      const newBuilds = builds.map((build) => {
        if (build.id === buildId) {
          build.reported = newReported
        }
        return build
      })
      setBuildListState((prevState) => ({ ...prevState, builds: newBuilds }))
    }
  }

  if (!buildListFilters) {
    return <Skeleton className="min-h-[1100px] w-full" />
  }

  return (
    <>
      <ItemList
        label="Community Builds"
        currentPage={currentPage}
        isLoading={isLoading}
        pageNumbers={pageNumbers}
        totalItems={totalBuildCount}
        totalPages={totalPages}
        firstVisibleItemNumber={firstVisibleItemNumber}
        lastVisibleItemNumber={lastVisibleItemNumber}
        onPreviousPage={handlePreviousPageClick}
        onNextPage={handleNextPageClick}
        onSpecificPage={handleSpecificPageClick}
        headerActions={
          <BuildListSecondaryFilters
            orderBy={orderBy}
            orderByOptions={orderByOptions}
            onOrderByChange={handleOrderByChange}
            timeRange={timeRange}
            timeRangeOptions={timeRangeOptions}
            onTimeRangeChange={handleTimeRangeChange}
          />
        }
      >
        <ul
          role="list"
          className="my-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {builds.map((build) => (
            <BuildCard
              key={build.id}
              build={build}
              isLoading={isLoading}
              onReportBuild={onReportBuild}
              footerActions={
                <div className="flex items-center justify-end gap-2 p-2 text-sm">
                  <Link
                    href={`/builder/${build.id}`}
                    className="relative inline-flex items-center justify-center gap-x-3 rounded-br-lg border border-transparent p-4 text-sm font-semibold text-green-500 hover:text-green-700 hover:underline"
                  >
                    View Build
                  </Link>
                </div>
              }
            />
          ))}
        </ul>
      </ItemList>
    </>
  )
}
