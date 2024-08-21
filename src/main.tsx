import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router} from "react-router-dom"
import AppRoutes from './AppRoutes'
import Auth0ProviderWithNavigagte from './auth/Auth0ProviderWithNavigagte'
import { QueryClient, QueryClientProvider } from "react-query"
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
      <Auth0ProviderWithNavigagte>
      <AppRoutes />
      <Toaster visibleToasts={1} position='top-right' richColors />
      </Auth0ProviderWithNavigagte>
      </QueryClientProvider>
    </Router>
  </StrictMode>,
)
