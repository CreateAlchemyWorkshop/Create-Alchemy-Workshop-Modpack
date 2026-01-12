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

})