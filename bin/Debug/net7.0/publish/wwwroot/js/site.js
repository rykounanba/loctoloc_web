// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function create_pushpin(_map){
    if(_map.entities.getLength() < 2){
        var pushpin = new Microsoft.Maps.Pushpin(_map.getCenter(), null);
        _map.entities.push(pushpin);
    } else {
        _map.entities[0] = _map.entities[1]
        _map.entities.clear();
        var pushpin = new Microsoft.Maps.Pushpin(_map.getCenter(), null);
        _map.entities.push(pushpin);
        console.log("testing");
    }
}