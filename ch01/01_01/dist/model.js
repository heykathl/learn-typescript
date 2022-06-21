let displayName = "Jess's standing desk";
let inventoryType = "furniture";
let trackingNumber = "FD123455";
let createDate = new Date();
// let originalCost: Cost = 425;
// originalCost = "More spenny"
// To reassign type but not declare value
let originalCost;
if (typeof originalCost === "number") {
    let cost = originalCost;
}
else {
    let x = originalCost; // which is originally a string
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
let inventoryItem = getInventoryItem(trackingNumber);
let updatedInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "Macbook",
    inventoryType: InventoryItemType.Computer,
    trackingNumber: "B123",
    createDate: new Date(),
});
function clone(source, options) {
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}
const cloned = clone(inventoryItem, { deep: true });
// Reusing logic with generics 
class KeyValuePair {
    Key;
    Value;
}
let keyValue = { Key: "something", Value: 1234 };
let keyValue2 = { Key: 1234, Value: true };
