import React, { useState } from 'react'
import './UpgradeDialog.css'
import { UpgradeItemProps } from '../data/ListOfUpgradables';
import UpgradeButton from './UpgradeButton';
import ScoreController from '../controller/ScoreController';

interface UpgradeDialogProps {
    openDialog: boolean,
    onCloseDialogFunction: () => void,
    listOfUpgrades: UpgradeItemProps[],
    handleScoreIncreaseFunction: (number: number) => void,
    scoreController: ScoreController,
}

const UpgradeDialog = ({openDialog, onCloseDialogFunction, listOfUpgrades, handleScoreIncreaseFunction, scoreController}: UpgradeDialogProps) => {

    const [upgradeArray, setUpgradeArray] = useState(<ul></ul>);

    function buildUpgradeArr(){
      return <ul className='upgradeList'>
        {listOfUpgrades.map((value: UpgradeItemProps, index: number) => {
          return buildUpgradeItem({item: value, index: index});
        })}
      </ul>
    }

    function buildUpgradeItem({item, index}: {item: UpgradeItemProps, index: number}){
      return <li>
        <UpgradeButton
          buttonText={item.nameOfUpgrade}
          onClickFunction={() => handleScoreIncreaseFunction(item.upgradeValue)}
          minimumAmount={item.costToUpgrade}
          playerCurrency={scoreController.getScore()}
        />
      </li>
    }

    //display menu/dialog of items that can be upgraded
    if( !openDialog ) return null;
    return (
      <div className='overlay'>
        <dialog open={openDialog} className='upgradeDialog' onClose={onCloseDialogFunction}>
          <div className='upgradeDialogContainer'>
            <section className='headerSection'>
              <button onClick={onCloseDialogFunction} className='closeButton'>X</button>
            </section>
            <section className='mainSection'>
              {buildUpgradeArr()}
            </section>
            
          </div>
        </dialog>
      </div>
    )
}

export default UpgradeDialog