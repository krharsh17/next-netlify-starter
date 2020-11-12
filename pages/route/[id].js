import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function Home({SSRText}) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={"Welcome to my app! Here's some SSR: " + SSRText} />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

Home.getInitialProps = async context => {
  return {
    SSRText: "This is server-side rendered with ID: " + context.query.id + " at " + Date.now()
  }
}

export default Home
