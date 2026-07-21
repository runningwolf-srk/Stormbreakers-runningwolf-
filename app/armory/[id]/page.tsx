// @ts-nocheck
export const dynamic = 'force-dynamic'
export default function ArmoryDetail({ params }: { params: { id: string } }) {
  return <main style={{padding:40,background:'#0a0a0a',color:'white',minHeight:'100vh'}}><h1>Armory: {params?.id || 'wolf'}</h1><div style={{fontSize:60}}>🐺</div></main>
}
