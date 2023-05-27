import AsyncStorage from "@react-native-async-storage/async-storage"

export const setAccessToken = async (value:string) => {
    try {
      await AsyncStorage.setItem('accessToken', value)
    } catch (e) {
      console.log(e)
    }
  }

export async function getAccessToken(){
    try {
      const value = await AsyncStorage.getItem('accessToken')
      if(value !== null) {
        return value;
      } 
    } catch(e) {
      console.log(e)
    }
    
  }

  module.exports =  {
    setAccessToken,
    getAccessToken

};