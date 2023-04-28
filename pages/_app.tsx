import "src/styles/index.scss"
import "src/styles/indexTailwind.css"

import { useRouter } from 'next/router'
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()

  
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }
  
  export default App
  