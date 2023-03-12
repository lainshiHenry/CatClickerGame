export enum GameEngineResultMessage{
    success = 'Success',
    insufficient = 'Insufficient',
    itemDoesNotExist = 'Item Does Not Exist',
    error = 'Error',
    empty = '',
};

export enum listOfMakableItemsNames{
    AppleSlices = 'Apple Slices',
    Bananas = 'Banana',
    Carrot = 'Carrot',
    na = 'NA'
};

export enum CurrencyControllerResults{
    success = 'Success',
    insufficientFunds = 'Insufficient Funds'
};

export enum InventoryControllerResults{
    success = 'Success',
    insufficientItems = 'Insufficient Items',
    cannotFindItem = 'Cannot Find Item(s)',
};