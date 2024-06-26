const jsonData = [
    {
       "id": "1",
       "agent": "Radulf Katlego",
       "unit": "#3",
       "description": "This luxurious studio apartment is in the heart of downtown.",
       "num_bedrooms": 1
    },
    {
       "id": "2",
       "agent": "Kelemen Konrad",
       "unit": "#36",
       "description": "We have a 1-bedroom available on the third floor.",
       "num_bedrooms": 1
    },
    {
       "id": "3",
       "agent": "Ton Jett",
       "unit": "#12",
       "description": "Beautiful 1-bedroom apartment with nearby yoga studio.",
       "num_bedrooms": 1
    },
    {
       "id": "4",
       "agent": "Fishel Salman",
       "unit": "#13",
       "description": "Beautiful studio with a nearby art studio.",
       "num_bedrooms": 1
    }
 ]

 function solution(jsonData) {
    const myArray = [];
   
    for (let i = 0; i < jsonData.length; i++){
        const data = jsonData[i]
        if (!data.description.includes("studio" || "1-bedroom")){
            myArray.push(data.num_bedrooms)
        }
        
    }


return myArray
}

console.log(solution(jsonData))
