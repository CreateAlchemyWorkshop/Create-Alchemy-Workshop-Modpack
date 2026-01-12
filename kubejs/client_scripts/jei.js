RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('create_connected:brass_gearbox')
    event.remove('create_connected:vertical_brass_gearbox')
})

RecipeViewerEvents.removeEntriesCompletely('fluid', event => {
})