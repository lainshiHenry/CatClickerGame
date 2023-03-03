export interface UpgradeItemProps {
    nameOfUpgrade: string,
    upgradeValue: number,
    costToUpgrade: number,
}

export const listOfUpgrades: UpgradeItemProps[] = [
    {
        nameOfUpgrade: '1 Cat',
        upgradeValue: 1,
        costToUpgrade: 10,
    },
    {
        nameOfUpgrade: '10 Cats',
        upgradeValue: 10,
        costToUpgrade: 100,
    },
];