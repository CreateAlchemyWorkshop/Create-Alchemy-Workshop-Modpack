ServerEvents.recipes(event => {

    const { create } = event.recipes

    // Deleted all existing cogwheel recipes to replace them with variants.
    event.remove({ id: "create:crafting/kinetics/cogwheel" })
    event.remove({ id: "create:deploying/cogwheel" })

    event.remove({ id: "create:crafting/kinetics/large_cogwheel" })
    event.remove({ id: "create:crafting/kinetics/large_cogwheel_from_little" })
    event.remove({ id: "create:deploying/large_cogwheel" })

    // The original cogwheel is considered as spruce variant.
    event.shapeless('create:cogwheel', ['create:shaft', 'minecraft:spruce_planks'])
    create.deploying('create:cogwheel', ['create:shaft', 'minecraft:spruce_planks'])

    event.shapeless('create:large_cogwheel', ['create:shaft', 'minecraft:spruce_planks', 'minecraft:spruce_planks'])
    event.shapeless('create:large_cogwheel', ['create:cogwheel', 'minecraft:spruce_planks'])
    create.deploying('create:large_cogwheel', ['create:cogwheel', 'minecraft:spruce_planks'])

    addCogwheelRecipes('oak')
    addCogwheelRecipes('birch')
    addCogwheelRecipes('acacia')
    addCogwheelRecipes('jungle')
    addCogwheelRecipes('dark_oak')
    addCogwheelRecipes('mangrove')
    addCogwheelRecipes('cherry')
    addCogwheelRecipes('bamboo')
    addCogwheelRecipes('crimson')
    addCogwheelRecipes('warped')

    // Deleted all existing gearbox recipes to replace them with variants.
    event.remove({ id: "create:crafting/kinetics/gearbox" })
    event.remove({ id: "create:crafting/kinetics/vertical_gearbox" })
    event.remove({ id: "createcasing:crafting/gearbox/brass" })
    event.remove({ id: "createcasing:crafting/gearbox/copper" })
    event.remove({ id: "createcasing:crafting/gearbox/railway" })
    event.remove({ id: "createcasing:crafting/gearbox/creative" })
    event.remove({ id: "createcasing:crafting/gearbox/industrial_iron" })
    event.remove({ id: "createcasing:crafting/gearbox/weathered_iron" })
    event.remove({ id: "createcasing:crafting/gearbox/refined_radiance" })
    event.remove({ id: "createcasing:crafting/gearbox/shadow_steel" })
    event.remove({ id: "createcasing:crafting/gearbox/brass_vertical" })
    event.remove({ id: "createcasing:crafting/gearbox/copper_vertical" })
    event.remove({ id: "createcasing:crafting/gearbox/railway_vertical" })
    event.remove({ id: "createcasing:crafting/gearbox/creative_vertical" })
    event.remove({ id: "createcasing:crafting/gearbox/industrial_iron_vertical" })
    event.remove({ id: "createcasing:crafting/gearbox/weathered_iron_vertical" })
    event.remove({ id: "createcasing:crafting/gearbox/refined_radiance_vertical" })
    event.remove({ id: "createcasing:crafting/gearbox/shadow_steel_vertical" })
    event.remove({ id: "createcasing:crafting/configurable_gearbox/andesite" })
    event.remove({ id: "createcasing:crafting/configurable_gearbox/brass" })
    event.remove({ id: "createcasing:crafting/configurable_gearbox/copper" })
    event.remove({ id: "createcasing:crafting/configurable_gearbox/railway" })
    event.remove({ id: "createcasing:crafting/configurable_gearbox/creative" })
    event.remove({ id: "createcasing:crafting/configurable_gearbox/industrial_iron" })
    event.remove({ id: "createcasing:crafting/configurable_gearbox/weathered_iron" })
    event.remove({ id: "createcasing:crafting/configurable_gearbox/refined_radiance" })
    event.remove({ id: "createcasing:crafting/configurable_gearbox/shadow_steel" })

    addCustomGearboxRecipe('create:gearbox', 'create:andesite_casing')
    addCustomVerticalGearboxRecipe('create:vertical_gearbox', 'create:andesite_casing')
    addCustomConfigurableGearboxRecipe('createcasing:andesite_configurable_gearbox', 'create:andesite_casing')

    addGearboxRecipe('brass')
    addGearboxRecipe('copper')
    addGearboxRecipe('railway')

    addCustomGearboxRecipe('createcasing:creative_gearbox', 'createcasing:creative_casing')
    addCustomVerticalGearboxRecipe('createcasing:vertical_creative_gearbox', 'createcasing:creative_casing')
    addCustomConfigurableGearboxRecipe('createcasing:creative_configurable_gearbox', 'createcasing:creative_casing')

    addCustomGearboxRecipe('createcasing:industrial_iron_gearbox', 'create:industrial_iron_block')
    addCustomVerticalGearboxRecipe('createcasing:vertical_industrial_iron_gearbox', 'create:industrial_iron_block')
    addCustomConfigurableGearboxRecipe('createcasing:industrial_iron_configurable_gearbox', 'create:industrial_iron_block')

    addCustomGearboxRecipe('createcasing:weathered_iron_gearbox', 'create:weathered_iron_block')
    addCustomVerticalGearboxRecipe('createcasing:vertical_weathered_iron_gearbox', 'create:weathered_iron_block')
    addCustomConfigurableGearboxRecipe('createcasing:weathered_iron_configurable_gearbox', 'create:weathered_iron_block')

    addGearboxRecipe('refined_radiance')
    addGearboxRecipe('shadow_steel')

    /* -------------------------------------------------------------------------- */

    function addCogwheelRecipes(variant) {
        var planks = 'minecraft:' + variant + '_planks'
        var cogwheel = 'createcasing:' + variant + '_cogwheel'
        var large_cogwheel = 'createcasing:' + variant + '_large_cogwheel'        
 
        event.stonecutting('create:cogwheel', cogwheel)
        event.stonecutting(cogwheel, 'create:cogwheel')
 
        event.shapeless(cogwheel, ['create:shaft', planks])
        create.deploying(cogwheel, ['create:shaft', planks])
 
        event.stonecutting('create:large_cogwheel', large_cogwheel)
        event.stonecutting(large_cogwheel, 'create:large_cogwheel')
 
        event.shapeless(large_cogwheel, ['create:shaft', planks, planks])
        event.shapeless(large_cogwheel, [cogwheel, planks])
        create.deploying(large_cogwheel, [cogwheel, planks])
    }

    function addGearboxRecipe(variant) {
        var gearbox = 'createcasing:' + variant + '_gearbox'
        var vertical_gearbox = 'createcasing:vertical_' + variant + '_gearbox'
        var configurable_gearbox = 'createcasing:' + variant + '_configurable_gearbox'
        var casing = 'create:' + variant + '_casing'

        event.shaped(
            gearbox, 
            [
                ' G ',
                'GCG',
                ' G '
            ],
            {
                    'G': '#kubejs:cogwheel',
                    'C': casing
            }
        )

        event.shaped(
            vertical_gearbox,
            [
                'G G',
                ' C ',
                'G G'
            ],
            {
                'G': '#kubejs:cogwheel',
                'C': casing
            }
        )

        event.shaped(
            configurable_gearbox,
            [
                ' G ',
                'GCG',
                ' G '
            ],
            {
                'G': '#kubejs:large_cogwheel',
                'C': casing
            }
        )
    }

    function addCustomGearboxRecipe(gearboxItem, casingItem) {
        event.shaped(
            gearboxItem, 
            [
                ' G ',
                'GCG',
                ' G '
            ],
            {
                    'G': '#kubejs:cogwheel',
                    'C': casingItem
            }
        )
    }

    function addCustomVerticalGearboxRecipe(gearboxItem, casingItem) {
        event.shaped(
            gearboxItem,
            [
                'G G',
                ' C ',
                'G G'
            ],
            {
                'G': '#kubejs:cogwheel',
                'C': casingItem
            }
        )
    }

    function addCustomConfigurableGearboxRecipe(gearboxItem, casingItem) {
        event.shaped(
            gearboxItem,
            [
                ' G ',
                'GCG',
                ' G '
            ],
            {
                'G': '#kubejs:large_cogwheel',
                'C': casingItem
            }
        )
    }

})