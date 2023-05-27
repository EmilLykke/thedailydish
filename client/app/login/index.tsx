import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import { Stack, useRouter } from "expo-router";
import styles from "./index.style";
import { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  { getAccessToken, setAccessToken }  from "../../constants/accessToken"

type UserLogin = {
  username: string,
  password: string
}

const Login = () => {
  const router = useRouter()
  const [login, setLogin] = useState<UserLogin>({username: "", password: ""})


  const url = "http://192.168.86.213:5000/users/login";
  function handleSubmit(){
    axios.post(url,login).then(data => setAccessToken(data.data.accessToken)).then(() => router.replace("/"));
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
        
      />
      <View style={styles().container}>
        <View style={styles().inputContainer}>
          <TextInput style={styles().input} placeholder="Username" onChangeText={text => setLogin({...login, username: text})} />
        </View>
        <View style={styles().inputContainer}>
          <TextInput style={styles().input} placeholder="Password" onChangeText={text => setLogin({...login, password: text})} secureTextEntry={true} />
        </View>
        <TouchableOpacity style={styles().loginButton} onPress={handleSubmit}>
          <Text style={styles().loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
    
  )
}

export default Login;