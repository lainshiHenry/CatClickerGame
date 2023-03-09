import React from 'react'
import './UpgradeDialog.css'
import { UpgradeItemProps } from '../data/ListOfUpgradables';
import UpgradeButton from './UpgradeButton';
import ScoreController from '../controller/ScoreController';
import Player from '../model/Player';

interface UpgradeDialogProps {
    player: Player,
    openDialog: boolean,
    onCloseDialogFunction: () => void,
    listOfUpgrades: UpgradeItemProps[],
    handleScoreIncreaseFunction: (player: Player, item: UpgradeItemProps) => void,
    scoreController: ScoreController,
}

const UpgradeDialog = ({player, openDialog, onCloseDialogFunction, listOfUpgrades, handleScoreIncreaseFunction, scoreController}: UpgradeDialogProps) => {

    function buildUpgradeArr(){
      return <ul className='upgradeList'>
        {listOfUpgrades.map((value: UpgradeItemProps, index: number) => {
          return buildUpgradeItem({player: player, item: value, index: index});
        })}
      </ul>
    }

    function buildUpgradeItem({player, item, index}: {player: Player, item: UpgradeItemProps, index: number}){
      console.log(player);
      return <li>
        <UpgradeButton
          buttonText={item.nameOfUpgrade}
          onClickFunction={() => handleScoreIncreaseFunction(player, item)}
          minimumAmount={item.costToUpgrade}
          // playerCurrency={scoreController.getScore()}
          playerCurrency={player.getCurrency}
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