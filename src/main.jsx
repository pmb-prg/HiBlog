import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import './index.css'

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clsngxqcr0u0j01upyvbxdjfm/master",
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
      <NextUIProvider>
        <main className=' flex flex-col items-center justify-center'>
        <App />
        </main>
      </NextUIProvider>
  </ApolloProvider>,
)