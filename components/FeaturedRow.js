import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({title, restaurants, disciption}) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-gray-500 text-xs">{disciption}</Text>
        </View>
        <TouchableOpacity>
            <Text className="font-semibold" style={{color:themeColors.text}}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="overflow-visible py-6" horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15}}>
        {
            restaurants.map((item,index)=>{
                return(<RestaurantCard item={item} key={index}/>)
            })
        }
      </ScrollView>
    </View>
  )
}