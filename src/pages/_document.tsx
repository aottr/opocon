import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <audio
        controls
        className='w-64'
        autoPlay={true}
        src="/static/images/music.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <span className='text-xs'>Rolemusic by The White</span>
    </Html>
  )
}
