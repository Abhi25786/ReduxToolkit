import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../redux/reducer/counterSlice';
import {userDecrement, userIncrement} from '../../redux/action/actions';
import styles from './styles';
import CustomButton from '../../Component/CustomButton';

export default function Home() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{alignSelf: 'center', fontFamily: 'bold', fontSize: 20}}>
        {count?.value}
      </Text>
      {/* <TouchableOpacity onPress={() => userIncrement(count?.value + 1)}>
        <View style={styles.buttonView}>
          <Text style={{alignSelf: 'center', fontFamily: 'bold', fontSize: 20}}>
            Incremment
          </Text>
        </View>
      </TouchableOpacity> */}

      <CustomButton
        onPress={() => userIncrement(count?.value + 1)}
        title={'Increment'}
      />
      <TouchableOpacity onPress={() => userDecrement(count?.value - 1)}>
        <View style={styles.buttonView}>
          <Text style={{alignSelf: 'center', fontFamily: 'bold', fontSize: 20}}>
            Decrement
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
