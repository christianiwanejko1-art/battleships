when click a square change its colour pass
when click square add cluster of squares to adjacent pass
when click square add cluster of (5) (in a row(horizontal)) 
in order when click square add clusters of: (5 , 4, 4, 3, 2) - representing the ships
same test case as before - but shouldnt let place on edges (i.e no wrapping)
same test case as before - but should be blue color and show the user where it is being placed before clicking
-> color single cell when hovered over
-> color multiple cell when hovered over (adjacent)
-> color only specified (ship) size
-> should let place it and hover moved on to next ship
-> should let user rotate ship vertical
-> should show hover on grid for vertical

-- notes
color on hover for each


game logic/testing
reset button clears ships and restart game
when click start, it should record the positions of the ships to an object/update them
when clicked start it should start game -> remove/hide start button, change enemy grid to the default colors
(js - should place the ships randomly on valid tiles)
player takes turn - highlight square with dot if empty, highlight with x if ship is there
when sunk should display bigger border/indication

random id 

store id in gameboard obj, access gameboard obj to pick from remaining positions;


Future version: include info on winner, change background of sunken ship, indicate on ships that have sunk on ui.