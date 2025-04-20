interface CityOption {
  value: string;
  label: string;
  category?: string;
}

export const cityOptions: CityOption[] = [
  // Delhi and NCR
  { value: "delhi", label: "Delhi", category: "Popular Cities" },
  { value: "south-delhi", label: "South Delhi", category: "Delhi NCR" },
  { value: "east-delhi", label: "East Delhi", category: "Delhi NCR" },
  { value: "north-delhi", label: "North Delhi", category: "Delhi NCR" },
  { value: "west-delhi", label: "West Delhi", category: "Delhi NCR" },
  { value: "noida", label: "Noida", category: "Delhi NCR" },
  { value: "greater-noida", label: "Greater Noida", category: "Delhi NCR" },
  { value: "ghaziabad", label: "Ghaziabad", category: "Delhi NCR" },
  { value: "gurgaon", label: "Gurgaon", category: "Delhi NCR" },
  { value: "faridabad", label: "Faridabad", category: "Delhi NCR" },
  
  // Mumbai
  { value: "mumbai", label: "Mumbai", category: "Popular Cities" },
  { value: "andheri", label: "Andheri", category: "Mumbai" },
  { value: "bandra", label: "Bandra", category: "Mumbai" },
  { value: "thane", label: "Thane", category: "Mumbai" },
  { value: "navi-mumbai", label: "Navi Mumbai", category: "Mumbai" },
  
  // Bangalore
  { value: "bangalore", label: "Bangalore", category: "Popular Cities" },
  { value: "whitefield", label: "Whitefield", category: "Bangalore" },
  { value: "electronic-city", label: "Electronic City", category: "Bangalore" },
  { value: "koramangala", label: "Koramangala", category: "Bangalore" },
  { value: "indiranagar", label: "Indiranagar", category: "Bangalore" },
  
  // Other Major Cities
  { value: "pune", label: "Pune", category: "Popular Cities" },
  { value: "hyderabad", label: "Hyderabad", category: "Popular Cities" },
  { value: "chennai", label: "Chennai", category: "Popular Cities" },
  { value: "kolkata", label: "Kolkata", category: "Popular Cities" },
  { value: "ahmedabad", label: "Ahmedabad", category: "Popular Cities" }
];
