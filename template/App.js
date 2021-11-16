/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Route from '@navigations/route';

export default function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" hidden />
      <Route />
    </>
  );
}
