export default function Marquee() {
  const words = ['DESIGN WITH PURPOSE', 'BUILD WITH CURIOSITY', 'KEEP LEARNING']
  return (
    <div className="marquee" aria-label="Design with purpose, build with curiosity, keep learning">
      <div className="marquee-track">
        {[...words, ...words].map((word, i) => <span key={`${word}-${i}`}>{word}<b>✳</b></span>)}
      </div>
    </div>
  )
}
