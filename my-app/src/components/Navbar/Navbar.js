import React, { useContext, useEffect, useState } from 'react'
import { Text, View, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Exercise from '../Exercise/Exercise';
import Nutrition from '../Nutrition/Nutrition';
import { HomeContext } from '../../context/HomeContext';
import { assignSelector, userSelector } from '../../redux/selector';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { findById } from '../../thunk/assignThunk';

const Navbar = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions();
  const [routes] = React.useState([
    { key: 'exercise', title: 'Chế độ luyện tập' },
    { key: 'nutrition', title: 'Chế độ dinh dưỡng' },
  ]);

  const assign = useSelector(assignSelector).userAssign;
  
  const exercises = assign ? assign.exercises : null;
  const nutritions = assign ? assign.nutritions : null;

  const [date, setDate] = useState(assign ? assign.date : Date.now());

  useEffect(() => {
    if(!assign) return
    dispatch(findById(assign._id));
    setDate(assign.date)
  },[assign])

  const selectAssign = useSelector(assignSelector).selectAssign;

  const renderScene = SceneMap({
    exercise: () => <Exercise exercises={exercises} date={assign ? assign.date : Date.now()} />,
    nutrition: () => <Nutrition nutritions={nutritions} assign={assign} selectAssign={selectAssign} date={date} setDate={setDate} />,
  });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => <TabBar {...props} style={{ backgroundColor: '#A1BDD914' }} indicatorStyle={{ backgroundColor: '#579DFF' }} />}
    />
  )
}

export default Navbar