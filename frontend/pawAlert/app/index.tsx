import { useState } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";

export default function Index() {
  const [name, setName] = useState("")


  const handleSubmit =async() =>{
    const animalData = {name};

    const respose = await fetch("",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animalData),

    })
    alert("data submited")
    

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