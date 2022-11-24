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
        Summer surprised us, coming over the Starnbergersee <br />
        With a shower of rain; we stopped in the colonnade, <br />
		And went on in sunlight, into the Hofgarten <br />
		And drank coffee, and talked for an hour. <br />
		Bin gar keine Russin, stamm' aus Litauen, echt deutsch. <br />
		And when we were children, stayiing at the archduke's, <br />
		My cousin's, he took me out on a sled, <br />
		And I was frightened. He said, Marie, <br />
		Marie, hold on tight. And down we went. <br />
		In the mountains, there you feel free. <br />
		I read, much of the night, and go south in the winter.
        </p>
		<p>
		What are the roots that clutch, what branches grow <br />
		Out of this stony rubbish? Son of man, <br />
		You cannot say, or guess, for you know only <br />
		A heap of broken images, where the sun beats, <br />
		And the dead tree gives no shelter, the cricket no relief <br />
		And the dry stone no sound of water. Only  <br />
		There is shadow under this red rock, <br />
		(Come in under the shadow of this red rock), <br />
		And I will show you something different from either <br />
		Your shadow at morning stridig behind you <br />
		Or your shadow at evening rising to meet you; <br />
		I will show you fear in a handful of dust. <br />
		</p>
    </main>
  )
}
