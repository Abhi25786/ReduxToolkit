import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { decrement, increment } from './actions'
import { useSelector } from 'react-redux'

const Home = () => {
  const count = useSelector((state) => state.value)
  console.log(count,'count');
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <Button title='decrement' onPress={()=>decrement(1)}/>
                <Text style={{paddingHorizontal:20}}>{count}</Text>

      <Button title='increment' onPress={() => increment(1)} />
    </View>

  )
}

export default Home

const styles = StyleSheet.create({})