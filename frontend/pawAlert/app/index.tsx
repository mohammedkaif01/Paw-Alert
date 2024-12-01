import { useState } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";

export default function Index() {
  const [name, setName] = useState("")


  const handleSubmit =async() =>{
    const petData = { petName: name }; 

    const respose = await fetch("http://192.168.1.63:8000/admin/upload-pet-data",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(petData),

    })
    alert("data submited")
    setName("");
    console.log("data fetched from backend")
    

  }
  
 
 

  return (
    <View>
      <Text>mohammed kaif</Text>
      <View className="submitform">

        <TextInput 
        value={name}
        onChangeText={(text => setName(text))}
         placeholder="Enter your name" />

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}