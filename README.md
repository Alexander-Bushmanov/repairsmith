# REDUX CHALLENGE

## What we're looking for
A RepairSmith user is here to get their car repaired. The user is presented a screen with all the possible repairs that 
RepairSmith offers so that they can add them to their cart for purchase.

Our users love Popular Services that we want to persist them in a suggestions type module above the cart module. 

Please implement the solution using Redux.


## Acceptance Criteria
- Make a Popular Services modules that shows a custom list of repairs our business found to be the most popular.
    - It should only show 2 repairs at a time as to only nudge the user about adding these. 
    - This module should update live as the user adds and removes items from their cart. 
 - Where there are no more popular repairs, the module should not show at all.
 - Repairs already added to the cart shouldn't show up in the module
 - There should be an "ADD" button on the right side of each repair to indicate it can be added by clicking.


**Popular Services custom ordered list
- Oil Change
- Replace Front Brake Pads
- Replace Rear Brake Pads
- Replace Spark Plugs
- Replace Front Brake Rotors
- Replace Rear Brake Rotors
		
### Remove from cart
- Add a remove button to each item in the cart module using redux that when clicked will remove the item from the cart
- Repair should be re-added to the Popular Repairs module if it's popular


### TO START DEVELOPMENT
```bash
npm install
npm run dev
```
