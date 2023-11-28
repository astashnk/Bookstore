import {ITab, IStoreState} from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { setTab } from '../../redux/action-creators';

const TABS = [
   {
      id:1,
      text: 'Description'
   },{
      id:2,
      text: 'Authors'
   },{
      id:3,
      text: 'Reviews'
   }
]

const Tab = (props: ITab) => {
   const theme = useSelector((state: IStoreState) => state.ui.theme)
   const dispatch = useDispatch()
   const {content, id, style} = props;
   const handleClick = () => {
      dispatch(setTab(id))
      console.log(id)
   }
   return(
      <button style={style} className={`tab ${theme}`} onClick={handleClick}>{content}</button>
   )
}

const Tabs = () => {
   const tab = useSelector((state: IStoreState) => state.ui.activeTab)
   return (
      <div className="tab-container" style={{fontSize:"16px", color:"#313037", height:"47px", borderBottom:"2px solid #DADADA", marginBottom:"15px", boxSizing:"border-box"}}>
         {TABS.map((el: any) => (el.id == tab ? <Tab style={{borderBottom:"2px solid black"}} id={el.id} content={el.text}/> : <Tab id={el.id} content={el.text}/>))}
      </div>
   )
}

export {Tabs}