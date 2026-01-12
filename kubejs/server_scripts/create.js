/* -------------------------------------------------------------------------- */
/*                                    Tags                                    */
/* -------------------------------------------------------------------------- */

ServerEvents.tags('item', event => {

    // New tags '#kubejs:cogwheel' and '#kubejs:large_cogwheel' will replace all
    // cogwheels usage in recipes.
    addCogwheelTags('oak')
    addCogwheelTags('birch')
    addCogwheelTags('jungle')
    addCogwheelTags('acacia')
    addCogwheelTags('dark_oak')
    addCogwheelTags('mangrove')
    addCogwheelTags('cherry')
    addCogwheelTags('bamboo')
    addCogwheelTags('crimson')
    addCogwheelTags('warped')

    /* -------------------------------------------------------------------------- */

    function addCogwheelTags(variant) {
        var cogwheel = 'createcasing:' + variant + '_cogwheel'
        var large_cogwheel = 'createcasing:' + variant + '_large_cogwheel'

        event.add('kubejs:cogwheel', 'create:cogwheel')
        event.add('kubejs:cogwheel', cogwheel)
        event.add('kubejs:large_cogwheel', 'create:large_cogwheel')
        event.add('kubejs:large_cogwheel', large_cogwheel)
    }

})

/* -------------------------------------------------------------------------- */
/*                                   Recipes                                  */
/* -------------------------------------------------------------------------- */

ServerEvents.recipes(event => {

    const { create } = event.recipes

    // ...

})