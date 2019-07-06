({
    packItem  : function(component, event, helper) {

        var toggleVal = component.get("v.item");
        toggleVal.Packed__c= true;
        component.set("v.item.Packed__c",toggleVal);
        component.set("v.btndisabled",true);
    },
    
})