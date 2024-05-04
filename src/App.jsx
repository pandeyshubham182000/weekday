import React from "react";
import Cards from "./Components/Cards";
import { Api } from "./Components/Api";
import UserContextProvider from "./Context/UserContextProvider";


const App = () =>{
	return(
		<UserContextProvider>
			<Cards/>
		</UserContextProvider>	
	)
}
export default App