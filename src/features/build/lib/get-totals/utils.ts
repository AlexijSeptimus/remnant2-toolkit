import { perkItems } from '@/features/items/data/perkItems'
import { Item } from '@/features/items/types'
import { TraitItem } from '@/features/items/types/TraitItem'

import { BuildState } from '../../types'

export function getItemsByKey(
  buildState: BuildState,
  key:
    | 'armor'
    | 'armorPercent'
    | 'health'
    | 'healthPercent'
    | 'healthCap'
    | 'stamina'
    | 'staminaPercent'
    | 'weight'
    | 'weightPercent'
    | 'fireResistance'
    | 'fireResistancePercent'
    | 'blightResistance'
    | 'blightResistancePercent'
    | 'shockResistance'
    | 'shockResistancePercent'
    | 'bleedResistance'
    | 'bleedResistancePercent'
    | 'toxinResistance'
    | 'toxinResistancePercent'
    | 'weightThreshold',
) {
  const items: Item[] = []
  buildState.items.helm !== null &&
    buildState.items.helm[key] &&
    items.push(buildState.items.helm)

  buildState.items.torso !== null &&
    buildState.items.torso[key] &&
    items.push(buildState.items.torso)

  buildState.items.legs !== null &&
    buildState.items.legs[key] &&
    items.push(buildState.items.legs)

  buildState.items.gloves !== null &&
    buildState.items.gloves[key] &&
    items.push(buildState.items.gloves)

  buildState.items.amulet !== null &&
    buildState.items.amulet[key] &&
    items.push(buildState.items.amulet)

  buildState.items.relic !== null &&
    buildState.items.relic[key] &&
    items.push(buildState.items.relic)

  buildState.items.ring &&
    buildState.items.ring.forEach((ring) => {
      ring?.[key] && items.push(ring)
    })

  buildState.items.relicfragment &&
    buildState.items.relicfragment.forEach((fragment) => {
      fragment?.[key] && items.push(fragment)
    })

  buildState.items.weapon &&
    buildState.items.weapon.forEach((weapon) => {
      weapon?.[key] && items.push(weapon)
    })

  buildState.items.mutator &&
    buildState.items.mutator.forEach((mutator) => {
      mutator?.[key] && items.push(mutator)
    })

  buildState.items.mod &&
    buildState.items.mod.forEach((mod) => {
      mod?.[key] && items.push(mod)
    })

  buildState.items.trait &&
    buildState.items.trait.forEach((trait) => {
      trait?.[key] && items.push(trait)
    })

  buildState.items.concoction &&
    buildState.items.concoction.forEach((concoction) => {
      concoction?.[key] && items.push(concoction)
    })

  buildState.items.consumable &&
    buildState.items.consumable.forEach((consumable) => {
      consumable?.[key] && items.push(consumable)
    })

  // Check if any perks are equipped and add them to the items array
  const perksWithKey = perkItems.filter((item) => item[key])
  // Loop through each perk, and check if it has a linkedItem that is equipped
  // If it does, add it to the items array
  perksWithKey.forEach((perk) => {
    const linkedArcheytype = perk.linkedItems?.archetype?.name
    if (
      buildState.items.archetype[0]?.name === linkedArcheytype ||
      buildState.items.archetype[1]?.name === linkedArcheytype
    ) {
      items.push(perk)
    }
  })

  return items
}

export function getTraitItemsByKey(
  buildState: BuildState,
  key:
    | 'armorStep'
    | 'armorStepPercent'
    | 'elementalResistanceStep'
    | 'elementalResistanceStepPercent'
    | 'healthStep'
    | 'healthStepPercent'
    | 'staminaStep'
    | 'staminaStepPercent'
    | 'weightStep'
    | 'weightStepPercent'
    | 'weightThresholds',
) {
  const items: TraitItem[] = []
  buildState.items.trait &&
    buildState.items.trait.forEach((trait) => {
      trait?.[key] && items.push(trait)
    })
  return items
}