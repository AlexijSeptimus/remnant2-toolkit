import { MutatorItem } from './types/MutatorItem'

export const mutatorItems: MutatorItem[] = [
  {
    category: 'mutator',
    name: 'Bandit',
    type: 'gun',
    imagePath: '/mutator/bandit.png',
    id: 'f9tqot',
    dlc: 'base',
    tags: ['Ammo Reserves', 'Fire Rate'],
    description: `On hit, grants a 10-[30]% chance to return spent Ammo directly into the magazine of this weapon.`,
    maxLevelBonus: `When Ammo is returned to this weapon, it gains 10% increased Fire Rate for 3s. Duration can increase up to 10s.`,
    wikiLinks: [`https://remnant.wiki/Bandit`],
  },
  {
    category: 'mutator',
    name: 'Battle Mage',
    type: 'melee',
    imagePath: '/mutator/battle_mage.png',
    dlc: 'dlc2',
    id: 'y5hY8J',
    tags: ['Mod Power', 'Melee Damage'],
    description: `Skill activation grants Mage Strike for 10s increasing Melee Mod Generation by 25%.`,
    maxLevelBonus: `Level 10: Mage Strike also increases Melee Damage by 15%.`,
    wikiLinks: [`https://remnant.wiki/Battle_Mage`],
  },
  {
    category: 'mutator',
    name: 'Battery',
    type: 'gun',
    imagePath: '/mutator/battery.png',
    id: 'n5zhws',
    dlc: 'base',
    tags: ['Weakspot Damage'],
    description: `Increases Weakspot Damage by 10% for every 400 Mod Power spent by the attached weapon's mod. Max 3 stacks. Lasts 10s.`,
    maxLevelBonus: `At Max Stacks, gain 10% Critical Chance on Weakspot Hits.`,
    wikiLinks: [`https://remnant.wiki/Battery`],
  },
  {
    category: 'mutator',
    name: 'Bottom Heavy',
    type: 'gun',
    imagePath: '/mutator/bottom_heavy.png',
    id: '8lg493',
    dlc: 'base',
    tags: ['Fire Rate', 'Reload Speed'],
    description: `Grants 7% Fire Rate. Increases 1% - 2% for every 10% of Magazine missing.`,
    maxLevelBonus: `Reload Speed is increased by 1.5% per 10% Magazine missing.`,
    wikiLinks: [`https://remnant.wiki/Bottom_Heavy`],
  },
  {
    category: 'mutator',
    name: 'Bulletweaver',
    type: 'gun',
    imagePath: '/mutator/bulletweaver.png',
    id: 'cr22cp',
    dlc: 'base',
    tags: ['Fire Rate', 'Mod Power'],
    description: `Mod use increases Fire Rate of this weapon by 10-[20]% for 15s.`,
    maxLevelBonus: `Increases Mod Generation of this weapon by 15%.`,
    wikiLinks: [`https://remnant.wiki/Bulletweaver`],
  },
  {
    category: 'mutator',
    name: 'Deadly Calm',
    type: 'gun',
    imagePath: '/mutator/deadly_calm.png',
    id: 'ssvo08',
    dlc: 'base',
    tags: ['Ranged Damage', 'Critical Chance'],
    description: `Continuously Aiming increases Ranged Damage by up to 10% - 25% over 3s.`,
    maxLevelBonus: `Ranged Critical Hit Chance increased by 10%.`,
    wikiLinks: [`https://remnant.wiki/Deadly_Calm`],
  },
  {
    category: 'mutator',
    name: 'Dervish',
    type: 'melee',
    imagePath: '/mutator/dervish.png',
    id: '9htayl',
    dlc: 'base',
    tags: ['Reduce Skill Cooldown', 'Melee Damage'],
    description: `Increases Melee Damage by 20% - 40% for 10s when activating a Skill.`,
    maxLevelBonus: `After dealing 350 base Melee damage, reduce Skill Cooldowns by 3%.`,
    wikiLinks: [`https://remnant.wiki/Dervish`],
  },
  {
    category: 'mutator',
    name: 'Disengage',
    type: 'melee',
    imagePath: '/mutator/disengage.png',
    id: '3kadzw',
    dlc: 'base',
    tags: ['Neutral Dodge', 'Perfect Neutral Evade'],
    description: `Melee Strikes increase the damage of the next Backdash Evade Attack by 5% - 15%. Max 3 Stacks. Lasts 7.5s.`,
    maxLevelBonus: `Perfect Neutral Evades grant 3 stacks`,
    wikiLinks: [`https://remnant.wiki/Disengage`],
  },
  {
    category: 'mutator',
    name: 'Dreadful',
    type: 'gun',
    imagePath: '/mutator/dreadful.png',
    dlc: 'dlc1',
    id: 'zcqbti',
    tags: ['Ranged Damage', 'Grey Health', 'Reload Speed'],
    description: `Increases Ranged Damage by 1% - 2% for every 5% of total Health present as Grey Health. Max 20% increase.`,
    maxLevelBonus: `Increases Reload Speed for this weapon by 25% while Grey Health is present.`,
    wikiLinks: [`https://remnant.wiki/Dreadful`],
  },
  {
    category: 'mutator',
    name: 'Edgelord',
    type: 'melee',
    imagePath: '/mutator/edgelord.png',
    id: 'mpxowx',
    dlc: 'base',
    tags: [
      'Melee Charge Speed',
      'Melee Attack Speed',
      'Charged Melee',
      'Lifesteal',
    ],
    description: `Increases Melee Charge Speed by 15% and Melee Attack Speed by 10%.`,
    maxLevelBonus: `Gain 3% of based Charged Melee Damage dealt as Lifesteal.`,
    wikiLinks: [`https://remnant.wiki/Edgelord`],
  },
  {
    category: 'mutator',
    name: 'Executor',
    type: 'melee',
    imagePath: '/mutator/executor.png',
    dlc: 'dlc1',
    id: 'pynv5l',
    tags: ['Status Effect', 'Melee Charge Speed', 'Melee Attack Speed'],
    description: `Charged Melee Attacks increase the duration of Negative Status Effects on enemies by 10% - 30% of the original duration. Cannot exceed original max duration.`,
    maxLevelBonus: `Increases Melee Charge Speed and Melee Attack Speed by 5% per entity within 20m with a Negative Status Effect. Max 4 stacks.`,
    wikiLinks: [`https://remnant.wiki/Executor`],
  },
  {
    category: 'mutator',
    name: 'Extender',
    type: 'gun',
    imagePath: '/mutator/extender.png',
    id: 'pszxmh',
    dlc: 'base',
    tags: ['Magazine Capacity', 'Reload Speed'],
    description: `Increases Magazine Capacity of this weapon by 20-[45]%.`,
    maxLevelBonus: `Increases Reload Speed of this weapon by 20%.`,
    wikiLinks: [`https://remnant.wiki/Extender`],
  },
  {
    category: 'mutator',
    name: 'Failsafe',
    type: 'gun',
    imagePath: '/mutator/failsafe.png',
    id: '0xx8tz',
    dlc: 'base',
    tags: ['Mod Damage'],
    // TODO Check this; max mod damage 20% -> 25%
    description: `Attached Mod deals 10-[25]% additional Mod Damage.`,
    maxLevelBonus: `Attached Mod use gains a 15% chance to not consume charge.`,
    wikiLinks: [`https://remnant.wiki/Failsafe`],
  },
  {
    category: 'mutator',
    name: 'Far-Sighted',
    type: 'gun',
    imagePath: '/mutator/far-sighted.png',
    id: 'QJdhx2',
    dlc: 'dlc2',
    tags: ['Ranged Damage'],
    description: `Increases Ranged Damage of this weapon by 1.25% for every 2.5m from the shooter to the target. Max 25%.`,
    maxLevelBonus: `Level 10: Increases this weapon's Ideal, Falloff, and Max Range by 5m.`,
    wikiLinks: [`https://remnant.wiki/Far-Sighted`],
  },
  {
    category: 'mutator',
    name: 'Feedback',
    type: 'gun',
    imagePath: '/mutator/feedback.png',
    id: '75qok3',
    dlc: 'base',
    tags: ['Mod Power', 'Mod Damage'],
    description: `Using this weapon's Mod generates 10-[20]% of single charge value as passive Mod Power over 10s. Does not stack.`,
    // TODO Check this; 10% -> 15%
    maxLevelBonus: `Mod Damage generates 15% of damage dealt as Mod Power.`,
    wikiLinks: [`https://remnant.wiki/Feedback`],
  },
  {
    category: 'mutator',
    name: 'Fetid Wounds',
    type: 'gun',
    imagePath: '/mutator/fetid_wounds.png',
    id: 'b07g02',
    dlc: 'base',
    tags: [
      'Critical Chance',
      'Status Effect',
      'Weakspot Damage',
      'Critical Hit',
    ],
    // TODO Check this; `added interaction with SLOW`
    description: `Increases Critical Chance of this weapon by 3% per unique Negative Status Effect on the enemy. Max 15% increase.`,
    // TODO Check this; 200 over 10s -> 75 over 10s
    maxLevelBonus: `This weapon's Ranged Weakspot and Ranged Critical Hits apply CORRODED, dealing 75 CORROSIVE damage over 10s.`,
    wikiLinks: [`https://remnant.wiki/Fetid_Wounds`],
  },
  {
    category: 'mutator',
    name: 'Ghost Shell',
    type: 'gun',
    imagePath: '/mutator/ghost_shell.png',
    id: '85c7yj',
    dlc: 'base',
    tags: ['Weakspot Hit', 'Weakspot Damage', 'Weakspot Critical Chance'],
    // TODO Check this; `weakspot hit requirement -1`, 3 -> 2
    description: `After 2 consecutive Weakspot Hits, increase the damage of the next Weakspot Hit by 20-[40]%.`,
    maxLevelBonus: `Increases Weakspot Critical Chance by 15%.`,
    wikiLinks: [`https://remnant.wiki/Ghost_Shell`],
  },
  {
    category: 'mutator',
    name: 'Gladiator',
    type: 'melee',
    imagePath: '/mutator/gladiator.png',
    id: 'N4LpPR',
    dlc: 'dlc2',
    tags: [], // TODO Add tags
    description: `While brandishing a Melee Weapon, receiving Enemy Damage increases Melee Damage by 25% for 5s.`,
    maxLevelBonus: `Level 10: Receiving Enemy Damage while brandishing a Melee Weapon grants 1 stack of BULWARK for 5s.`,
    wikiLinks: [`https://remnant.wiki/Gladiator`],
  },
  {
    category: 'mutator',
    name: 'Guts',
    type: 'melee',
    imagePath: '/mutator/guts.png',
    dlc: 'dlc1',
    id: '961d6v',
    tags: ['Melee Critical Chance', 'Grey Health'],
    description: `Increases Melee Critical Chance by 5% when Grey Health is present.`,
    // TODO Check this; melee crit 2.5% per 10% grey -> 0.5% per 1% grey
    maxLevelBonus: `Increases Melee Critical Damage by 0.5% for every 1% of Grey Health.`,
    wikiLinks: [`https://remnant.wiki/Guts`],
  },
  {
    category: 'mutator',
    name: 'Harmonizer',
    type: 'gun',
    imagePath: '/mutator/harmonizer.png',
    id: 'jyl055',
    dlc: 'base',
    tags: ['Mod Damage', 'Mod Power'],
    description: `Increases Mod Damage by 10-[20]%.`,
    maxLevelBonus: `Generate 25% additional Mod Power for Stowed Weapon.`,
    wikiLinks: [`https://remnant.wiki/Harmonizer`],
  },
  {
    category: 'mutator',
    name: 'Searing Wounds',
    type: 'gun',
    imagePath: '/mutator/searing_wounds.png',
    dlc: 'dlc2',
    id: '9htako',
    tags: ['Ranged Damage', 'Critical Hit', 'Status Effect'],
    description: `Increases Ranged Damage of this weapon by 1%-[10%] to BURNING targets.`,
    maxLevelBonus: `This weapon's Ranged Weakspot and Ranged Critical Hits apply BURNING, dealing 50 FIRE damage over 5s.`,
    wikiLinks: [`https://remnant.wiki/Searing_Wounds`],
  },
  {
    category: 'mutator',
    name: 'Ingenuity',
    type: 'gun',
    imagePath: '/mutator/ingenuity.png',
    id: 'mkbquc',
    dlc: 'base',
    tags: ['Heat Generation', 'Reload Speed'],
    // TODO Check this; max heat reduction 50% -> 30% - may affect base number?
    description: `Reduces the Heat Generation of this weapon by 25%.`,
    // TODO check this; max reload bonus speed 50% -> 55%
    maxLevelBonus: `Reload Speed is increased up to 55% based on this weapon's Heat accumulation.`,
    wikiLinks: [`https://remnant.wiki/Ingenuity`],
  },
  {
    category: 'mutator',
    name: 'Kill Switch',
    type: 'gun',
    imagePath: '/mutator/kill_switch.png',
    id: 'rzfptj',
    dlc: 'base',
    description: `Switching to this weapon creates an Explosive Burst which deals 50 Damage to all enemies within 7m.
    
    Can only happen once every 10s.`,
    maxLevelBonus: `This weapon's kills with any Explosive Damage reduce Kill Switch cooldown by 1s`,
    externalTokens: [`Amplitude`, `Explosive Damage`],
    wikiLinks: [`https://remnant.wiki/Kill_Switch`],
  },
  {
    category: 'mutator',
    name: 'Latency',
    type: 'melee',
    imagePath: '/mutator/latency.png',
    id: 'nft2cp',
    dlc: 'base',
    tags: ['Melee Special Ability'],
    description: `Melee Weapons with special abilities which become readied by dealing melee damage require 10% less damage to charge.`,
    maxLevelBonus: `Increase the potency of readied Melee Special abilities by 25%.`,
    wikiLinks: [`https://remnant.wiki/Latency`],
  },
  {
    category: 'mutator',
    name: 'Lithely',
    type: 'gun',
    imagePath: '/mutator/lithely.png',
    id: 's2z9cc',
    dlc: 'base',
    tags: ['Reload Speed', 'Ranged Damage'],
    description: `Dealing 50% of the attached Weapon's Magazine Base Damage increases reload speed by 3%. Lasts 7s. Max 5 Stacks.`,
    maxLevelBonus: `Reloading at Max Stacks increases Ranged Damage by 20% for 15s.`,
    wikiLinks: [`https://remnant.wiki/Lithely`],
  },
  {
    category: 'mutator',
    name: 'Maelstrom',
    type: 'gun',
    imagePath: '/mutator/maelstrom.png',
    dlc: 'dlc1',
    id: '4m2lg1',
    tags: ['Elemental Damage', 'Status Effect', 'Mod Power'],
    description: `Increases this weapon's Elemental Damage by 5% for each unique Elemental Status Effect on the target.`,
    maxLevelBonus: `Increases Mod Power Generation of Elemental Damage and Elemental Status damage by 20%.`,
    wikiLinks: [`https://remnant.wiki/Maelstrom`],
  },
  {
    category: 'mutator',
    name: 'Misfortune',
    type: 'melee',
    imagePath: '/mutator/misfortune.png',
    id: 'imqrfz',
    dlc: 'base',
    tags: ['Melee Damage', 'Status Effect'],
    // TODO Check this; max damage 5%/8% -> 6%/10%
    description: `Increase Melee damage by 6-[10]% for each unique Negative Status the target is suffering from.`,
    // TODO Check this; duration 2s -> 3s
    maxLevelBonus: `Melee Attacks apply SLOW for 3s.`,
    wikiLinks: [`https://remnant.wiki/Misfortune`],
  },
  {
    category: 'mutator',
    name: 'Momentum',
    type: 'gun',
    imagePath: '/mutator/momentum.png',
    id: 'cvbjvd',
    dlc: 'base',
    tags: ['Critical Hit', 'Critical Chance'],
    // TODO Check this; `reduced critical bonus per stack from 3% to 2%.` - base maybe changed to accommodate that?
    description: `When this weapon scores a Critical Hit, it increases Critical Chance and Critical Damage by 1.5% for 3s. Max 10 stacks.`,
    maxLevelBonus: `Critical Hits from this weapon add 2 stacks. Increases duration by 2s.`,
    wikiLinks: [`https://remnant.wiki/Momentum`],
  },
  {
    category: 'mutator',
    name: 'Near-Sighted',
    type: 'gun',
    dlc: 'dlc2',
    imagePath: '/mutator/near-sighted.png',
    id: '7Y9hfZ',
    tags: ['Ranged Damage', 'Critical Chance'],
    description: `Increases Ranged Damage of this weapon by 10% to enemies within 7m.`,
    maxLevelBonus: `Level 10: Increases Ranged Critical Chance of this weapon by 10% to enemies within 7m.`,
    wikiLinks: [`https://remnant.wiki/Near-Sighted`],
  },
  {
    category: 'mutator',
    name: 'Opportunist',
    type: 'melee',
    imagePath: '/mutator/opportunist.png',
    id: 'qca3zh',
    dlc: 'base',
    tags: ['Perfect Dodge', 'Melee Critical Chance'],
    // TODO Check this; `critical buff now lasts for 2s instead of Next Melee Hit`
    description: `Perfect Dodge activates OPPORTUNITY which increases Melee Critical Chance of the next Melee Attack by 50% for 2s.`,
    maxLevelBonus: `While OPPORTUNITY is active, any dodge or combat slide refreshes the duration.`,
    wikiLinks: [`https://remnant.wiki/Opportunist`],
  },
  {
    category: 'mutator',
    name: 'Overdrive',
    type: 'melee',
    imagePath: '/mutator/overdrive.png',
    id: 'mjzb0f',
    dlc: 'base',
    tags: ['Melee Critical Hit', 'Critical Hit', 'Critical Chance'],
    description: `Melee Critical Hits increase Melee Critical Chance by 2% - 5% for 10s. stacking up to 5 times.`,
    maxLevelBonus: `Melee Critical Strikes deal 25% additional damage.`,
    wikiLinks: [`https://remnant.wiki/Overdrive`],
  },
  {
    category: 'mutator',
    name: 'Pressure Point',
    type: 'gun',
    imagePath: '/mutator/pressure_point.png',
    id: 'EV4ULr',
    dlc: 'dlc2',
    tags: ['Mod Damage', 'Ranged Damage', 'Stagger'],
    description: `Increases this weapon's Ranged and Mod Damage by 5% to enemies within 7m.`,
    maxLevelBonus: `Level 10: Activating this weapon's Mod triggers a fixed 7m blast, dealing 50 Explosive Damage per 100 Mod Power spent in a single cast. Inflicts 1.5 Stagger Damage.`,
    externalTokens: [`Explosive Damage`],
    wikiLinks: [`https://remnant.wiki/Pressure_Point`],
  },
  {
    category: 'mutator',
    name: 'Prophecy',
    type: 'gun',
    imagePath: '/mutator/prophecy.png',
    dlc: 'dlc1',
    id: 'lo6uce',
    tags: ['Mod Power'],
    description: `Using this weapon's Mod increases Mod Power Generation by 3% - 6% for 10s. Max 5 stacks.`,
    maxLevelBonus: `Increases Movement Speed by 3% per stack.`,
    wikiLinks: [`https://remnant.wiki/Prophecy`],
  },
  {
    category: 'mutator',
    name: 'Refunder',
    type: 'gun',
    imagePath: '/mutator/refunder.png',
    id: 'fcl7u2',
    dlc: 'base',
    tags: ['Ammo Reserves'],
    // TODO Check this; max refund chance 35% -> 50%
    description: `Shots from this weapon have a 20-[50]% chance to return Ammo to reserves.`,
    // TODO Check this; bonus 50% -> 25%
    maxLevelBonus: `Refunded Ammo has a 25% chance to also be added to stowed weapon reserves.`,
    wikiLinks: [`https://remnant.wiki/Refunder`],
  },
  {
    category: 'mutator',
    name: 'Reinvigorate',
    type: 'melee',
    imagePath: '/mutator/reinvigorate.png',
    id: '5bfv3p',
    dlc: 'base',
    tags: ['Charged Melee', 'Melee Critical Chance'],
    description: `Reduces the Stamina Cost of all Charged Melee Attacks by 25-[50]%.`,
    // TODO Check this; melee charge bonus 15% -> 20%
    maxLevelBonus: `Melee Charge Attacks gain 20% additional damage and 10% Critical Chance.`,
    wikiLinks: [`https://remnant.wiki/Reinvigorate`],
  },
  {
    category: 'mutator',
    name: 'Resentment',
    type: 'melee',
    imagePath: '/mutator/resentment.png',
    id: 'ha3amj',
    dlc: 'base',
    tags: ['Melee Damage', 'Grey Health', 'Stagger'],
    // TODO Check this; minimum melee damage 10% -> 15%
    // TODO Check this; maximum melee damage 30% -> 35%
    description: `Gain 15-[35]% Melee Damage when Grey Health is present.`,
    maxLevelBonus: `Reduces Stagger by 1 when using any Melee Attack`,
    wikiLinks: [`https://remnant.wiki/Resentment`],
  },
  {
    category: 'mutator',
    name: 'Sequenced Shot',
    type: 'gun',
    imagePath: '/mutator/sequenced_shot.png',
    id: '23ztdj',
    dlc: 'base',
    tags: ['Charged Shot', 'Critical Chance'],
    // TODO Check this; buff duration 3s -> 5s
    // TODO Check this; total stacks 20 -> 15 - not sure if this will affect the description
    description: `This weapon's Charged Shots decrease the Charge time of Subsequent Charge Shots by 10% for 5s.`,
    maxLevelBonus: `While active, Charged Primary Shots grant 1% Ranged Critical Chance per round spent. Max 20%.`,
    wikiLinks: [`https://remnant.wiki/Sequenced_Shot`],
  },
  {
    category: 'mutator',
    name: 'Shielded Strike',
    saveFileSlug: 'shieldbreaker',
    type: 'melee',
    imagePath: '/mutator/shielded_strike.png',
    id: 'bhov5r',
    dlc: 'base',
    tags: ['Charged Melee', 'Melee Damage'],
    // TODO Check this; max melee per-strike shield bonus 4% -> 5%
    // TODO Check this; total max shield 40% -> 50%
    // TODO Check this; duration 10s -> 5s
    description: `Melee Attacks grants a SHIELD for 2-5% of Max Health. Max 20-50%. Last 5s.`,
    maxLevelBonus: `Charged Melee Attacks deal 25% additional Melee Damage based on current Shield amount.`,
    wikiLinks: [`https://remnant.wiki/Shielded_Strike`],
  },
  {
    category: 'mutator',
    name: 'Shocker',
    type: 'melee',
    imagePath: '/mutator/shocker.png',
    id: '7js906',
    dlc: 'base',
    tags: ['Charged Melee'],
    description: `Empowers weapon after 3 hits. While empowered. the next Charged Melee Hit strikes all enemies within 7m with 50 - 100 SHOCK Damage.`,
    maxLevelBonus: `The SHOCK Damage now applies OVERLOADED dealing 125 damage every 5s over 25s.`,
    externalTokens: [`Amplitude`],
    wikiLinks: [`https://remnant.wiki/Shocker`],
  },
  {
    category: 'mutator',
    name: 'Slayer',
    type: 'gun',
    imagePath: '/mutator/slayer1.png',
    id: 'h98e7b',
    dlc: 'base',
    tags: ['Ranged Damage', 'Reload Speed'],
    description: `Reloading increases the damage of this weapon's next shot by 10-[20]%. Last 3s.`,
    maxLevelBonus: `Increases Reload Speed by 15%.`,
    wikiLinks: [`https://remnant.wiki/Slayer_(Mutator)`],
  },
  {
    category: 'mutator',
    name: 'Sleeper',
    type: 'gun',
    imagePath: '/mutator/sleeper.png',
    dlc: 'dlc1',
    id: 'xim1sx',
    tags: ['Critical Chance'],
    // TODO Check this; stow time requirement 7s -> 5s
    // TODO Check this; proc duration 3s/5s -> 5s/10s
    description: `This weapon becomes EMPOWERED when stowed for 5 seconds, granting 20% Critical Chance for 5 seconds after it is drawn.`,
    maxLevelBonus: `While EMPOWERED, increases Critical Damage of this weapon by 15%.`,
    wikiLinks: [`https://remnant.wiki/Sleeper`],
  },
  {
    category: 'mutator',
    name: 'Spellweaver',
    type: 'gun',
    imagePath: '/mutator/spellweaver.png',
    dlc: 'dlc2',
    id: '5Brz87',
    tags: ['Mod Damage', 'Mod Power', 'Reduce Skill Cooldown'],
    description: `Increases this weapon's Mod Damage and Mod Generation by 15% for 10s when activating a Skill.`,
    maxLevelBonus: `Level 10: Activating this weapon's Mod reduces Skill Cooldowns by 1% for every 100 Mod Power spent.`,
    wikiLinks: [`https://remnant.wiki/Spellweaver`],
  },
  // `renamed from Bottom Feeder to Spirit Feeder
  {
    category: 'mutator',
    name: 'Spirit Feeder',
    type: 'gun',
    saveFileSlug: 'bottomfeeder',
    imagePath: '/mutator/bottom_feeder.png', // confirmed: Keeping the same image
    id: '90i71b',
    dlc: 'base',
    tags: [], // TODO Check tags
    description: `Reloading this weapon increases the damage of the Attached Mod by 10-[25%]. Lasts 5s.`, // Confirmed
    maxLevelBonus: `Casting Attached Mod increases Reload Speed by 25%. Lasts 5s.`, // Confirmed
    wikiLinks: [`https://remnant.wiki/Spirit_Feeder`], // Assuming wiki is updating the page url
  },
  {
    category: 'mutator',
    name: 'Spirit Healer',
    type: 'gun',
    imagePath: '/mutator/spirit_healer.png',
    id: 'hk1k7k',
    dlc: 'base',
    tags: ['Mod Power', 'Heal'],
    // TODO Check this; mod spend requirement 500/300 -> 150/50
    // TODO Check this; healer per mod spend 5% -> 2%
    // TODO Check this; mod duration 5s -> 10s
    description: `Regenerate 2% Health over 10s for every 150 Mod Power spent.`,
    maxLevelBonus: `Allies within 15m are healed for 50% of the primary effect.`, //TODO IN-GAME No info on whether it's A or R
    wikiLinks: [`https://remnant.wiki/Spirit_Healer`],
  },
  {
    category: 'mutator',
    name: 'Steadfast',
    type: 'melee',
    imagePath: '/mutator/steadfast.png',
    id: 'yibeww',
    dlc: 'base',
    tags: ['Charged Melee', 'Damage Reduction', 'Grey Health'],
    // TODO Check this; damage reduction 10%/20% -> 5%/10%
    description: `Charged Melee Attacks cannot be interrupted and gain 5-[10]% damage reduction from all sources.`,
    maxLevelBonus: `All damage taken during Charged Melee Attack is covered to Grey Health.`,
    wikiLinks: [`https://remnant.wiki/Steadfast`],
  },
  {
    category: 'mutator',
    name: 'Stormbringer',
    type: 'melee',
    imagePath: '/mutator/stormbringer.png',
    id: 'm87yf6',
    dlc: 'base',
    tags: ['Status Effect', 'Melee Damage', 'Charged Melee'],
    description: `Increases the Status Effect Damage applied by Melee Attacks by 25%.`,
    maxLevelBonus: `Charged Melee Attacks lower enemy's Resistance to All Status Damage by 10%. Lasts 10s.`,
    wikiLinks: [`https://remnant.wiki/Stormbringer`],
  },
  {
    category: 'mutator',
    name: 'Striker',
    type: 'melee',
    imagePath: '/mutator/striker.png',
    id: '27rynt',
    dlc: 'base',
    tags: ['Melee Damage', 'Movement Speed'],
    description: `Melee Hits increase Melee Damage by 3-6% for 10s Max 5 Stacks.`,
    maxLevelBonus: `Increases Movement Speed by 3% per stack.`,
    wikiLinks: [`https://remnant.wiki/Striker`],
  },
  {
    category: 'mutator',
    name: 'Supercharger',
    type: 'gun',
    imagePath: '/mutator/supercharger.png',
    id: 'omeu3c',
    dlc: 'base',
    tags: ['Charged Shot', 'Critical Chance'],
    description: `Increases Charge Speed of Bows and Fusion Rifles by 10-[30]%.`,
    maxLevelBonus: `Charged Primary Shots of Bows and Fusion Rifles gain 15% Critical Chance.`,
    wikiLinks: [`https://remnant.wiki/Supercharger`],
  },
  {
    category: 'mutator',
    name: 'Tainted Blade',
    type: 'melee',
    imagePath: '/mutator/tainted_blade.png',
    id: 'f32skd',
    dlc: 'base',
    tags: ['Melee Damage', 'Charged Melee'],
    // TODO Check this; max damage bonus 10% -> 8%
    description: `Increase Melee Damage by 5%-[8%] per stack of CORRODED on the target.`,
    // TODO Check this; damage 500 -> 250
    // TODO Check this; duration 20s -> 10s
    maxLevelBonus: `Charged Melee Attacks apply CORRODED dealing 250 ACID damage over 10s.`,
    wikiLinks: [`https://remnant.wiki/Tainted_Blade`],
  },
  {
    category: 'mutator',
    name: 'Thousand Cuts',
    type: 'gun',
    imagePath: '/mutator/thousand_cuts.png',
    id: 'r8jxFF',
    dlc: 'dlc2',
    tags: ['Critical Chance', 'Critical Damage', 'Reload Speed'],
    description: `Increases this weapon's Critical Chance and Critical Damage by 0.1% for each shot fired. Lasts 0.125s. Max 50 stacks.`,
    maxLevelBonus: `Level 10: Increases this weapon's Reload Speed by 1% per stack.`,
    wikiLinks: [`https://remnant.wiki/Thousand_Cuts`],
  },
  {
    category: 'mutator',
    name: 'Timewave',
    type: 'gun',
    imagePath: '/mutator/timewave.png',
    id: 'dynus4',
    dlc: 'base',
    tags: ['Ranged Damage', 'Status Effect'],
    description: `Increase this weapon's Ranged damage by 5% to enemies inflicted with SLOW status.`,
    maxLevelBonus: `Mod Use applies SLOW status on all enemies within 10m for 5s. Can only happen once every 10s.`,
    externalTokens: [`Amplitude`],
    wikiLinks: [`https://remnant.wiki/Timewave`],
  },
  {
    category: 'mutator',
    name: 'Top Heavy',
    type: 'gun',
    imagePath: '/mutator/top_heavy.png',
    id: 'fknx4t',
    dlc: 'base',
    tags: ['Ranged Damage', 'Weakspot Damage'],
    description: `Increases this weapon's Ranged Damage by up to 7.5% based on how close the magazine capacity is to full.`,
    maxLevelBonus: `Increases this weapon's Weakspot Damage by up to 20% based on how close the magazine capacity is to full.`,
    wikiLinks: [`https://remnant.wiki/Top_Heavy`],
  },
  {
    category: 'mutator',
    name: 'Transference',
    type: 'melee',
    imagePath: '/mutator/transference.png',
    id: '0osd64',
    dlc: 'base',
    tags: ['Melee Damage', 'Mod Power', 'Ammo Reserves'],
    description: `Melee Hits generate 5% Ammo Reserves for both Firearms. Cooldown 10-[5]s.`,
    maxLevelBonus: `After Ammo is Transferred, increase Reload Speed of this weapon by 50% for 5s.`,
    wikiLinks: [`https://remnant.wiki/Transference`],
  },
  {
    category: 'mutator',
    name: 'Transpose',
    type: 'gun',
    imagePath: '/mutator/transpose.png',
    id: '1cxn5s',
    dlc: 'base',
    tags: ['Ranged Damage', 'Ammo Reserves'],
    // TODO Check this; ranged damage 20% -> 15%
    // TODO Check this; duration 20s -> 15s
    // TODO Check this; `Adjusted text to clarify that net Ammo Gain is what activates the trigger`
    description: `Picking up Ammo increases Ranged damage by 10-[15]% for 15s.`,
    maxLevelBonus: `Ammo pickups are added directly to into this weapon's magazine.`,
    wikiLinks: [`https://remnant.wiki/Transpose`],
  },
  {
    category: 'mutator',
    name: 'Twisting Wounds',
    type: 'gun',
    imagePath: '/mutator/twisting_wounds.png',
    id: '7eodps',
    dlc: 'base',
    tags: ['Ranged Damage', 'Critical Hit', 'Weakspot Hit'],
    description: `Increases Ranged damage of this weapon by 5-[10]% to BLEEDING targets.`,
    // TODO Check this; bleed damage 200 over 10s -> 200 over 20s
    maxLevelBonus: `This weapon's Ranged Weakspot and Ranged Critical Hits apply BLEEDING, dealing 200 BLEED damage over 20s.`,
    wikiLinks: [`https://remnant.wiki/Twisting_Wounds`],
  },
  {
    category: 'mutator',
    name: 'Vampire Blade',
    type: 'melee',
    imagePath: '/mutator/vampire_blade.png',
    id: 'dhwqt4',
    dlc: 'base',
    tags: ['Melee Damage', 'Lifesteal'],
    // TODO Check this; max melee bonus 25% -> 30%
    description: `Increases Melee Damage by 10-[30]% while within 10m of a BLEEDING entity.`, //No info whether its R or A
    maxLevelBonus: `Melee Hits vs BLEEDING targets will Lifesteal 3% of base damage dealt.`,
    wikiLinks: [`https://remnant.wiki/Vampire_Blade`],
  },
  {
    category: 'mutator',
    name: 'Vengeful Strike',
    type: 'melee',
    imagePath: '/mutator/vengeful_strike.png',
    id: '8h8a9w',
    dlc: 'base',
    tags: ['Melee Damage', 'Critical Chance'],
    // TODO Check this; minimum damage 20% -> 25%
    description: `Increases Melee damage by 25-[50]% when below 50% Max Health.`,
    maxLevelBonus: `Increases Melee Critical Chance by 15% when below 50% Max Health.`,
    wikiLinks: [`https://remnant.wiki/Vengeful_Strike`],
  },
  {
    category: 'mutator',
    name: 'Weaponlord',
    type: 'melee',
    imagePath: '/mutator/weaponlord.png',
    id: 'w6gpz2',
    dlc: 'base',
    tags: ['Melee Damage', 'Charged Melee', 'Critical Chance'],
    // TODO Check this; `increased strike bonus from 10% -> 15% per stack` - we list it as a range though??
    // TODO Check this; `reduced strike bonus duration from 7s -> 5s` - will this be reflected in description?
    description: `Basic Melee Attacks increase the next Charge Attacks by 7%. Max 5 Stacks.`,
    // TODO Check this; `Reduced strikes required for L10 crit from 5 -> 3` - will this be reflected in the description?
    maxLevelBonus: `At Max Stacks, the next Charge Attack gains 100% Critical Chance.`,
    wikiLinks: [`https://remnant.wiki/Weaponlord`],
  },
]
