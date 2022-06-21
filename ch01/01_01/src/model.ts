let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost: any = 425; // avoid the 'any' type
originalCost = "More spenny"

// Restricting values
enum InventoryItemType {
  Computer = "computer",
  Furniture = "furniture"
}

// Define interface - exists to give TS more info to find mistakes
interface InventoryItem {
  // Populate interface to describe structure
  displayName: string;
  inventoryType: InventoryItemType;
  // use of literal types - inventoryType: "computer" || "furniture"
  readonly trackingNumber: string;
  createDate: Date;
  // ?Optional parameter 
  originalCost?: number;

  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem({
  displayName: "Macbook",
  inventoryType: InventoryItemType.Computer,
  trackingNumber: "B123",
  createDate: new Date(),
});