import AsyncStorage from "@react-native-async-storage/async-storage";

const Session = {
    get: async (key)=>{
        return await AsyncStorage.getItem(key)
    },
    set: async (value, key) => {
        await AsyncStorage.setItem(key, value)
        return;
    }
}

export default Session