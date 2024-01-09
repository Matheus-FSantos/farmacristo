import { GlobalStyles } from "./assets/styles/global";
import { Routing } from "./routes/Routing";

const App = (): React.ReactElement => {
  return (
    <>
      <Routing /> 
			<GlobalStyles />
    </>
  )
}

export { App };
