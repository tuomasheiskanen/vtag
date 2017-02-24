import React from 'react'
import styles from './Menu.css'
import AugmentedView from '../AugmentedView/AugmentedView'
import AddEntry from '../AddEntry/AddEntry'

export default class Main extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isShowAddEntry: true,
      isShowLookForTags: false
    }
  }

  onAddEntry(){
    this.setState({isShowAddEntry: true, isShowLookForTags: false})
  }

  onLookForTags(){
    this.setState({isShowAddEntry: false, isShowLookForTags: true})
  }

  render(){
    const contentHeight = this.props.viewport.height * 0.6
    const menuHeight = this.props.viewport.height * 0.3

    return(
      <div className={styles.container}>
        <div className={styles.subContainer} style={{height: contentHeight}}>
          { this.state.isShowAddEntry ? <AddEntry /> : undefined }
          { this.state.isShowLookForTags ? <AugmentedView /> : undefined }
        </div>
        <div className={styles.actionContainer} style={{height: menuHeight}}>
          <button onClick={() => this.onAddEntry()} className={this.state.isShowAddEntry ? styles.menuButtonSelected : styles.menuButton}>Add entry </button>
          <button onClick={() => this.onLookForTags()} className={this.state.isShowLookForTags ? styles.menuButtonSelected : styles.menuButton}>Look for tags </button>
        </div>
      </div>
    )
  }

}