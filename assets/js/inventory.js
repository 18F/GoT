
var tywin = { 
              inventory: {
                swords: 3,
                dragons:0,
                ship: 0,
                'tears of lys': 0
              },
              name: 'Tywin',
              id: 1
            }   
 var shay = { 
              inventory: {
                dragons: 2,
                swords:0,
                ship: 0,
                'tears of lys': 0
              },
              name: 'Shay',
              id: 2
            }
 var eddard = { 
              inventory: {
                dragons: 0,
                ship: 0,
                swords: 0,
                'tears of lys': 7
              },
              name: 'Eddard',
              id:3
            }
 var danny = { 
              inventory: {
                ship: 1,
                dragons: 0,
                swords: 0,
                'tears of lys': 0
              },
              name: 'Daenaryus',
              id: 4
            }
 
var items = ['sword', 'dragons', 'tears of lys', 'ship'];
var trades = [];

players = [tywin, shay, eddard, danny];

/* example trade object
{
  player1: player1,
  player2: player2,
  player1_giving: item,
  player2_giving: item,
  accepted: true
}
*/

var create_trade = function(player1, player2, p1giving, p2giving){
    var obj = {
                'player1': player1,
                'player2': player2,
                'player1_giving': p1giving,
                'player2_giving': p2giving,
                'accepted': false
                }

    trades.push(obj);
    return obj;
}

var update_inventory = function (trade_obj) {
    
    //decrementing inventory for both players
    trade_obj['player1']['inventory'][trade_obj['player1_giving']] -= 1;
    trade_obj['player2']['inventory'][trade_obj['player2_giving']] -= 1;
    
    //incrementing inventory for both players
    trade_obj['player1']['inventory'][trade_obj['player2_giving']] += 1;
    trade_obj['player2']['inventory'][trade_obj['player1_giving']] += 1;
}

var check_offer = function(player, item){
    if ( item in player['inventory']){
        return true;
    }
    else { return false; }
}


