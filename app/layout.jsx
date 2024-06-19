import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'


export const metadata = {
    title: "Share_prompts",
    description: "Discover and Share AI prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient">   

                </div>
            </div>
            <main className="app">
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;
