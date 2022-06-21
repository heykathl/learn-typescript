var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
// let originalCost: Cost = 425;
// originalCost = "More spenny"
// To reassign type but not declare value
var originalCost;
if (typeof originalCost === "number") {
    var cost = originalCost;
}
else {
    var x = originalCost; // which is originally a string
}
// Restricting values
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "Macbook",
    inventoryType: InventoryItemType.Computer,
    trackingNumber: "B123",
    createDate: new Date(),
});
