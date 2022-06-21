let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
// let originalCost: any = 425; avoid the 'any' type

// Allow multiple types
type Cost = number | string
// let originalCost: Cost = 425;
// originalCost = "More spenny"

// To reassign type but not declare value
let originalCost: Cost;

if (typeof originalCost === "number") {
  let cost: number = originalCost
} else {
  let x = originalCost // which is originally a string
}


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
  // use of literal types - inventoryType: "computer" | "furniture"
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

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem({
  displayName: "Macbook",
  inventoryType: InventoryItemType.Computer,
  trackingNumber: "B123",
  createDate: new Date(),
});

function clone<T, U>(source: T, options: U): T {
  const serialized = JSON.stringify(source);
  return JSON.parse(serialized)
}

const cloned = clone(inventoryItem, { deep: true});

// Reusing logic with generics 
class KeyValuePair<TKey, TValue> { // or can use with interface
  Key: TKey;
  Value: TValue;
}

let keyValue: KeyValuePair<string, number> = { Key: "something", Value: 1234 };
let keyValue2: KeyValuePair<number, boolean> = { Key: 1234, Value: true };