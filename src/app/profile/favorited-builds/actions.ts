'use server'

import { ExtendedBuild } from '@/app/(types)'
import { prisma } from '@/app/(lib)/db'
import { getServerSession } from '@/app/(lib)/auth'

export async function getBuilds(
  pageSize: number,
  pageNumber: number,
): Promise<{
  builds: ExtendedBuild[]
  currentPage: number
  totalBuilds: number
}> {
  const session = await getServerSession()

  const userId = session?.user?.id

  // find all builds that the user has favorited but are not created
  // by the user
  const builds = await prisma.build.findMany({
    where: {
      BuildVotes: {
        some: {
          userId,
        },
      },
      createdById: {
        not: userId,
      },
    },
    include: {
      createdBy: true,
      BuildVotes: true,
      BuildReports: true,
    },
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
  })

  // get the total number of builds that match the conditions
  const totalBuilds = await prisma.build.count({
    where: {
      BuildVotes: {
        some: {
          userId,
        },
      },
      createdById: {
        not: userId,
      },
    },
  })

  if (!builds) return { builds: [], totalBuilds: 0, currentPage: 1 }

  const buildsWithExtraFields = builds.map((build) => ({
    id: build.id,
    name: build.name,
    description: build.description ?? '',
    isPublic: build.isPublic,
    createdAt: build.createdAt,
    createdById: build.createdById,
    videoUrl: build.videoUrl ?? '',
    helm: build.helm,
    torso: build.torso,
    gloves: build.gloves,
    legs: build.legs,
    amulet: build.amulet,
    ring: build.ring,
    relic: build.relic,
    relicfragment: build.relicfragment,
    archtype: build.archtype,
    skill: build.skill,
    weapon: build.weapon,
    mod: build.mod,
    mutator: build.mutator,
    updatedAt: build.updatedAt,
    concoction: build.concoction,
    consumable: build.consumable,
    trait: build.trait,
    createdByDisplayName: build.createdBy.displayName ?? '',
    totalUpvotes: build.BuildVotes.length,
    upvoted: build.BuildVotes.some((vote) => vote.userId === userId), // Check if the user upvoted the build
    reported: build.BuildReports.some((report) => report.userId === userId), // Check if the user reported the build
  })) satisfies ExtendedBuild[]

  return { builds: buildsWithExtraFields, totalBuilds, currentPage: pageNumber }
}
