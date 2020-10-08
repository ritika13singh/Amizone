var contextMenuItem= {
    "id":"spendMoney",
    "title":"Spend Money",
    "contexts":["selection"]

};
chrome.contextMenus.create(contextMenuItem);
function isInt(val){
    return !isNaN(val) && parseInt(Number(val))==val && !isNaN(parseInt(val,10));
}
chrome.contextMenus.onClicked.addListener(function(data){
    if(data.menuItemId=="spendMoney" && data.selectionText){
        if(isInt(data.selectionText)){
            chrome.storage.sync.get(['total','limit'], function (budget) {
                var newTotal = 0;
                if (budget.total) {
                    newTotal += parseInt(budget.total);
                }
                
                    newTotal+=parseInt(data.selectionText);
               
                chrome.storage.sync.set({'total':newTotal},function(){
                    if( newTotal>=budget.limit){
                        var notifOptions = {
                            type:"basic",
                            iconUrl:'icon.png',
                            title:"Limit Reached",
                            message:"Looks like you've reached the limit"
                            
    
                        };
                        chrome.notifications.create('limitnotif',notifOptions);
                    }
                });
            });
        }
    }
}); 