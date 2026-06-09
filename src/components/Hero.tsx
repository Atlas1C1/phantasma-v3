
import PhoenixCore from './PhoenixCore'
export default function Hero(){
return <section className='hero'><div className='container grid'>
<div>
<p style={{color:'#17B1E8'}}>Where Digital Assets Come Alive</p>
<h1>Digital Assets<br/>That Evolve</h1>
<p>The blockchain powering intelligent assets, gaming economies and digital ownership.</p>
<button className='btn primary'>Explore SmartNFTs</button>
<button className='btn'>Start Building</button>
</div>
<div style={{display:'flex',justifyContent:'center'}}><PhoenixCore/></div>
</div></section>
}
