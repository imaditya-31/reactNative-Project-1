import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <FlatCards/>
          <ElevatedCards/>
          <FancyCards/>
          <FancyCards/>
          <ActionCards/>
          <ContactList/>
          <ContactList/>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default App