import InfoLink  from '../comp/InfoLink'

interface TextProps {
  stateChange: (index: number) => void;
}

export default function Page({ stateChange }: TextProps ) {
  return (
    <main>
      <h3 className="section-title">I. The Burial of the Dead</h3>
      <p>
        <InfoLink id={0} stateChange={stateChange}>April is the cruelest month</InfoLink>, breeding<br />
        Lilacs out of the dead land, mixing<br />
        Memory and desire, stirring<br />
        Dull roots with spring rain.<br />
        Winter kept us warm, covering<br />
        Earth in forgetful snow, feeding<br />
        A little life with dried tubers.<br />
        </p>
    </main>
  )
}