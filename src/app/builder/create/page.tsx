'use client'

import { useRef, useState } from 'react'

import { ArmorCalculatorButton } from '@/app/(components)/builder-buttons/armor-calculator-button'
import { DetailedViewButton } from '@/app/(components)/builder-buttons/detailed-view-button'
import { GenerateBuildImageButton } from '@/app/(components)/builder-buttons/generate-build-image'
import { ItemSuggestionsButton } from '@/app/(components)/builder-buttons/item-suggestions-button'
import { RandomBuildButton } from '@/app/(components)/builder-buttons/random-build-button'
import { SaveBuildButton } from '@/app/(components)/builder-buttons/save-build-button'
import { BuilderContainer } from '@/features/build/components/builder/BuilderContainer'
import { ArmorSuggestionsDialog } from '@/features/build/components/dialogs/ArmorSuggestionsDialog'
import { DetailedBuildDialog } from '@/features/build/components/dialogs/DetailedBuildDialog'
import { ImageDownloadInfo } from '@/features/build/components/dialogs/ImageDownloadInfo'
import { ItemTagSuggestionsDialog } from '@/features/build/components/dialogs/ItemTagSuggestionsDialog'
import { INITIAL_BUILD_STATE } from '@/features/build/constants'
import { useBuildActions } from '@/features/build/hooks/useBuildActions'
import { useDBBuildState } from '@/features/build/hooks/useDBBuildState'
import { BuildState } from '@/features/build/types'
import { PageHeader } from '@/features/ui/PageHeader'

export default function Page() {
  const [detailedBuildDialogOpen, setDetailedBuildDialogOpen] = useState(false)

  const { dbBuildState, setNewBuildState, updateDBBuildState } =
    useDBBuildState(INITIAL_BUILD_STATE)

  const {
    isScreenshotMode,
    showControls,
    imageDownloadInfo,
    imageExportLoading,
    handleClearImageDownloadInfo,
    handleImageExport,
    handleRandomBuild,
  } = useBuildActions()

  const buildContainerRef = useRef<HTMLDivElement>(null)

  const [showArmorCalculator, setShowArmorCalculator] = useState(false)
  const [showItemSuggestions, setShowItemSuggestions] = useState(false)

  function handleApplySuggestions(newBuildState: BuildState) {
    setNewBuildState(newBuildState)
    setShowArmorCalculator(false)
    setShowItemSuggestions(false)
  }

  return (
    <div className="flex w-full flex-col items-center">
      <DetailedBuildDialog
        buildState={dbBuildState}
        open={detailedBuildDialogOpen}
        onClose={() => setDetailedBuildDialogOpen(false)}
      />

      <ImageDownloadInfo
        onClose={handleClearImageDownloadInfo}
        imageDownloadInfo={imageDownloadInfo}
      />

      <PageHeader
        title="Remnant 2 Build Tool"
        subtitle="Create your builds and share them with your friends and the community."
      />

      <ArmorSuggestionsDialog
        buildState={dbBuildState}
        open={showArmorCalculator}
        onClose={() => setShowArmorCalculator(false)}
        onApplySuggestions={handleApplySuggestions}
        key={`${JSON.stringify(dbBuildState)}-armor-suggestions`}
      />

      <ItemTagSuggestionsDialog
        buildState={dbBuildState}
        open={showItemSuggestions}
        onClose={() => setShowItemSuggestions(false)}
        onApplySuggestions={handleApplySuggestions}
        key={`${JSON.stringify(dbBuildState)}-item-suggestions`}
      />

      <BuilderContainer
        buildContainerRef={buildContainerRef}
        buildState={dbBuildState}
        isScreenshotMode={isScreenshotMode}
        isEditable={true}
        onUpdateBuildState={updateDBBuildState}
        showControls={showControls}
        showCreatedBy={false}
        builderActions={
          <>
            <SaveBuildButton buildState={dbBuildState} editMode={false} />

            <GenerateBuildImageButton
              imageExportLoading={imageExportLoading}
              onClick={() =>
                handleImageExport(
                  buildContainerRef.current,
                  `${dbBuildState.name}`,
                )
              }
            />

            <ArmorCalculatorButton
              onClick={() => setShowArmorCalculator(true)}
            />

            <ItemSuggestionsButton
              onClick={() => setShowItemSuggestions(true)}
            />

            <DetailedViewButton
              onClick={() => setDetailedBuildDialogOpen(true)}
            />

            <RandomBuildButton
              onClick={() => {
                const randomBuild = handleRandomBuild()
                setNewBuildState(randomBuild)
              }}
            />
          </>
        }
      />
    </div>
  )
}
