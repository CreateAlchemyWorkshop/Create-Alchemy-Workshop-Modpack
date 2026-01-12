ServerEvents.recipes(event => {

    const { create } = event.recipes

    event.remove({ id: 'copycats:crafting/copycat_cogwheel' })
    event.remove({ id: 'copycats:crafting/copycat_large_cogwheel' })

    // Copycat Cogwheels
    event.shapeless('4x copycats:copycat_cogwheel',
        [ '#kubejs:cogwheel', '#kubejs:cogwheel', '#kubejs:cogwheel', '#kubejs:cogwheel', '#c:ingots/zinc' ])

    event.shapeless('4x copycats:copycat_large_cogwheel',
        [ '#kubejs:large_cogwheel', '#kubejs:large_cogwheel', '#kubejs:large_cogwheel', '#kubejs:large_cogwheel', '#c:ingots/zinc' ])

    
})